import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
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
  CERTIFICATE_OF_INDIGENCY_PRICE,
  CERTIFICATE_OF_RESIDENCY_PRICE,
  TREE_PLANTING_CERTIFICATE_PRICE,
  BARANGAY_CERTIFICATION_PRICE,
} from '../../../prices';
import { createRequest } from '../../../service/documentRequest';
import { createOfficial } from '../../../service/official';
import BarangayCertificateForm from './BarangayCertificateForm';
import BarangayBirthCertificateForm from './BarangayBirthCertificateForm';
import BarangayDeathCertificateForm from './BarangayDeathCertificateForm';
import CertificateOfIndigencyForm from './CertificateOfIndigencyForm';
import CertificateOfResidencyForm from './CertificateOfResidencyForm';
import BarangayTreePlantingCertificateForm from './BarangayTreePlantingCertificateForm';
import BarangayClearanceForm from './BarangayClearanceForm';
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
      createOfficial(data)
        .then((res) => console.log({ res }))
        .catch((err) => console.log({ err }));
      navigate('/dashboard/app', { replace: true });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  return (
    <Card fullwidth>
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
                )
                  .then((res) => {
                    console.log({ res });
                    if (res) {
                      enqueueSnackbar('Barangay Death Certificate Request Submitted Successfully.', {
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
            <CertificateOfTreePlantingForm
              onSubmitForm={async (data) => {
                return createRequest(
                  'Certificate of Tree Planting',
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
            <CertificateOfIndigencyForm
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
                )
                  .then((res) => {
                    console.log({ res });
                    if (res) {
                      enqueueSnackbar('Barangay Birth Certificate Request Submitted Successfully.', {
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
        </Stack>
      </CardContent>
    </Card>
  );
}
