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
  Card,
  CardContent,
  Typography,
  Box,
  FormHelperText,
  CardHeader,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { createOfficial } from '../../../service/official';
import BarangayCertificateForm from './BarangayClearanceForm';
import BarangayBirthCertificateForm from './BarangayBirthCertificateForm';
import BarangayDeathCertificateForm from './BarangayDeathCertificateForm';
import CertificateOfIndigencyForm from './CertificateOfIndigencyForm';
import CertificateOfResidencyForm from './CertificateOfResidencyForm';
import CertificateOfTreePlantingForm from './CertificateOfTreePlantingForm';
// ----------------------------------------------------------------------

export default function RequestDocumentFormCard() {
  const navigate = useNavigate();

  const RequestDocumentFormSchema = Yup.object().shape({
    fullName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('First name is required'),
    address: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Address is required'),
    phoneNumber: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Phone Number is required'),
    typeOfDocument: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required(),
    purok: Yup.number().min(0).max(13).required(),
    name: '',
    nameofchild: '',
    sex: '',
    dateofbirth: '',
    weight: '',
    birthorder: '',
    death: '',
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
    since: '',
    relationship: '',
    deceasedname: '',
    placeofdeath: '',
    dateofdeath: '',
    causeofdeath: '',
    placeburried: '',
    religion: '',
    maiden: '',
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      phoneNumber: '',
      typeOfDocument: undefined,
      name: '',
      purok: '',
      nameofchild: '',
      sex: '',
      dateofbirth: '',
      weight: '',
      birthorder: '',
      death: '',
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
      since: '',
      relationship: '',
      deceasedname: '',
      placeofdeath: '',
      dateofdeath: '',
      causeofdeath: '',
      placeburried: '',
      religion: '',
      maiden: '',
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
      <CardHeader title="Personal Information" subheader="Please provide your personal information" />
      <CardContent>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={1}>
              <FormControl
                helperText={touched.civilStatus && errors.civilStatus}
                fullWidth
                error={Boolean(errors.typeOfDocument)}
              >
                <InputLabel id="status-select-label">Select Type of Document</InputLabel>
                <Select
                  name="typeOfDocument"
                  labelId="typeOfDocument"
                  id="typeOfDocument"
                  value={formik.values.typeOfDocument}
                  label="Select Type of Documents"
                  onChange={handleChange}
                  {...getFieldProps('typeOfDocument')}
                >
                  <MenuItem value="barangay-clearance">Barangay Clearance</MenuItem>
                  <MenuItem value="birth-certificate">Barangay Birth Certificate</MenuItem>
                  <MenuItem value="death-certificate">Barangay Death Certificate</MenuItem>
                  <MenuItem value="certification">Barangay Certification</MenuItem>
                  <MenuItem value="certificate-of-indigency">Certificate of Indigency</MenuItem>
                  <MenuItem value="certificate-of-residency">Certificate of Residency</MenuItem>
                  <MenuItem value="tree-planting-certificate">Tree Planting Certificate</MenuItem>
                </Select>
                {Boolean(errors.typeOfDocument) && <FormHelperText>Please select a type of document.</FormHelperText>}
              </FormControl>
              {formik.values.typeOfDocument === 'certification' && <BarangayCertificateForm onSubmitForm={() => {}} />}
              {formik.values.typeOfDocument === 'death-certificate' && (
                <BarangayDeathCertificateForm onSubmitForm={() => {}} />
              )}
              {formik.values.typeOfDocument === 'barangay-clearance' && (
                <BarangayCertificateForm onSubmitForm={() => {}} />
              )}
              {formik.values.typeOfDocument === 'certificate-of-residency' && (
                <CertificateOfResidencyForm onSubmitForm={() => {}} />
              )}
              {formik.values.typeOfDocument === 'tree-planting-certificate' && (
                <CertificateOfTreePlantingForm onSubmitForm={() => {}} />
              )}
              {formik.values.typeOfDocument === 'certificate-of-indigency' && (
                <CertificateOfIndigencyForm onSubmitForm={() => {}} />
              )}
              {formik.values.typeOfDocument === 'birth-certificate' && (
                <BarangayBirthCertificateForm onSubmitForm={() => {}} />
              )}
            </Stack>
          </Form>
        </FormikProvider>
      </CardContent>
    </Card>
  );
}
