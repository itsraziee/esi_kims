import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Button, Stack, TextField, Typography, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { PropTypes } from 'prop-types';

export default function CertificateOfTreePlantingForm(onSubmitForm) {
  const RequestDocumentFormSchema = Yup.object().shape({
    fullName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('First name is required'),
    phoneNumber: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Phone Number is required'),
    purok: Yup.number().min(0).max(13).required(),
    age: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Age is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      purok: '',
      age: '',
    },
    validationSchema: RequestDocumentFormSchema,
    onSubmit: (data) => {
      console.log({ data });
      onSubmitForm(data);
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
              label="Full name"
              {...getFieldProps('fullName')}
              error={Boolean(touched.fullName && errors.fullName)}
              helperText={touched.fullName && errors.fullName}
            />
            <TextField
              fullWidth
              name="age"
              label="Age"
              {...getFieldProps('age')}
              error={Boolean(touched.age && errors.age)}
              helperText={touched.age && errors.age}
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
          <Typography variant="subtitle4">Barangay Certificate Of Tree Planting Requirements</Typography>
          <Typography>1. Purok Cerification</Typography>
          <Typography>2. Valid ID</Typography>
          <Typography>3. Valid ID</Typography>
          <Typography>4. Purok Certification</Typography>
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

CertificateOfTreePlantingForm.propTypes = {
  // Function to call on submit
  onSubmitForm: PropTypes.func.isRequired,
};

