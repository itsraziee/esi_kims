import { uuidv4 } from '@firebase/util';
import Close from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';
import {
  AppBar,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Form, FormikProvider, useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import * as Yup from 'yup';
import { getRequirementsUrl, updateRequestRequirements, uploadRequirements } from '../../../service/documentRequest';

export default function BarangayClearanceForm({ onSubmitForm }) {
  const [requirementObjectURLs, setRequirementObjectURLs] = useState([]);
  const [previewSrc, setPreviewSrc] = useState();
  const [requirementsFile, setRequirementsFile] = useState([]);
  const [openReferenceNumber, setOpenReferenceNumber] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const [referenceNumberCloseLoading, setReferenceNumberCloseLoading] = useState(true);

  const RequestDocumentFormSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('First name is required'),
    middleName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!'),
    lastName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Last name is required'),
    suffix: Yup.string().max(3, 'Too Long!'),
    purok: Yup.string().required('Purok is required'),
    citizenship: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Citizenship is required'),
    sex: Yup.string().oneOf(['male', 'female']).required('Sex is Required'),
    age: Yup.number().typeError('Age must be a number').integer('Age must be an integer').required('Age is required'),
    religion: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Religion is required'),
    civilStatus: Yup.string().oneOf(['single', 'married', 'widowed', 'separated']).required('Civil Status is required'),
    dateOfBirth: Yup.string().required('Date of Birth is required'),
    placeOfBirth: Yup.string().required('Place of Birth is required'),
    height: Yup.string().required('Height is required'),
    weight: Yup.string().required('Weight is required'),
    purpose: Yup.string().required('Purpose is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      suffix: '',
      purok: '',
      citizenship: '',
      sex: '',
      age: '',
      religion: '',
      civilStatus: '',
      dateOfBirth: '',
      placeOfBirth: '',
      height: '',
      weight: '',
      purpose: '',
    },
    validationSchema: RequestDocumentFormSchema,

    onSubmit: (data) => {
      console.log({ data });
      return onSubmitForm(data)
        .then((res) => {
          const requestUid = res.id;

          return uploadRequirements(requirementsFile, requestUid).then((res) => {
            const filenames = requirementsFile.map((requirement) => requirement.file.name);
            return getRequirementsUrl(filenames, requestUid).then((res) => {
              const requestUrls = res;
              return updateRequestRequirements(requestUid, requestUrls).then((res) => {
                enqueueSnackbar('Barangay Clearance Request Submitted Successfully.', {
                  variant: 'success',
                });

                setReferenceNumber(requestUid);
                setOpenReferenceNumber(true);
                setTimeout(() => setReferenceNumberCloseLoading(false), 5000);
              });
            });
          });
        })
        .catch((err) => {
          console.log({ err });
          enqueueSnackbar('Request Failed.', { variant: 'error' });
        });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  function handleDelete(id) {
    console.log({ id });

    setRequirementsFile(
      requirementsFile.filter((file) => {
        return id !== file.id;
      })
    );

    setRequirementObjectURLs(
      requirementObjectURLs.filter((reqUrl) => {
        return id !== reqUrl.id;
      })
    );
  }

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <>
            <TextField
              fullWidth
              name="firstName"
              label="First Name*"
              placeholder="Juan"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              fullWidth
              name="middleName"
              label="Middle Name*"
              placeholder="Dela"
              {...getFieldProps('middleName')}
              error={Boolean(touched.middleName && errors.middleName)}
              helperText={touched.middleName && errors.middleName}
            />
            <TextField
              fullWidth
              name="lastName"
              label="Last Name*"
              placeholder="Cruz"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
            <TextField
              fullWidth
              name="suffix"
              label="Suffix"
              placeholder="JR/SR/II"
              {...getFieldProps('suffix')}
              error={Boolean(touched.suffix && errors.suffix)}
              helperText={touched.suffix && errors.suffix}
            />
          </>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <>
            {/* <TextField
              fullWidth
              name="address"
              label="Address"
              {...getFieldProps('address')}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            /> */}
            <FormControl
              helperText={touched.purok && errors.purok}
              fullWidth
              error={Boolean(touched.purok && errors.purok)}
            >
              <InputLabel id="status-select-label">Purok*</InputLabel>
              <Select
                name="purok"
                labelId="purok"
                id="purok"
                value={formik.values.purok}
                label="Select a purok"
                onChange={handleChange}
                {...getFieldProps('purok')}
                error={Boolean(touched.purok && errors.purok)}
                helperText={touched.purok && errors.purok}
              >
                <MenuItem value="1">Purok 1 Brgy. Proper</MenuItem>
                <MenuItem value="2">Purok 2 Brgy. Proper</MenuItem>
                <MenuItem value="3a">Purok 3A Brgy. Proper</MenuItem>
                <MenuItem value="3b">Purok 3B Brgy. Proper</MenuItem>
                <MenuItem value="4">Purok 4 Brgy. Proper</MenuItem>
                <MenuItem value="5">Purok 5 Sitio Malapinggan</MenuItem>
                <MenuItem value="6">Purok 6 Sitio Balangcao</MenuItem>
                <MenuItem value="7">Purok 7 Sitio Balangcao</MenuItem>
                <MenuItem value="8">Purok 8 Sitio Balangcao</MenuItem>
                <MenuItem value="9">Purok 9 Sitio Balangcao</MenuItem>
                <MenuItem value="10a">Purok 10 Sitio Palo</MenuItem>
                <MenuItem value="11b">Purok 11 Sitio Palo</MenuItem>
                <MenuItem value="12">Purok 12 Siniloan</MenuItem>
                <MenuItem value="13">Purok 13 Kiramong</MenuItem>
              </Select>
              {Boolean(touched.purok && errors.purok) && <FormHelperText>Please select a Purok.</FormHelperText>}
            </FormControl>
            <TextField
              fullWidth
              name="citizenship"
              label="Citizenship*"
              {...getFieldProps('citizenship')}
              error={Boolean(touched.citizenship && errors.citizenship)}
              helperText={touched.citizenship && errors.citizenship}
            />
            {/* <FormControl helperText={touched.sex && errors.sex} fullWidth>
              <InputLabel id="sex-select-label">Sex</InputLabel>
              <Select
                name="sex"
                labelId="sex-select-label"
                id="sex-select"
                value={formik.values.sex}
                label="Sex"
                onChange={handleChange}
                {...getFieldProps('sex')}
                error={Boolean(touched.sex && errors.sex)}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl> */}
            <FormControl helperText={touched.sex && errors.sex} fullWidth error={Boolean(touched.sex && errors.sex)}>
              <InputLabel id="status-select-label">Sex*</InputLabel>
              <Select
                name="sex"
                labelId="sex"
                id="sex"
                value={formik.values.sex}
                label="Sex"
                onChange={handleChange}
                {...getFieldProps('sex')}
                error={Boolean(touched.sex && errors.sex)}
                helperText={touched.sex && errors.sex}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
              {Boolean(touched.sex && errors.sex) && <FormHelperText>Please select a Sex.</FormHelperText>}
            </FormControl>
          </>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <>
            <TextField
              fullWidth
              name="age"
              label="Age*"
              {...getFieldProps('age')}
              error={Boolean(touched.age && errors.age)}
              helperText={touched.age && errors.age}
            />
            <TextField
              fullWidth
              name="religion"
              label="Religion*"
              {...getFieldProps('religion')}
              error={Boolean(touched.religion && errors.religion)}
              helperText={touched.religion && errors.religion}
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
            {/* <FormControl helperText={touched.civilStatus && errors.civilStatus} fullWidth>
              <InputLabel id="status-select-label">Civil Status</InputLabel>
              <Select
                name="civilStatus"
                labelId="status-select-label"
                id="status-select"
                value={formik.values.civilStatus}
                label="civilStatus"
                onChange={handleChange}
                {...getFieldProps('civilStatus')}
                error={Boolean(touched.civilStatus && errors.civilStatus)}
              >
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="married">Married</MenuItem>
                <MenuItem value="separated">Separated</MenuItem>
                <MenuItem value="widowed">Widowed</MenuItem>
              </Select>
            </FormControl> */}
            <TextField
              fullWidth
              name="dateOfBirth"
              id="dateOfBirth"
              label="Date of Birth*"
              type="date"
              {...getFieldProps('dateOfBirth')}
              error={Boolean(touched.dateOfBirth && errors.dateOfBirth)}
              helperText={touched.dateOfBirth && errors.dateOfBirth}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <>
            <TextField
              fullWidth
              name="placeOfBirth"
              label="Place of Birth*"
              placeholder="Barangay/Municipality/Province"
              {...getFieldProps('placeOfBirth')}
              error={Boolean(touched.placeOfBirth && errors.placeOfBirth)}
              helperText={touched.placeOfBirth && errors.placeOfBirth}
            />
            {/* <TextField
              fullWidth
              name="height"
              label="Height"
              {...getFieldProps('height')}
              error={Boolean(touched.height && errors.height)}
              helperText={touched.height && errors.height}
            /> */}
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
            {/* <TextField
              fullWidth
              name="weight"
              label="Weight"
              {...getFieldProps('weight')}
              error={Boolean(touched.weight && errors.weight)}
              helperText={touched.weight && errors.weight}
            /> */}
            <TextField
              fullWidth
              name="purpose"
              label="Purpose*"
              {...getFieldProps('purpose')}
              error={Boolean(touched.purpose && errors.purpose)}
              helperText={touched.purpose && errors.purpose}
            />
          </>
        </Stack>
        <Box sx={{ color: 'gray', mb: 1 }}>
          <Typography variant="subtitle4">Barangay Clearance Requirement</Typography>
          <Typography>1. Purok Cerification</Typography>
        </Box>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button sx={{ minWidth: 275 }} variant="outlined" component="label">
            Upload Requirements
            <input
              type="file"
              hidden
              multiple
              onChange={(e) => {
                const files = [...e.target.files];
                console.log({ e, files });
                if (files) {
                  setRequirementObjectURLs((prev) => {
                    const newFiles = files.map((file) => {
                      console.log({ file });
                      const id = uuidv4();
                      return {
                        fileName: file.name,
                        link: URL.createObjectURL(file),
                        id,
                      };
                    });

                    return [...prev, ...newFiles];
                  });

                  setRequirementsFile((prev) => {
                    const newFiles = files.map((file) => {
                      console.log({ file });
                      const id = uuidv4();
                      return { file, id };
                    });

                    return [...prev, ...newFiles];
                  });
                }
              }}
            />
          </Button>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            disabled={requirementsFile?.length < 1}
          >
            Submit
          </LoadingButton>
        </Stack>
        {requirementObjectURLs.length > 0 && (
          <Grid container spacing={1} sx={{ my: 1 }}>
            {requirementObjectURLs.map((reqUrl) => {
              console.log({ reqUrl });
              return (
                <Grid item key={reqUrl.id}>
                  <Chip
                    color="primary"
                    label={reqUrl.fileName}
                    component="a"
                    onClick={() => {
                      setPreviewSrc(reqUrl.link);
                    }}
                    target="_blank"
                    onDelete={() => handleDelete(reqUrl.id)}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Form>

      <Dialog onClose={() => setPreviewSrc(null)} open={previewSrc} fullScreen>
        <AppBar sx={{ position: 'fixed' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => setPreviewSrc(null)} aria-label="close">
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Preview
            </Typography>
          </Toolbar>
        </AppBar>
        <iframe title="preview" src={previewSrc} style={{ height: '100vh' }} />
      </Dialog>

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
    </FormikProvider>
  );
}

BarangayClearanceForm.propTypes = {
  // Function to call on submit
  onSubmitForm: PropTypes.func.isRequired,
};
