import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Button, Stack, TextField, Typography, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { PropTypes } from 'prop-types';

export default function CertificateOfIndigencyForm({onSubmitForm}) {
  const RequestDocumentFormSchema = Yup.object().shape({
<<<<<<< HEAD
    fullName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('First name is required'),
    civilstatus: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Civil Status is required'),
    purok: Yup.number().min(0).max(13).required(),
=======
    fullName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Fullname is required'),
    address: Yup.string().required('Address is required'),
    citizenship: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Citizenship is required'),
>>>>>>> eeffc9ac7c074fd605b4f193c190cf664b8ecbde
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
<<<<<<< HEAD
      civilstatus: '',
      purok: '',
=======
      address: '',
      citizenship: '',
>>>>>>> eeffc9ac7c074fd605b4f193c190cf664b8ecbde
    },
    validationSchema: RequestDocumentFormSchema,
    onSubmit: (data) => {
      console.log({ data });
      return onSubmitForm(data);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <>
          <TextField
              fullWidth
              name="fullName"
              label="Full Name"
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
<<<<<<< HEAD
              name="civilstatus"
              label="Civil Status"
              {...getFieldProps('civilstatus')}
              error={Boolean(touched.civilstatus && errors.civilstatus)}
              helperText={touched.civilstatus && errors.civilstatus}
=======
              name="citizenship"
              label="Citizenship"
              {...getFieldProps('citizenship')}
              error={Boolean(touched.citizenship && errors.citizenship)}
              helperText={touched.citizenship && errors.citizenship}
>>>>>>> eeffc9ac7c074fd605b4f193c190cf664b8ecbde
            />
          </>
        </Stack>
        <Box sx={{ color: 'gray', mb: 1 }}>
          <Typography variant="subtitle4">Certificate Of Indigency Requirement</Typography>
          <Typography>1. Purok Cerification</Typography>
        </Box>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button sx={{ minWidth: 275 }} variant="outlined" component="label">
            Upload Requirements
            <input type="file" hidden />
          </Button>
          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Submit
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}

CertificateOfIndigencyForm.propTypes = {
  // Function to call on submit
  onSubmitForm: PropTypes.func.isRequired,
};
