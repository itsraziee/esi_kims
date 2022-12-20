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
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { getRequirementsUrl, updateRequestRequirements, uploadRequirements } from '../../../service/documentRequest';

export default function BarangayDeathCertificateForm({ onSubmitForm }) {
  const [previewSrc, setPreviewSrc] = useState();

  const RequestDocumentFormSchema = Yup.object().shape({
    relationship: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Relationship is required'),
    deceasedname: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Deceased Name is required'),
    placeofdeath: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Place of Birth is required'),
    dateofdeath: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Date of Death is required'),
    age: Yup.number().typeError('Age must be a number').integer('Age must be an integer').required('Age is required'),
    purok: Yup.string().required('Purok is required'),
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
  const [requirementObjectURLs, setRequirementObjectURLs] = useState([]);
  const [requirementsFile, setRequirementsFile] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [openReferenceNumber, setOpenReferenceNumber] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState();
  const [referenceNumberCloseLoading, setReferenceNumberCloseLoading] = useState(true);

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
      return onSubmitForm(data).then((res) => {
        const requestUid = res.id;
        return uploadRequirements(requirementsFile, requestUid)
          .then((res) => {
            console.log({ res });
            const filenames = requirementsFile.map((requirement) => requirement.file.name);
            return getRequirementsUrl(filenames, requestUid).then((res) => {
              const requestUrls = res;
              console.log({ requestUrls });
              return updateRequestRequirements(requestUid, requestUrls).then((res) => {
                enqueueSnackbar('Barangay Death Certificate Request Submitted Successfully.', {
                  variant: 'success',
                });

                setReferenceNumber(requestUid);
                setOpenReferenceNumber(true);
                setTimeout(() => setReferenceNumberCloseLoading(false), 5000);
              });
            });
          })
          .catch((err) => {
            console.log({ err });
            enqueueSnackbar('Request Failed.', { variant: 'error' });
          });
      });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  useEffect(() => {
    console.log({ requirementsFile });
  }, [requirementsFile]);

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
            name="deceasedname"
            label="Deceased Name*"
            placeholder='Juan Dela Cruz'
            {...getFieldProps('deceasedname')}
            error={Boolean(touched.deceasedname && errors.deceasedname)}
            helperText={touched.deceasedname && errors.deceasedname}
          />
          
          <TextField
            fullWidth
            name="placeofdeath"
            label="Place of Death*"
            placeholder='Barangay/Municipality/Province'
            {...getFieldProps('placeofdeath')}
            error={Boolean(touched.placeofdeath && errors.placeofdeath)}
            helperText={touched.placeofdeath && errors.placeofdeath}
          />
          <TextField
            fullWidth
            name="dateofbirth"
            id="dateofbirth"
            label="Date of Birth*"
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
            label="Date of Death*"
            type="date"
            {...getFieldProps('dateofdeath')}
            error={Boolean(touched.dateofdeath && errors.dateofdeath)}
            helperText={touched.dateofdeath && errors.dateofdeath}
            InputLabelProps={{
              shrink: true,
            }}
          />
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
            name="causeofdeath"
            label="Cause of Death*"
            {...getFieldProps('causeofdeath')}
            error={Boolean(touched.causeofdeath && errors.causeofdeath)}
            helperText={touched.causeofdeath && errors.causeofdeath}
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
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <FormControl
            helperText={touched.civilstatus && errors.civilstatus}
            fullWidth
            error={Boolean(touched.civilstatus && errors.civilstatus)}
          >
            <InputLabel id="status-select-label">Civil Status*</InputLabel>
            <Select
              name="civilstatus"
              labelId="civilstatus"
              id="civilstatus"
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
            {Boolean(touched.civilstatus && errors.civilstatus) && (
              <FormHelperText>Please select a Civil Status.</FormHelperText>
            )}
          </FormControl>
          
          <TextField
            fullWidth
            name="placeburried"
            label="Place Burried*"
            placeholder='Barangay/Municipality/Province'
            {...getFieldProps('placeburried')}
            error={Boolean(touched.placeburried && errors.placeburried)}
            helperText={touched.placeburried && errors.placeburried}
          />
          <TextField
            fullWidth
            name="religion"
            label="Religion*"
            {...getFieldProps('religion')}
            error={Boolean(touched.religion && errors.religion)}
            helperText={touched.religion && errors.religion}
          />
          <TextField
            fullWidth
            name="occupation"
            label="Occupation*"
            {...getFieldProps('occupation')}
            error={Boolean(touched.occupation && errors.occupation)}
            helperText={touched.occupation && errors.occupation}
          />
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <TextField
            fullWidth
            name="nameoffather"
            label="Name of Father*"
            placeholder='Juan Dela Cruz'
            {...getFieldProps('nameoffather')}
            error={Boolean(touched.nameoffather && errors.nameoffather)}
            helperText={touched.nameoffather && errors.nameoffather}
          />
          <TextField
            fullWidth
            name="maidennameofmother"
            label="Maiden Name of Mother*"
            placeholder='Juan Tan Dela'
            {...getFieldProps('maidennameofmother')}
            error={Boolean(touched.maidennameofmother && errors.maidennameofmother)}
            helperText={touched.maidennameofmother && errors.maidennameofmother}
          />
          <TextField
            fullWidth
            name="relationship"
            label="Relationship"
            placeholder='Relationship with the deceased person'
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
            <input
              type="file"
              multiple
              hidden
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
                <Grid item>
                  <Chip
                    color="primary"
                    label={reqUrl.fileName}
                    component="a"
                    onClick={() => {
                      setPreviewSrc(reqUrl.link);
                    }}
                    key={reqUrl.id}
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

BarangayDeathCertificateForm.propTypes = {
  // Function to call on submit
  onSubmitForm: PropTypes.func.isRequired,
};
