import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Button, Stack, TextField, Typography, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { PropTypes } from 'prop-types';

export default function BarangayBirthCertificateForm(onSubmitForm) {
  const RequestDocumentFormSchema = Yup.object().shape({
    fullName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('First name is required'),
    purok: Yup.number().min(0).max(13).required(),
    sex: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Sex is required'),
    dateofbirth: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Date of Marriage is required'),
    weight: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Weight is required'),
    birthorder: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Birth Order is required'),
    death: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Death is required'),
    placeofbirth: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Place of Birth is required'),
    nameofmother: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name of mother is required'),
    mothercitizenship: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Mothers Citizenship is required'),
    motheroccupation: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Mothers Occupation is required'),
    nameoffather: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Fathers Name is required'),
    fathercitizenship: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Fathers Citizenship is required'),
    fatheroccupation: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Fathers Occupation is required'),
    dateofmarriage: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Date of marriage is required'),
    placeofmarriage: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Place of Marriage is required'),
    nameofattendant: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name of Attendant is required'),
    addressofattendant: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Address of Attendant is required'),
    since: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Since is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      purok: '',
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
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Stack direction={{ xs: 'column' }} spacing={2}>
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
          </Stack>
          <Stack direction={{ xs: 'row', sm: 'column' }} spacing={2}>
            <TextField
              fullWidth
              name="weight"
              label="Weight"
              {...getFieldProps('weight')}
              error={Boolean(touched.weight && errors.weight)}
              helperText={touched.weight && errors.weight}
            />
            <TextField
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="birthorder"
              label="Birth Order"
              {...getFieldProps('birthorder')}
              error={Boolean(touched.birthorder && errors.birthorder)}
              helperText={touched.birthorder && errors.birthorder}
            />
            <TextField
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="death"
              label="Death"
              {...getFieldProps('death')}
              error={Boolean(touched.death && errors.death)}
              helperText={touched.death && errors.date}
            />

            <TextField
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="placeofbirth"
              label="Place of Birth"
              {...getFieldProps('placeofbirth')}
              error={Boolean(touched.placeofbirth && errors.placeofbirth)}
              helperText={touched.placeofbirth && errors.placeofbirth}
            />
          </Stack>
          <Stack direction={{ xs: 'row', sm: 'column' }}>
            <TextField
              fullWidth
              name="nameofmother"
              label="Name of Mother"
              {...getFieldProps('nameofmother')}
              error={Boolean(touched.nameofmother && errors.nameofmother)}
              helperText={touched.nameofmother && errors.nameofmother}
            />
            <TextField
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="mothercitizenship"
              label="Mothers Citizenship"
              {...getFieldProps('mothercitizenship')}
              error={Boolean(touched.mothercitizenship && errors.mothercitizenship)}
              helperText={touched.mothercitizenship && errors.mothercitizenship}
            />
            <TextField
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="motheroccupation"
              label="Mothers Occupation"
              {...getFieldProps('motheroccupation')}
              error={Boolean(touched.motheroccupation && errors.motheroccupation)}
              helperText={touched.motheroccupation && errors.motheroccupation}
            />

            <TextField
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="nameoffather"
              label="Name of Father"
              {...getFieldProps('nameoffather')}
              error={Boolean(touched.nameoffather && errors.nameoffather)}
              helperText={touched.nameoffather && errors.nameoffather}
            />
          </Stack>
          <Stack direction={{ xs: 'row', sm: 'column' }} spacing={2}>
            <TextField
              fullWidth
              name="fathercitizenship"
              label="Fathers Citizenship"
              {...getFieldProps('fathercitizenship')}
              error={Boolean(touched.fathercitizenship && errors.fathercitizenship)}
              helperText={touched.fathercitizenship && errors.fathercitizenship}
            />
            <TextField
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="fatheroccupation"
              label="Fathers Occupation"
              {...getFieldProps('fatheroccupation')}
              error={Boolean(touched.fatheroccupation && errors.fatheroccupation)}
              helperText={touched.phoneNumber && errors.phoneNumber}
            />
            <TextField
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="dateofmarriage"
              label="Date of Marriage"
              {...getFieldProps('dateofmarriage')}
              error={Boolean(touched.dateofmarriage && errors.dateofmarriage)}
              helperText={touched.dateofmarriage && errors.dateofmarriage}
            />
            <TextField
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="placeofmarriage"
              label="Place of Marriage"
              {...getFieldProps('placeofmarriage')}
              error={Boolean(touched.placeofmarriage && errors.placeofmarriage)}
              helperText={touched.placeofmarriage && errors.placeofmarriage}
            />
          </Stack>
          <Stack direction={{ xs: 'row', sm: 'column' }} spacing={2}>
            <TextField
              fullWidth
              name="nameofattendant"
              label="Name of Attendant"
              {...getFieldProps('nameofattendant')}
              error={Boolean(touched.nameofattendant && errors.nameofattendant)}
              helperText={touched.nameofattendant && errors.nameofattendant}
            />
            <TextField
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="addressofattendant"
              label="Address Of Attendant"
              {...getFieldProps('addressofattendant')}
              error={Boolean(touched.addressofattendant && errors.addressofattendant)}
              helperText={touched.addressofattendant && errors.addressofattendant}
            />
            <TextField
              sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="since"
              label="Since"
              {...getFieldProps('since')}
              error={Boolean(touched.since && errors.since)}
              helperText={touched.since && errors.since}
            />
          </Stack>
        </Stack>

        <Box sx={{ color: 'gray', my: 2 }}>
          <Typography variant="subtitle4">Barangay Birth Certificate Requirements</Typography>
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

BarangayBirthCertificateForm.propTypes = {
  // Function to call on submit
  onSubmitForm: PropTypes.func.isRequired,
};
