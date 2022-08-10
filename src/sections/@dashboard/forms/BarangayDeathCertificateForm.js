import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Button, Stack, TextField, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { PropTypes } from 'prop-types';

export default function BarangayDeathCertificateForm({ onSubmitForm }) {
  const RequestDocumentFormSchema = Yup.object().shape({
    relationship: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Relationship is required'),
    deceasedname: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Deceased Name is required'),
    placeofdeath: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Place of Birth is required'),
    dateofdeath: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Date of Death is required'),
    age: Yup.number().min(0, 'Must be positive!').required('Age is required'),
    purok: Yup.number().min(0, 'Must be positive!').required('Purok is required'),
    causeofdeath: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Cause of Death is required'),
    address: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Address is required'),
    civilstatus: Yup.string().oneOf(['single', 'married', 'widowed', 'separated']).required('Civil Status is required'),
    placeburried: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Place Burried is required'),
    religion: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Religion is required'),
    occupation: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Occupation is required'),
    nameoffather: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name of Father is required'),
    maidennameofmother: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Maiden Name of Mother is required'),
    dateofbirth: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Date of birth is required'),
  });

  const formik = useFormik({
    initialValues: {
      relationship: '',
      purok: '',
      deceasedname: '',
      dateofdeath: '',
      age: '',
      causeofdeath: '',
      address: '',
      civilstatus: '',
      placeburried: '',
      religion: '',
      occupation: '',
      nameoffather: '',
      maidennameofmother: '',
      placeofdeath: '',
      dateofbirth: '',
    },
    validationSchema: RequestDocumentFormSchema,
    onSubmit: (data) => {
      console.log({ data });
      return onSubmitForm(data);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
       
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              name="deceasedname"
              label="Deceased Name"
              {...getFieldProps('deceasedname')}
              error={Boolean(touched.deceasedname && errors.deceasedname)}
              helperText={touched.deceasedname && errors.deceasedname}
            />
            <TextField
              fullWidth
              name="purok"
              label="Purok"
              {...getFieldProps('purok')}
              error={Boolean(touched.purok && errors.purok)}
              helperText={touched.purok && errors.purok}
            />
            <TextField
              fullWidth
              name="placeofdeath"
              label="Place of Death"
              {...getFieldProps('placeofdeath')}
              error={Boolean(touched.placeofdeath && errors.placeofdeath)}
              helperText={touched.placeofdeath && errors.placeofdeath}
            />
            <TextField
              fullWidth
              name="dateofbirth"
              id="dateofbirth"
              label="Date of Birth"
              type="date"
              {...getFieldProps('dateofbirth')}
              error={Boolean(touched.dateofbirth && errors.dateofbirth)}
              helperText={touched.dateofbirth && errors.dateofbirth}
              InputLabelProps={{
                shrink: true,
              }}
            />
            
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <TextField
              fullWidth
              name="dateofdeath"
              id="dateofdeath"
              label="Date of Death"
              type="date"
              {...getFieldProps('dateofdeath')}
              error={Boolean(touched.dateofdeath && errors.dateofdeath)}
              helperText={touched.dateofdeath && errors.dateofdeath}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name="age"
              label="Age"
              {...getFieldProps('age')}
              error={Boolean(touched.age && errors.age)}
              helperText={touched.age && errors.age}
            />
            <TextField
              fullWidth
              name="causeofdeath"
              label="Cause of Death"
              {...getFieldProps('causeofdeath')}
              error={Boolean(touched.causeofdeath && errors.causeofdeath)}
              helperText={touched.causeofdeath && errors.causeofdeath}
            />
            <TextField
              fullWidth
              name="address"
              label="Address"
              {...getFieldProps('address')}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
            <FormControl helperText={touched.civilstatus && errors.civilstatus} fullWidth>
              <InputLabel id="status-select-label">Civil Status</InputLabel>
              <Select
                name="civilstatus"
                labelId="status-select-label"
                id="status-select"
                value={formik.values.civilstatus}
                label="Civil Status"
                onChange={handleChange}
                {...getFieldProps('civilstatus')}
                error={Boolean(touched.civilstatus && errors.civilstatus)}
              >
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="married">Married</MenuItem>
                <MenuItem value="separated">Separated</MenuItem>
                <MenuItem value="widowed">Widowed</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              name="placeburried"
              label="Place Burried"
              {...getFieldProps('placeburried')}
              error={Boolean(touched.placeburried && errors.placeburried)}
              helperText={touched.placeburried && errors.placeburried}
            />
            <TextField
              fullWidth
              name="religion"
              label="Religion"
              {...getFieldProps('religion')}
              error={Boolean(touched.religion && errors.religion)}
              helperText={touched.religion && errors.religion}
            />
            <TextField
              fullWidth
              name="occupation"
              label="Occupation"
              {...getFieldProps('occupation')}
              error={Boolean(touched.occupation && errors.occupation)}
              helperText={touched.occupation && errors.occupation}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              name="nameoffather"
              label="Name of Father"
              {...getFieldProps('nameoffather')}
              error={Boolean(touched.nameoffather && errors.nameoffather)}
              helperText={touched.nameoffather && errors.nameoffather}
            />
            <TextField
              fullWidth
              name="maidennameofmother"
              label="Maiden Name of Mother"
              {...getFieldProps('maidennameofmother')}
              error={Boolean(touched.maidennameofmother && errors.maidennameofmother)}
              helperText={touched.maidennameofmother && errors.maidennameofmother}
            />
            <TextField
              fullWidth
              name="relationship"
              label="Relationship"
              {...getFieldProps('relationship')}
              error={Boolean(touched.relationship && errors.relationship)}
              helperText={touched.relationship && errors.relationship}
            />
          </Stack>
        

        <Box sx={{ color: 'gray', my: 2 }}>
          <Typography sx={{ color: 'gray' }} variant="subtitle4">
            Barangay Death Certificate Requirement
          </Typography>
          <Typography>1. Purok Cerification</Typography>
          <Typography>
            2. Health Center Certification (Document cannot be process without this certification)
          </Typography>
        </Box>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button sx={{ minWidth: 275 }} variant="outlined" component="label">
            Upload Requirements
            <input type="file" hidden />
          </Button>
          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Submit
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}

BarangayDeathCertificateForm.propTypes = {
  // Function to call on submit
  onSubmitForm: PropTypes.func.isRequired,
};
