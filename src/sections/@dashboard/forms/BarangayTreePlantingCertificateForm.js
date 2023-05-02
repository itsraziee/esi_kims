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
import IconButton from '../../../theme/overrides/IconButton';

export default function BarangayTreePlantingCertificateForm({ onSubmitForm }) {
  const [requirementObjectURLs, setRequirementObjectURLs] = useState([]);
  const [previewSrc, setPreviewSrc] = useState();
  const [requirementsFile, setRequirementsFile] = useState([]);
  const [openReferenceNumber, setOpenReferenceNumber] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const [referenceNumberCloseLoading, setReferenceNumberCloseLoading] = useState(true);

  const RequestDocumentFormSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Full Name is required'),
    purok: Yup.string().required('Purok is required'),
    citizenship: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Citizenship is required'),
    age: Yup.number().typeError('Age must be a number').integer('Age must be an integer').required('Age is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      purok: '',
      citizenship: '',
      age: '',
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
                enqueueSnackbar('Barangay Tree Planting Certificate Request Submitted Successfully.', {
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
              name="name"
              label="Full name*"
              placeholder='e.g. Juan Dela Cruz'
              {...getFieldProps('name')}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
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
                label="Purok"
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
              <InputLabel id="sex-select-label">Sex*</InputLabel>
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
              {Boolean(touched.sex && errors.sex) && <FormHelperText>Please select a Sex</FormHelperText>}
            </FormControl>
            <TextField
              fullWidth
              name="age"
              label="Age*"
              {...getFieldProps('age')}
              error={Boolean(touched.age && errors.age)}
              helperText={touched.age && errors.age}
            />
          </>
        </Stack>
        <Box sx={{ color: 'gray', mb: 1 }}>
          <Typography variant="subtitle4">Certificate Of Tree Planting Requirements</Typography>
          <Typography>1. Purok Cerification (that certify that he/she has already planted a tree)</Typography>
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

BarangayTreePlantingCertificateForm.propTypes = {
  // Function to call on submit
  onSubmitForm: PropTypes.func.isRequired,
};
