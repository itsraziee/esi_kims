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

// TODO: Date of Birth error message is not working!
// TODO: Time of Birth error message is not working!
// TODO: Death error message is not working (mag red ra sya peru dili ga show ang error message)!
// TODO: Fathers Occupation error message is not working (mag red ra sya peru dili ga show ang error message)!

export default function BarangayBirthCertificateForm({ onSubmitForm }) {
  // TODO duplicate on other document forms
  const [requirementObjectURLs, setRequirementObjectURLs] = useState([]);
  const [previewSrc, setPreviewSrc] = useState();
  const [requirementsFile, setRequirementsFile] = useState([]);
  const [openReferenceNumber, setOpenReferenceNumber] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const [referenceNumberCloseLoading, setReferenceNumberCloseLoading] = useState(true);
  // end duplicate

  const RequestDocumentFormSchema = Yup.object().shape({
    nameofchild: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name of Child is required'),
    sex: Yup.string().oneOf(['male', 'female']).required('Sex is Required'),
    dateAndTimeOfBirth: Yup.string().required('Date and Time of Birth is required'),
    purok: Yup.string().required('Purok is required'),
    weight: Yup.string().required('Weight is required'),
    birthorder: Yup.string().required('Birth Order is required'),
    placeofbirth: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Place of Birth is required'),
    nameofmother: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name of mother is required'),
    mothercitizenship: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Mothers Citizenship is required'),
    motheroccupation: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Mothers Occupation is required'),
    nameoffather: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Fathers Name is required'),
    fathercitizenship: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Fathers Citizenship is required'),
    fatheroccupation: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Fathers Occupation is required'),
    dateofmarriage: Yup.string(),
    placeofmarriage: Yup.string(),
    nameofattendant: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name of Attendant is required'),
    addressofattendant: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Address of Attendant is required'),
    yearofresidency: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Year of Residency is required'),
  });

  // TODO change sex field into a selector
  // TODO add sample data to fields
  const formik = useFormik({
    initialValues: {
      nameofchild: '',
      sex: '',
      purok: '',
      dateAndTimeOfBirth: '',
      weight: '',
      birthorder: '',
      placeofbirth: '',
      nameofmother: '',
      mothercitizenship: '',
      motheroccupation: '',
      nameoffather: '',
      fathercitizenship: '',
      fatheroccupation: '',
      dateofmarriage: '',
      placeofmarriage: '',
      nameofattendant: '',
      addressofattendant: '',
      yearofresidency: '',
    },
    validationSchema: RequestDocumentFormSchema,
    onSubmit: (data) => {
      console.log({ data });
      return (
        onSubmitForm(data)
          // TODO duplicate on other forms
          .then((res) => {
            const requestUid = res.id;

            return uploadRequirements(requirementsFile, requestUid).then((res) => {
              const filenames = requirementsFile.map((requirement) => requirement.file.name);
              return getRequirementsUrl(filenames, requestUid).then((res) => {
                const requestUrls = res;
                return updateRequestRequirements(requestUid, requestUrls).then((res) => {
                  enqueueSnackbar('Barangay Birth Certificate Request Submitted Successfully.', {
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
          })
        // End duplicate
      );
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  // TODO duplicate on other document forms
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
  // end duplicate on other forms

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <TextField
            fullWidth
            name="nameofchild"
            label="Name of Child*"
            placeholder="Juan Dela Cruz"
            {...getFieldProps('nameofchild')}
            error={Boolean(touched.nameofchild && errors.nameofchild)}
            helperText={touched.nameofchild && errors.nameofchild}
          />
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
              label="Select a purok*"
              onChange={handleChange}
              {...getFieldProps('purok')}
              error={Boolean(touched.purok && errors.purok)}
              helperText={touched.purok && errors.purok}
            >
              <MenuItem value="Purok 1 Brgy. Proper">Purok 1 Brgy. Proper</MenuItem>
              <MenuItem value="Purok 2 Brgy. Proper">Purok 2 Brgy. Proper</MenuItem>
              <MenuItem value="Purok 3A Brgy. Proper">Purok 3A Brgy. Proper</MenuItem>
              <MenuItem value="Purok 3B Brgy. Proper">Purok 3B Brgy. Proper</MenuItem>
              <MenuItem value="Purok 4 Brgy. Proper">Purok 4 Brgy. Proper</MenuItem>
              <MenuItem value="Purok 5 Sitio Malapinggan">Purok 5 Sitio Malapinggan</MenuItem>
              <MenuItem value="Purok 6 Sitio Balangcao">Purok 6 Sitio Balangcao</MenuItem>
              <MenuItem value="Purok 7 Sitio Balangcao">Purok 7 Sitio Balangcao</MenuItem>
              <MenuItem value="Purok 8 Sitio Balangcao">Purok 8 Sitio Balangcao</MenuItem>
              <MenuItem value="Purok 9 Sitio Balangcao">Purok 9 Sitio Balangcao</MenuItem>
              <MenuItem value="Purok 10 Sitio Palo">Purok 10 Sitio Palo</MenuItem>
              <MenuItem value="Purok 11 Sitio Palo">Purok 11 Sitio Palo</MenuItem>
              <MenuItem value="Purok 12 Siniloan">Purok 12 Siniloan</MenuItem>
              <MenuItem value="Purok 13 Kiramong">Purok 13 Kiramong</MenuItem>
            </Select>
            {Boolean(touched.purok && errors.purok) && <FormHelperText>Please select a Purok</FormHelperText>}
          </FormControl>
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
          <TextField
            fullWidth
            name="dateAndTimeOfBirth"
            id="dateAndTimeOfBirth"
            label="Date and Time of Birth*"
            type="datetime-local"
            defaultValue="1997-10-23 / 10:23"
            {...getFieldProps('dateAndTimeOfBirth')}
            error={Boolean(touched.dateAndTimeOfBirth && errors.dateAndTimeOfBirth)}
            helperText={touched.dateAndTimeOfBirth && errors.dateAndTimeOfBirth}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
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
            // sx={{ minWidth: 91, mt: 2 }}
            fullWidth
            name="birthorder"
            label="Birth Order*"
            placeholder="First"
            {...getFieldProps('birthorder')}
            error={Boolean(touched.birthorder && errors.birthorder)}
            helperText={touched.birthorder && errors.birthorder}
          />

          <TextField
            sx={{ minWidth: 91, mt: 2 }}
            fullWidth
            name="placeofbirth"
            label="Place of Birth*"
            placeholder="Barangay/Municipality/Province"
            {...getFieldProps('placeofbirth')}
            error={Boolean(touched.placeofbirth && errors.placeofbirth)}
            helperText={touched.placeofbirth && errors.placeofbirth}
          />
        </Stack>


        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <TextField
            fullWidth
            name="nameofattendant"
            label="Name of Attendant*"
            {...getFieldProps('nameofattendant')}
            error={Boolean(touched.nameofattendant && errors.nameofattendant)}
            helperText={touched.nameofattendant && errors.nameofattendant}
          />
          <TextField
            fullWidth
            name="addressofattendant"
            label="Address Of Attendant*"
            placeholder="Barangay/Municipality/Province"
            {...getFieldProps('addressofattendant')}
            error={Boolean(touched.addressofattendant && errors.addressofattendant)}
            helperText={touched.addressofattendant && errors.addressofattendant}
          />
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <TextField
            fullWidth
            name="nameofmother"
            label="Name of Mother*"
            placeholder="Juan Dela Cruz"
            {...getFieldProps('nameofmother')}
            error={Boolean(touched.nameofmother && errors.nameofmother)}
            helperText={touched.nameofmother && errors.nameofmother}
          />
          <TextField
            fullWidth
            name="mothercitizenship"
            label="Mothers Citizenship*"
            {...getFieldProps('mothercitizenship')}
            error={Boolean(touched.mothercitizenship && errors.mothercitizenship)}
            helperText={touched.mothercitizenship && errors.mothercitizenship}
          />
          <TextField
            fullWidth
            name="motheroccupation"
            label="Mothers Occupation*"
            {...getFieldProps('motheroccupation')}
            error={Boolean(touched.motheroccupation && errors.motheroccupation)}
            helperText={touched.motheroccupation && errors.motheroccupation}
          />
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <TextField
            fullWidth
            name="nameoffather"
            label="Name of Father*"
            placeholder="Juan Dela Cruz"
            {...getFieldProps('nameoffather')}
            error={Boolean(touched.nameoffather && errors.nameoffather)}
            helperText={touched.nameoffather && errors.nameoffather}
          />
          <TextField
            fullWidth
            name="fathercitizenship"
            label="Fathers Citizenship*"
            {...getFieldProps('fathercitizenship')}
            error={Boolean(touched.fathercitizenship && errors.fathercitizenship)}
            helperText={touched.fathercitizenship && errors.fathercitizenship}
          />
          <TextField
            fullWidth
            name="fatheroccupation"
            label="Fathers Occupation*"
            {...getFieldProps('fatheroccupation')}
            error={Boolean(touched.fatheroccupation && errors.fatheroccupation)}
            helperText={touched.fatheroccupation && errors.fatheroccupation}
          />
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <TextField
            fullWidth
            name="dateofmarriage"
            id="dateofmarriage"
            label="Date of Marriage"
            type="date"
            {...getFieldProps('dateofmarriage')}
            error={Boolean(touched.dateofmarriage && errors.dateofmarriage)}
            helperText={touched.dateofmarriage && errors.dateofmarriage}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            fullWidth
            name="placeofmarriage"
            label="Place of Marriage"
            placeholder="Barangay/Municipality/Province"
            {...getFieldProps('placeofmarriage')}
            error={Boolean(touched.placeofmarriage && errors.placeofmarriage)}
            helperText={touched.placeofmarriage && errors.placeofmarriage}
          />
          <TextField
            fullWidth
            name="yearofresidency"
            label="Year of Residency*"
            placeholder="Parents became active resident of the barangay"
            {...getFieldProps('yearofresidency')}
            error={Boolean(touched.yearofresidency && errors.yearofresidency)}
            helperText={touched.yearofresidency && errors.yearofresidency}
          />
        </Stack>

        <Box sx={{ color: 'gray', my: 2 }}>
          <Typography variant="subtitle4">Barangay Birth Certificate Requirement</Typography>
          <Typography>1. Purok Cerification</Typography>
        </Box>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button sx={{ minWidth: 275 }} variant="outlined" component="label">
            Upload Requirements
            <input
              type="file"
              hidden
              multiple
              // TODO duplicate on other document forms
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
              // end duplicate
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

        {/* TODO duplicate on other document forms */}
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
        {/* end duplicate on other document forms */}
      </Form>
    </FormikProvider>
  );
}

BarangayBirthCertificateForm.propTypes = {
  // Function to call on submit
  onSubmitForm: PropTypes.func.isRequired,
};
