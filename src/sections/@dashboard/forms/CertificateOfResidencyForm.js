import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Button, Stack, TextField, Typography, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { PropTypes } from 'prop-types';

export default function CertificateOfResidencyForm({onSubmitForm}) {
  const RequestDocumentFormSchema = Yup.object().shape({
    fullname: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Full Name is required'),
    phoneNumber: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Phone Number is required'),
    purok: Yup.number().min(0).max(13).required(),
  });

  const formik = useFormik({
    initialValues: {
      fullname: '',
      phoneNumber: '',
      purok: '',
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
              name="fullname"
              label="Full Name"
              {...getFieldProps('name')}
              error={Boolean(touched.fullname && errors.fullname)}
              helperText={touched.fullname && errors.fullname}
            />
            <TextField
              fullWidth
              name="purok"
              label="Purok"
              {...getFieldProps('purok')}
              error={Boolean(touched.purok && errors.purok)}
              helperText={touched.purok && errors.purok}
            />
            <TextField
              fullWidth
              name="phoneNumber"
              label="Phone Number"
              {...getFieldProps('phoneNumber')}
              error={Boolean(touched.phoneNumber && errors.phoneNumber)}
              helperText={touched.phoneNumber && errors.phoneNumber}
            />
          </>
        </Stack>
        <Box sx={{ color: 'gray', mb: 1 }}>
          <Typography variant="subtitle4">Certificate Of Residency Requirement</Typography>
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

CertificateOfResidencyForm.propTypes = {
  // Function to call on submit
  onSubmitForm: PropTypes.func.isRequired,
};
