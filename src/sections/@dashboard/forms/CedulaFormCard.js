import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';

import { Form, FormikProvider, useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import * as Yup from 'yup';

export default function CedulaFormCard({ onSubmitForm }) {
  const [openReferenceNumber, setOpenReferenceNumber] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const [referenceNumberCloseLoading, setReferenceNumberCloseLoading] = useState(true);

  const RequestDocumentFormSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('First name is required'),
    middleName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!'),
    lastName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Last name is required'),
    address: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Address is required'),
    placeofbirth: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Place of Birth is required'),
    citizenship: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Citizenship is required'),
    civilStatus: Yup.string().oneOf(['single', 'married', 'widowed', 'separated']).required('Civil Status is required'),
    occupation: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Occupation is required'),
    weight: Yup.string().required('Weight is required'),
    height: Yup.string().required('Height is required'),
    sex: Yup.string().oneOf(['male', 'female']).required('Sex is Required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      address: '',
      citizenship: '',
      placeofbirth: '',
      sex: '',
      civilStatus: '',
      height: '',
      weight: '',
      occupation: '',
    },
    validationSchema: RequestDocumentFormSchema,
    onSubmit: (data) => {
      console.log({ data });
      return onSubmitForm(data)
        .then((res) => {
          const requestUid = res.id;

          enqueueSnackbar('Cedula Request Submitted Successfully.', {
            variant: 'success',
          });

          setReferenceNumber(requestUid);
          setOpenReferenceNumber(true);
          setTimeout(() => setReferenceNumberCloseLoading(false), 5000);
        })
        .catch((err) => {
          console.log({ err });
          enqueueSnackbar('Request Failed.', { variant: 'error' });
        });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;


  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <>
            <TextField
              fullWidth
              name="firstName"
              label="First Name*"
              placeholder="e.g. Juan"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              fullWidth
              name="middleName"
              label="Middle Name"
              placeholder="e.g. Santos"
              {...getFieldProps('middleName')}
              error={Boolean(touched.middleName && errors.middleName)}
              helperText={touched.middleName && errors.middleName}
            />
            <TextField
              fullWidth
              name="lastName"
              label="Last Name*"
              placeholder="e.g. Dela Cruz"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
            <TextField
              fullWidth
              name="citizenship"
              label="Citizenship*"
              placeholder="e.g. Filipino"
              {...getFieldProps('citizenship')}
              error={Boolean(touched.citizenship && errors.citizenship)}
              helperText={touched.citizenship && errors.citizenship}
            />
            <FormControl helperText={touched.sex && errors.sex} fullWidth error={Boolean(touched.sex && errors.sex)}>
              <InputLabel id="status-select-label">Sex*</InputLabel>
              <Select
                name="sex"
                labelId="sex"
                id="sex"
                value={formik.values.sex}
                label="Sex*"
                onChange={handleChange}
                {...getFieldProps('sex')}
                error={Boolean(touched.sex && errors.sex)}
                helperText={touched.sex && errors.sex}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
              {Boolean(touched.sex && errors.sex) && <FormHelperText>Please select a Sex*</FormHelperText>}
            </FormControl>
          </>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <>
            <TextField
              fullWidth
              name="address"
              label="Address*"
              placeholder="PUROK,BRGY,MUNICIPALITY,PROVINCE"
              {...getFieldProps('address')}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />
            <TextField
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="placeofbirth"
              label="Place of Birth*"
              placeholder="Barangay,Municipality,Province"
              {...getFieldProps('placeofbirth')}
              error={Boolean(touched.placeofbirth && errors.placeofbirth)}
              helperText={touched.placeofbirth && errors.placeofbirth}
            />
            <FormControl
              helperText={touched.civilStatus && errors.civilStatus}
              fullWidth
              error={Boolean(touched.civilStatus && errors.civilStatus)}
            >
              <InputLabel id="status-select-label">Civil Status*</InputLabel>
              <Select
                name="civilStatus"
                labelId="civilStatus"
                id="civilStatus"
                value={formik.values.civilStatus}
                label="Civil Status"
                onChange={handleChange}
                {...getFieldProps('civilStatus')}
                error={Boolean(touched.civilStatus && errors.civilStatus)}
              >
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="married">Married</MenuItem>
                <MenuItem value="separated">Separated</MenuItem>
                <MenuItem value="widowed">Widowed</MenuItem>
              </Select>
              {Boolean(touched.civilStatus && errors.civilStatus) && (
                <FormHelperText>Please select a Civil Status.</FormHelperText>
              )}
            </FormControl>
          </>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <>
            <TextField
              fullWidth
              name="height"
              label="Height*"
              type="number"
              {...getFieldProps('height')}
              error={Boolean(touched.height && errors.height)}
              helperText={touched.height && errors.height}
              InputProps={{
                endAdornment: <InputAdornment position="start">in</InputAdornment>,
              }}
            />
            <TextField
              fullWidth
              name="weight"
              label="Weight*"
              type="number"
              {...getFieldProps('weight')}
              error={Boolean(touched.weight && errors.weight)}
              helperText={touched.weight && errors.weight}
              InputProps={{
                endAdornment: <InputAdornment position="start">kg</InputAdornment>,
              }}
            />
            <TextField
              fullWidth
              name="occupation"
              label="Occupation*"
              placeholder="e.g. Doctor"
              {...getFieldProps('occupation')}
              error={Boolean(touched.occupation && errors.occupation)}
              helperText={touched.occupation && errors.occupation}
            />
          </>
        </Stack>
        <Box sx={{ color: 'gray', mb: 1 }}>
          <Typography variant="subtitle4">Note to the requestor:</Typography>
          <Typography>
            The Name of the requestor is hereby ask for the billing transaction pursposes only. All other personal
            information required for this document shall only be done in the office of the barangay physically prior to
            obtain the cedula.{' '}
          </Typography>
        </Box>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Submit
          </LoadingButton>
        </Stack>

        <Dialog open={openReferenceNumber}>
          <DialogTitle>Reference Number</DialogTitle>
          <DialogContentText sx={{ p: 5 }}>
            Your Reference Number is:{' '}
            <Tooltip title="Copy to clipboard">
              <Link
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  navigator.clipboard
                    .writeText(referenceNumber)
                    .then((res) => enqueueSnackbar('Reference number copied to clipboard', { variant: 'success' }));
                }}
              >
                {referenceNumber}
              </Link>
            </Tooltip>
          </DialogContentText>
          <DialogActions>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                navigator.clipboard
                  .writeText(referenceNumber)
                  .then((res) => enqueueSnackbar('Reference number copied to clipboard', { variant: 'success' }));
              }}
              sx={{ color: 'white' }}
            >
              Copy
            </Button>
            <LoadingButton
              variant="contained"
              color="error"
              onClick={() => {
                setOpenReferenceNumber(false);
                setReferenceNumberCloseLoading(true);
                window.location.reload();
              }}
              loading={referenceNumberCloseLoading}
            >
              Close
            </LoadingButton>
          </DialogActions>
        </Dialog>
      </Form>
    </FormikProvider>
  );
}

CedulaFormCard.propTypes = {
  // Function to call on submit
  onSubmitForm: PropTypes.func.isRequired,
};
