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
import {
  BARANGAY_BIRTH_CERTIFICATE_PRICE,
  BARANGAY_CLEARANCE_PRICE,
  BARANGAY_DEATH_CERTIFICATE_PRICE,
} from '../../../prices';
import { createRequest } from '../../../service/documentRequest';
import { createOfficial } from '../../../service/official';
import BarangayCertificateForm from './BarangayCertificateForm';
import BarangayBirthCertificateForm from './BarangayBirthCertificateForm';
import BarangayDeathCertificateForm from './BarangayDeathCertificateForm';
import CertificateOfIndigencyForm from './CertificateOfIndigencyForm';
import CertificateOfResidencyForm from './CertificateOfResidencyForm';
import CertificateOfTreePlantingForm from './CertificateOfTreePlantingForm';
import BarangayClearanceForm from './BarangayClearanceForm';
// ----------------------------------------------------------------------

export default function RequestDocumentFormCard() {
  const navigate = useNavigate();

  const RequestDocumentFormSchema = Yup.object().shape({
    typeOfDocument: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required(),
    requestorname: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Requestor name is required.'),
  });

  const formik = useFormik({
    initialValues: {
      typeOfDocument: null,
      requestorname: '',
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
      <CardHeader title="Request Document Form" subheader="Please provide all the information required below" />
      <CardContent>
        <Stack spacing={1}>
          <TextField
            label="Requestor Name"
            name="requestorname"
            fullWidth
            {...getFieldProps('requestorname')}
            error={Boolean(touched.requestorname && errors.requestorname)}
            helperText={touched.requestorname && errors.requestorname}
          />
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
            <BarangayDeathCertificateForm
              onSubmitForm={async (data) => {
                return createRequest(
                  'Death Certificate',
                  data,
                  formik.values.requestorname,
                  BARANGAY_DEATH_CERTIFICATE_PRICE
                )
                  .then((res) => {
                    console.log({ res });
                  })
                  .catch((err) => {
                    console.log({ err });
                  });
              }}
            />
          )}
          {formik.values.typeOfDocument === 'barangay-clearance' && (
            <BarangayClearanceForm
              onSubmitForm={async (data) => {
                return createRequest('Barangay Clearance', data, formik.values.requestorname, BARANGAY_CLEARANCE_PRICE)
                  .then((res) => {
                    console.log({ res });
                  })
                  .catch((err) => {
                    console.log({ err });
                  });
              }}
            />
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
            <BarangayBirthCertificateForm
              onSubmitForm={async (data) => {
                return createRequest(
                  'Barangay Birth Certificate',
                  data,
                  formik.values.requestorname,
                  BARANGAY_BIRTH_CERTIFICATE_PRICE
                )
                  .then((res) => {
                    console.log({ res });
                  })
                  .catch((err) => {
                    console.log({ err });
                  });
              }}
            />
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
