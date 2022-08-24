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
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import {
  BARANGAY_BIRTH_CERTIFICATE_PRICE,
  BARANGAY_CERTIFICATION_PRICE,
  BARANGAY_CLEARANCE_PRICE,
  BARANGAY_DEATH_CERTIFICATE_PRICE,
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
import CertificateOfResidencyForm from './CertificateOfResidencyForm';
// ----------------------------------------------------------------------

export default function RequestDocumentFormCard() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const RequestDocumentFormSchema = Yup.object().shape({
    typeOfDocument: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Type of Document is required.'),
    requestorname: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Requestor name is required.'),
  });

  const formik = useFormik({
    initialValues: {
      typeOfDocument: '',
      requestorname: '',
    },
    validationSchema: RequestDocumentFormSchema,
    onSubmit: (data) => {
      console.log({ data });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  return (
    <Card>
      <CardHeader title="Document Request Form" subheader="Please provide all the information required below" />
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
            helperText={touched.typeOfDocument && errors.typeOfDocument}
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
              error={Boolean(touched.typeOfDocument && errors.typeOfDocument)}
              helperText={touched.typeOfDocument && errors.typeOfDocument}
            >
              <MenuItem value="barangay-clearance">Barangay Clearance</MenuItem>
              <MenuItem value="birth-certificate">Barangay Birth Certificate</MenuItem>
              <MenuItem value="death-certificate">Barangay Death Certificate</MenuItem>
              <MenuItem value="certification">Barangay Certification</MenuItem>
              <MenuItem value="certificate-of-indigency">Certificate Of Indigency</MenuItem>
              <MenuItem value="certificate-of-residency">Certificate of Residency</MenuItem>
              <MenuItem value="tree-planting-certificate">Tree Planting Certificate</MenuItem>
            </Select>
            {Boolean(errors.typeOfDocument) && <FormHelperText>Please select a type of document.</FormHelperText>}
          </FormControl>
          {formik.values.typeOfDocument === 'certification' && (
            <BarangayCertificateForm
              onSubmitForm={async (data) => {
                return createRequest(
                  'Barangay Certificate',
                  data,
                  formik.values.requestorname,
                  BARANGAY_CERTIFICATION_PRICE
                )
                  .then((res) => {
                    console.log({ res });
                    if (res) {
                      enqueueSnackbar('Barangay Certificate Request Submitted Successfully.', {
                        variant: 'success',
                      });
                      navigate('/dashboard/app', { replace: true });
                    }
                  })
                  .catch((err) => {
                    console.log({ err });
                    enqueueSnackbar('Request Failed.', { variant: 'error' });
                  });
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
                  BARANGAY_DEATH_CERTIFICATE_PRICE
                );
              }}
            />
          )}
          {formik.values.typeOfDocument === 'barangay-clearance' && (
            <BarangayClearanceForm
              onSubmitForm={async (data) => {
                return createRequest('Barangay Clearance', data, formik.values.requestorname, BARANGAY_CLEARANCE_PRICE)
                  .then((res) => {
                    console.log({ res });
                    if (res) {
                      enqueueSnackbar('Barangay Clearance Request Submitted Successfully.', {
                        variant: 'success',
                      });
                      navigate('/dashboard/app', { replace: true });
                    }
                  })
                  .catch((err) => {
                    console.log({ err });
                    enqueueSnackbar('Request Failed.', { variant: 'error' });
                  });
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
                  CERTIFICATE_OF_RESIDENCY_PRICE
                )
                  .then((res) => {
                    console.log({ res });
                    if (res) {
                      enqueueSnackbar('Certificate of Residency Request Submitted Successfully.', {
                        variant: 'success',
                      });
                      navigate('/dashboard/app', { replace: true });
                    }
                  })
                  .catch((err) => {
                    console.log({ err });
                    enqueueSnackbar('Request Failed.', { variant: 'error' });
                  });
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
                  TREE_PLANTING_CERTIFICATE_PRICE
                )
                  .then((res) => {
                    console.log({ res });
                    if (res) {
                      enqueueSnackbar('Certificate of Tree Planting Request Submitted Successfully.', {
                        variant: 'success',
                      });
                      navigate('/dashboard/app', { replace: true });
                    }
                  })
                  .catch((err) => {
                    console.log({ err });
                    enqueueSnackbar('Request Failed.', { variant: 'error' });
                  });
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
                  CERTIFICATE_OF_INDIGENCY_PRICE
                )
                  .then((res) => {
                    console.log({ res });
                    if (res) {
                      enqueueSnackbar('Certificate of Indigency Request Submitted Successfully.', {
                        variant: 'success',
                      });
                      navigate('/dashboard/app', { replace: true });
                    }
                  })
                  .catch((err) => {
                    console.log({ err });
                    enqueueSnackbar('Request Failed.', { variant: 'error' });
                  });
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
                  BARANGAY_BIRTH_CERTIFICATE_PRICE
                );
              }}
            />
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
