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
import { Form, FormikProvider, useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import * as Yup from 'yup';
import { getRequirementsUrl, updateRequestRequirements, uploadRequirements } from '../../../service/documentRequest';

export default function BarangayCertificateForm({ onSubmitForm }) {
  const [requirementObjectURLs, setRequirementObjectURLs] = useState([]);
  const [previewSrc, setPreviewSrc] = useState();
  const [requirementsFile, setRequirementsFile] = useState([]);
  const [openReferenceNumber, setOpenReferenceNumber] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const [referenceNumberCloseLoading, setReferenceNumberCloseLoading] = useState(true);

  const RequestDocumentFormSchema = Yup.object().shape({
    applicant: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Applicant is required'),
    sex: Yup.string().oneOf(['male', 'female']).required('Sex is Required'),
    purok: Yup.string().required('Address is required'),
    purpose: Yup.string().required('Purpose is required'),
    layout: Yup.string().required('Layout is required'),
    beam: Yup.string().required('Beam is required'),
    gi: Yup.string().required('GI is required'),
    wall: Yup.string().required('Wall is required'),
    estimatedcost: Yup.string().required('Estimated Cost is required'),
  });

  const formik = useFormik({
    initialValues: {
      applicant: '',
      sex: '',
      purok: '',
      purpose: '',
      layout: '',
      beam: '',
      gi: '',
      wall: '',
      estimatedcost: '',
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
          <TextField
            fullWidth
            name="applicant"
            label="Applicant"
            {...getFieldProps('applicant')}
            error={Boolean(touched.applicant && errors.applicant)}
            helperText={touched.applicant && errors.applicant}
          />
          <FormControl helperText={touched.sex && errors.sex} fullWidth error={Boolean(errors.sex)}>
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
            {Boolean(errors.sex) && <FormHelperText>Please select a Sex</FormHelperText>}
          </FormControl>
          {/* <TextField
              fullWidth
              name="address"
              label="Address"
              {...getFieldProps('address')}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            /> */}

          <FormControl helperText={touched.purok && errors.purok} fullWidth error={Boolean(errors.purok)}>
            <InputLabel id="status-select-label">Purok</InputLabel>
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
            {Boolean(errors.purok) && <FormHelperText>Please select a Purok</FormHelperText>}
          </FormControl>
          <TextField
            fullWidth
            name="purpose"
            label="Purpose"
            {...getFieldProps('purpose')}
            error={Boolean(touched.purpose && errors.purpose)}
            helperText={touched.purpose && errors.purpose}
          />
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <>
            <TextField
              fullWidth
              name="layout"
              label="Layout"
              {...getFieldProps('layout')}
              error={Boolean(touched.layout && errors.layout)}
              helperText={touched.layout && errors.layout}
            />
            <TextField
              fullWidth
              name="beam"
              label="Beam"
              {...getFieldProps('beam')}
              error={Boolean(touched.beam && errors.beam)}
              helperText={touched.beam && errors.beam}
            />
            <TextField
              fullWidth
              name="gi"
              label="GI"
              {...getFieldProps('gi')}
              error={Boolean(touched.gi && errors.gi)}
              helperText={touched.gi && errors.gi}
            />
            <TextField
              fullWidth
              name="wall"
              label="Wall"
              {...getFieldProps('wall')}
              error={Boolean(touched.wall && errors.wall)}
              helperText={touched.wall && errors.wall}
            />
            <TextField
              fullWidth
              name="estimatedcost"
              label="Estimated Cost"
              {...getFieldProps('estimatedcost')}
              error={Boolean(touched.estimatedcost && errors.estimatedcost)}
              helperText={touched.estimatedcost && errors.estimatedcost}
            />
          </>
        </Stack>
        <Box sx={{ color: 'gray', mb: 1 }}>
          <Typography variant="subtitle4">Barangay Certification Requirements</Typography>
          <Typography>1. Purok Cerification</Typography>
          <Typography>2. Valid ID</Typography>
          <Typography>3. Valid ID</Typography>
          <Typography>4. Purok Certification</Typography>
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
          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
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
      </Form>
    </FormikProvider>
  );
}

BarangayCertificateForm.propTypes = {
  // Function to call on submit
  onSubmitForm: PropTypes.func.isRequired,
};
