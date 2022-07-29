import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stack,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { createOfficial } from '../../../service/official';
// ----------------------------------------------------------------------

export default function RequestDocumentFormCard() {
  const navigate = useNavigate();

  const RequestDocumentFormSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('First name is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      typeOfDocument: undefined,
    },
    validationSchema: RequestDocumentFormSchema,
    onSubmit: (data) => {
      console.log({ data });
      createOfficial(data)
        .then((res) => console.log({ res }))
        .catch((err) => console.log({ err }));
      navigate('/dashboard/app', { replace: true });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  return (
    <Card fullwidth>
      <CardContent>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Typography variant="subtitle3" sx={{ mb: -4 }}>
                Personal Information
              </Typography>

              <Typography variant="subtitle7" sx={{ color: 'gray' }}>
                Please provide your personal information
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  name="fullName"
                  label="Full name"
                  {...getFieldProps('fullName')}
                  error={Boolean(touched.fullName && errors.fullName)}
                  helperText={touched.fullName && errors.fullName}
                />

                <TextField
                  fullWidth
                  name="address"
                  label="Address"
                  {...getFieldProps('address')}
                  error={Boolean(touched.address && errors.address)}
                  helperText={touched.address && errors.address}
                />

                <TextField
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  {...getFieldProps('phoneNumber')}
                  error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                />
              </Stack>

              <FormControl helperText={touched.civilStatus && errors.civilStatus} fullWidth>
                <InputLabel id="status-select-label">Select Type of Document</InputLabel>
                <Select
                  name="typeOfDocument"
                  labelId="typeOfDocument"
                  id="typeOfDocument"
                  value={formik.values.typeOfDocument}
                  label="Select Type of Documents"
                  onChange={handleChange}
                  {...getFieldProps('typeOfDocument')}
                  error={Boolean(touched.typeOfDocument && errors.typeOfDocument)}
                >
                  <MenuItem value="barangay-certificate">Barangay Certificate</MenuItem>
                  <MenuItem value="birth-certificate">Barangay Birth Certificate</MenuItem>
                  <MenuItem value="death-certificate">Barangay Death Certificate</MenuItem>
                  <MenuItem value="certification">Barangay Certification</MenuItem>
                  <MenuItem value="certificate-of-indigency">Certificate of Indigency</MenuItem>
                  <MenuItem value="certificate-of-residency">Certificate of Residency</MenuItem>
                  <MenuItem value="tree-planting-certificate">Tree Planting Certificate</MenuItem>
                </Select>
              </FormControl>

              {formik.values.typeOfDocument === 'barangay-certificate' && (
                <Box>
                  <Typography sx={{ color: 'gray', mt: -2 }} variant="subtitle4">
                    Barangay Certificate Requirements
                  </Typography>
                  <Typography>1. Purok Cerification</Typography>
                  <Typography>2. Valid ID</Typography>
                  <Typography>3. Valid ID</Typography>
                  <Typography>4. Purok Certification</Typography>
                </Box>
              )}
              {formik.values.typeOfDocument === 'birth-certificate' && (
                <Box>
                  <Typography sx={{ color: 'gray', mt: -2 }} variant="subtitle4">
                    Barangay Birth Certificate Requirements
                  </Typography>
                  <Typography>1. Purok Cerification</Typography>
                  <Typography>2. Valid ID</Typography>
                  <Typography>3. Valid ID</Typography>
                  <Typography>4. Purok Certification</Typography>
                </Box>
              )}
              {formik.values.typeOfDocument === 'death-certificate' && (
                <Box>
                  <Typography sx={{ color: 'gray', mt: -2 }} variant="subtitle4">
                    Barangay Death Certificate Requirements
                  </Typography>
                  <Typography>1. Purok Cerification</Typography>
                  <Typography>2. Valid ID</Typography>
                  <Typography>3. Valid ID</Typography>
                  <Typography>4. Purok Certification</Typography>
                </Box>
              )}
              {formik.values.typeOfDocument === 'certification' && (
                <Box>
                  <Typography sx={{ color: 'gray', mt: -2 }} variant="subtitle4">
                    Barangay Certification Requirements
                  </Typography>
                  <Typography>1. Purok Cerification</Typography>
                  <Typography>2. Valid ID</Typography>
                  <Typography>3. Valid ID</Typography>
                  <Typography>4. Purok Certification</Typography>
                </Box>
              )}
              {formik.values.typeOfDocument === 'certificate-of-indigency' && (
                <Box>
                  <Typography sx={{ color: 'gray', mt: -2 }} variant="subtitle4">
                    Certificate of Indigency Requirements
                  </Typography>
                  <Typography>1. Purok Cerification</Typography>
                  <Typography>2. Valid ID</Typography>
                  <Typography>3. Valid ID</Typography>
                  <Typography>4. Purok Certification</Typography>
                </Box>
              )}
              {formik.values.typeOfDocument === 'certificate-of-residency' && (
                <Box>
                  <Typography sx={{ color: 'gray', mt: -2 }} variant="subtitle4">
                    Certificate of Residency Requirements
                  </Typography>
                  <Typography>1. Purok Cerification</Typography>
                  <Typography>2. Valid ID</Typography>
                  <Typography>3. Valid ID</Typography>
                  <Typography>4. Purok Certification</Typography>
                </Box>
              )}
              {formik.values.typeOfDocument === 'tree-planting-certificate' && (
                <Box>
                  <Typography sx={{ color: 'gray', mt: -2 }} variant="subtitle4">
                    Tree Planting Certificate Requirements
                  </Typography>
                  <Typography>1. Purok Certification</Typography>
                  <Typography>2. Valid ID</Typography>
                  <Typography>3. Valid ID</Typography>
                  <Typography>4. Purok Certification</Typography>
                </Box>
              )}

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button sx={{ minWidth: 275 }} variant="outlined" component="label">
                  Upload Requirements
                  <input type="file" hidden />
                </Button>

                <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                  Submit
                </LoadingButton>
              </Stack>
            </Stack>
          </Form>
        </FormikProvider>
      </CardContent>
    </Card>
  );
}
