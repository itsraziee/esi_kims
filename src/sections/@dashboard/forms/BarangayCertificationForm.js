import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Button, Stack, TextField, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { PropTypes } from 'prop-types';

export default function BarangayCertificateForm({onSubmitForm}) {
  const RequestDocumentFormSchema = Yup.object().shape({
    applicant: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Applicant is required'),
    sex: Yup.string().oneOf(['male', 'female']).required('Sex is Required'),
    address: Yup.string().required('Address is required'),
    purpose: Yup.string().required('Purpose is required'),
    layout: Yup.string().required('Layout is required'),
    beam: Yup.string().required('Beam is required'),
    gi: Yup.string().required('GI is required'),
    wall: Yup.string().required('Wall is required'),
    estimatedcost: Yup.string().required('Estimated Cost is required'),
  });

  const formik = useFormik({
    initialValues: {
      applicant: '',
      sex: '',
      address: '',
      purpose: '',
      layout: '',
      beam: '',
      gi: '',
      wall: '',
      estimatedcost: '',
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
              name="applicant"
              label="Applicant"
              {...getFieldProps('applicant')}
              error={Boolean(touched.applicant && errors.applicant)}
              helperText={touched.applicant && errors.applicant}
            />
            <FormControl helperText={touched.sex && errors.sex} fullWidth>
              <InputLabel id="sex-select-label">Sex</InputLabel>
              <Select
                name="sex"
                labelId="sex-select-label"
                id="sex-select"
                value={formik.values.sex}
                label="Sex"
                onChange={handleChange}
                {...getFieldProps('sex')}
                error={Boolean(touched.sex && errors.sex)}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
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
              name="purpose"
              label="Purpose"
              {...getFieldProps('purpose')}
              error={Boolean(touched.purpose && errors.purpose)}
              helperText={touched.purpose && errors.purpose}
            />
          </>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 1 }}>
          <>
            <TextField
              fullWidth
              name="layout"
              label="Layout"
              {...getFieldProps('layout')}
              error={Boolean(touched.layout && errors.layout)}
              helperText={touched.layout && errors.layout}
            />
            <TextField
              fullWidth
              name="beam"
              label="Beam"
              {...getFieldProps('beam')}
              error={Boolean(touched.beam && errors.beam)}
              helperText={touched.beam && errors.beam}
            />
            <TextField
              fullWidth
              name="gi"
              label="GI"
              {...getFieldProps('gi')}
              error={Boolean(touched.gi && errors.gi)}
              helperText={touched.gi && errors.gi}
            />
            <TextField
              fullWidth
              name="wall"
              label="Wall"
              {...getFieldProps('wall')}
              error={Boolean(touched.wall && errors.wall)}
              helperText={touched.wall && errors.wall}
            />
            <TextField
              fullWidth
              name="estimatedcost"
              label="Estimated Cost"
              {...getFieldProps('estimatedcost')}
              error={Boolean(touched.estimatedcost && errors.estimatedcost)}
              helperText={touched.estimatedcost && errors.estimatedcost }
            />
          </>
        </Stack>
        <Box sx={{ color: 'gray', mb: 1 }}>
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
