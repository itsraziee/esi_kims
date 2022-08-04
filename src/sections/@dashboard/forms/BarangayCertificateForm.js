import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Button, Stack, TextField, Typography, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { PropTypes } from 'prop-types';

export default function BarangayCertificateForm(onSubmitForm) {
  const RequestDocumentFormSchema = Yup.object().shape({
    fullName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('First name is required'),
    sex: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Sex is required'),
    purok: Yup.number().min(0).max(13).required(),
    dateofbirth: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Date of Birth is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      sex: '',
      purok: '',
      dateofbirth: '',
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
        <Stack direction={{ xs: 'column' }} spacing={2}>
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
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="purok"
              label="Purok"
              {...getFieldProps('purok')}
              error={Boolean(touched.purok && errors.purok)}
              helperText={touched.purok && errors.purok}
            />

            <TextField
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="sex"
              label="Sex"
              {...getFieldProps('sex')}
              error={Boolean(touched.sex && errors.sex)}
              helperText={touched.sex && errors.sex}
            />

            <TextField
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="dateofbirth"
              label="Date of Birth"
              {...getFieldProps('nameofbirth')}
              error={Boolean(touched.dateofbirth && errors.dateofbirth)}
              helperText={touched.dateofbirth && errors.dateofbirth}
            />
          </>
        </Stack>

        <Box sx={{ color: 'gray', mt: -2 }}>
          <Typography variant="subtitle4">Barangay Certification Requirements</Typography>
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

BarangayCertificateForm.propTypes = {
  // Function to call on submit
  onSubmitForm: PropTypes.func.isRequired,
};
