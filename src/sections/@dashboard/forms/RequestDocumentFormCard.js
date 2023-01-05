import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// material
import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import {
  BARANGAY_BIRTH_CERTIFICATE_PRICE,
  BARANGAY_CERTIFICATION_PRICE,
  BARANGAY_CLEARANCE_PRICE,
  BARANGAY_DEATH_CERTIFICATE_PRICE,
  CEDULA_PRICE,
  CERTIFICATE_OF_INDIGENCY_PRICE,
  CERTIFICATE_OF_RESIDENCY_PRICE,
  TREE_PLANTING_CERTIFICATE_PRICE,
} from '../../../prices';
import { createRequest } from '../../../service/documentRequest';
import BarangayBirthCertificateForm from './BarangayBirthCertificateForm';
import BarangayCertificateOfIndigencyForm from './BarangayCertificateOfIndigencyForm';
import BarangayCertificateForm from './BarangayCertificationForm';
import BarangayClearanceForm from './BarangayClearanceForm';
import BarangayDeathCertificateForm from './BarangayDeathCertificateForm';
import BarangayTreePlantingCertificateForm from './BarangayTreePlantingCertificateForm';
import CedulaFormCard from './CedulaFormCard';
import CertificateOfResidencyForm from './CertificateOfResidencyForm';
// ----------------------------------------------------------------------

export default function RequestDocumentFormCard() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const RequestDocumentFormSchema = Yup.object().shape({
    typeOfDocument: Yup.string().required('Type of Document is required.'),
    requestorname: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Requestor name is required.'),
    number: Yup.string()
      .matches(/\d{9}/, 'Must match the format +639*********')
      .typeError('Phone number must be a number')
      .required('Phone number is required'),
  });

  const formik = useFormik({
    initialValues: {
      typeOfDocument: '',
      requestorname: '',
      number: '',
    },
    validationSchema: RequestDocumentFormSchema,
    onSubmit: (data) => {
      console.log({ data });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader title="Document Request Form" subheader="Fields marked with an asterisk (*) are required. " />
      <CardContent>
        <Stack spacing={1}>
          <TextField
            label="Requestor Name*"
            name="requestorname"
            fullWidth
            placeholder="e.g. Juan Dela Cruz"
            {...getFieldProps('requestorname')}
            error={Boolean(touched.requestorname && errors.requestorname)}
            helperText={touched.requestorname && errors.requestorname}
          />
          <TextField
            fullWidth
            name="number"
            label="Phone Number*"
            id="outlined-start-adornment"
            {...getFieldProps('number')}
            error={Boolean(touched.number && errors.number)}
            helperText={touched.number && errors.number}
            InputProps={{
              startAdornment: <InputAdornment position="start">+63</InputAdornment>,
            }}
          />
          <FormControl
            helperText={touched.typeOfDocument && errors.typeOfDocument}
            fullWidth
            error={Boolean(touched.requestorname && errors.typeOfDocument)}
          >
            <InputLabel id="status-select-label">Select Type of Document*</InputLabel>
            <Tooltip title={!formik.values.requestorname ? 'Requestor Name is required' : ''}>
              <Select
                name="typeOfDocument"
                labelId="typeOfDocument"
                id="typeOfDocument"
                value={formik.values.typeOfDocument}
                label="Select Type of Documents"
                onChange={handleChange}
                {...getFieldProps('typeOfDocument')}
                error={Boolean(touched.typeOfDocument && errors.typeOfDocument)}
                helperText={touched.typeOfDocument && errors.typeOfDocument}
                disabled={!formik.values.requestorname}
              >
                <MenuItem value="barangay-clearance">Barangay Clearance</MenuItem>
                <MenuItem value="birth-certificate">Barangay Birth Certificate</MenuItem>
                <MenuItem value="death-certificate">Barangay Death Certificate</MenuItem>
                <MenuItem value="certification">Barangay Certification</MenuItem>
                <MenuItem value="certificate-of-indigency">Certificate Of Indigency</MenuItem>
                <MenuItem value="certificate-of-residency">Certificate of Residency</MenuItem>
                <MenuItem value="tree-planting-certificate">Tree Planting Certificate</MenuItem>
                <MenuItem value="cedula">Cedula</MenuItem>
              </Select>
            </Tooltip>
            {Boolean(touched.typeOfDocument && errors.typeOfDocument) && (
              <FormHelperText>Please select a type of document.</FormHelperText>
            )}
          </FormControl>
          {formik.values.typeOfDocument === 'certification' && (
            <BarangayCertificateForm
              onSubmitForm={async (data) => {
                return createRequest(
                  'Barangay Certificate',
                  data,
                  formik.values.requestorname,
                  formik.values.number,
                  BARANGAY_CERTIFICATION_PRICE
                );
              }}
            />
          )}
          {formik.values.typeOfDocument === 'death-certificate' && (
            <BarangayDeathCertificateForm
              onSubmitForm={async (data) => {
                return createRequest(
                  'Barangay Death Certificate',
                  data,
                  formik.values.requestorname,
                  formik.values.number,
                  BARANGAY_DEATH_CERTIFICATE_PRICE
                );
              }}
            />
          )}
          {formik.values.typeOfDocument === 'barangay-clearance' && (
            <BarangayClearanceForm
              // TODO duplicate on other document forms, remove then and catch
              onSubmitForm={async (data) => {
                return createRequest(
                  'Barangay Clearance',
                  data,
                  formik.values.requestorname,
                  formik.values.number,
                  BARANGAY_CLEARANCE_PRICE
                );
              }}
            />
          )}
          {formik.values.typeOfDocument === 'certificate-of-residency' && (
            <CertificateOfResidencyForm
              onSubmitForm={async (data) => {
                return createRequest(
                  'Certificate of Residency',
                  data,
                  formik.values.requestorname,
                  formik.values.number,
                  CERTIFICATE_OF_RESIDENCY_PRICE
                );
              }}
            />
          )}
          {formik.values.typeOfDocument === 'tree-planting-certificate' && (
            <BarangayTreePlantingCertificateForm
              onSubmitForm={async (data) => {
                return createRequest(
                  'Tree Planting Certificate',
                  data,
                  formik.values.requestorname,
                  formik.values.number,
                  TREE_PLANTING_CERTIFICATE_PRICE
                );
              }}
            />
          )}
          {formik.values.typeOfDocument === 'certificate-of-indigency' && (
            <BarangayCertificateOfIndigencyForm
              onSubmitForm={async (data) => {
                return createRequest(
                  'Certificate of Indigency',
                  data,
                  formik.values.requestorname,
                  formik.values.number,
                  CERTIFICATE_OF_INDIGENCY_PRICE
                );
              }}
            />
          )}
          {formik.values.typeOfDocument === 'birth-certificate' && (
            <BarangayBirthCertificateForm
              onSubmitForm={async (data) => {
                return createRequest(
                  'Barangay Birth Certificate',
                  data,
                  formik.values.requestorname,
                  formik.values.number,
                  BARANGAY_BIRTH_CERTIFICATE_PRICE
                );
              }}
            />
          )}
          {formik.values.typeOfDocument === 'cedula' && (
            <CedulaFormCard
              onSubmitForm={async (data) => {
                return createRequest('Cedula', data, formik.values.requestorname, formik.values.number, CEDULA_PRICE);
              }}
            />
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
