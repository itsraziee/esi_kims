import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Button, Stack, TextField, Typography, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { PropTypes } from 'prop-types';

// TODO: Date of Birth error message is not working!
// TODO: Time of Birth error message is not working!
// TODO: Death error message is not working (mag red ra sya peru dili ga show ang error message)!
// TODO: Fathers Occupation error message is not working (mag red ra sya peru dili ga show ang error message)!

export default function BarangayBirthCertificateForm(onSubmitForm) {
  const RequestDocumentFormSchema = Yup.object().shape({
    nameofChild: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name of Child is required'),
    purok: Yup.number().min(0).max(13).required(),
    sex: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Sex is required'),
    dateofbirth: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Date of Birth is required'),
    timeofbirth: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Time of Birth is required'),
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
    yearofResidency: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Year of Residency is required'),
    dateofBirth: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Date of birth is required'), // TODO to replace when inour field is replaced
    timeofBirth: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Time of birth is required'),
  });

  const formik = useFormik({
    initialValues: {
      nameofChild: '',
      purok: '',
      sex: '',
      dateofbirth: '',
      timeofbirth: '',
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
      yearofResidency: '',
      dateofBirth: '',
      timeofBirth: '',
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
        <Stack direction={{ xs: 'row', sm: 'column' }} spacing={2}>
          <Stack direction={{ xs: 'row' }} spacing={2}>
            <TextField
              fullWidth
              name="nameofChild"
              label="Name of Child"
              {...getFieldProps('nameofChild')}
              error={Boolean(touched.nameofChild && errors.nameofChild)}
              helperText={touched.nameofChild && errors.nameofChild}
            />
            <TextField
              // sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="sex"
              label="Sex"
              {...getFieldProps('sex')}
              error={Boolean(touched.sex && errors.sex)}
              helperText={touched.sex && errors.sex}
            />
            <TextField
              // sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="dateofBirth"
              label="Date of Birth"
              {...getFieldProps('dateofBirth')}
              error={Boolean(touched.dateofBirth && errors.dateofBirth)}
              helperText={touched.dateofBirth && errors.dateofBirth}
            />

            <TextField
              // sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="timeofBirth"
              label="Time of Birth"
              {...getFieldProps('timeofBirth')}
              error={Boolean(touched.timeofBirth && errors.timeofBirth)}
              helperText={touched.timeofBirth && errors.timeofBirth}
            />
          </Stack>

          <Stack direction={{ xs: 'row' }} spacing={2}>
            <TextField
              fullWidth
              name="weight"
              label="Weight"
              {...getFieldProps('weight')}
              error={Boolean(touched.weight && errors.weight)}
              helperText={touched.weight && errors.weight}
            />
            <TextField
              // sx={{ minWidth: 91, mt: 2 }}
              fullWidth
              name="birthorder"
              label="Birth Order"
              {...getFieldProps('birthorder')}
              error={Boolean(touched.birthorder && errors.birthorder)}
              helperText={touched.birthorder && errors.birthorder}
            />
            <TextField
              // sx={{ minWidth: 91, mt: 2 }}
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

          <Stack direction={{ xs: 'row' }} spacing={2}>
            <TextField
              fullWidth
              name="nameofmother"
              label="Name of Mother"
              {...getFieldProps('nameofmother')}
              error={Boolean(touched.nameofmother && errors.nameofmother)}
              helperText={touched.nameofmother && errors.nameofmother}
            />
            <TextField
              fullWidth
              name="mothercitizenship"
              label="Mothers Citizenship"
              {...getFieldProps('mothercitizenship')}
              error={Boolean(touched.mothercitizenship && errors.mothercitizenship)}
              helperText={touched.mothercitizenship && errors.mothercitizenship}
            />
            <TextField
              fullWidth
              name="motheroccupation"
              label="Mothers Occupation"
              {...getFieldProps('motheroccupation')}
              error={Boolean(touched.motheroccupation && errors.motheroccupation)}
              helperText={touched.motheroccupation && errors.motheroccupation}
            />
          </Stack>

          <Stack direction={{ xs: 'row' }} spacing={2}>
            <TextField
              fullWidth
              name="nameoffather"
              label="Name of Father"
              {...getFieldProps('nameoffather')}
              error={Boolean(touched.nameoffather && errors.nameoffather)}
              helperText={touched.nameoffather && errors.nameoffather}
            />
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
          </Stack>

          <Stack direction={{ xs: 'row' }} spacing={2}>
            <TextField
              fullWidth
              name="dateofmarriage"
              label="Date of Marriage"
              {...getFieldProps('dateofmarriage')}
              error={Boolean(touched.dateofmarriage && errors.dateofmarriage)}
              helperText={touched.dateofmarriage && errors.dateofmarriage}
            />
            <TextField
              fullWidth
              name="placeofmarriage"
              label="Place of Marriage"
              {...getFieldProps('placeofmarriage')}
              error={Boolean(touched.placeofmarriage && errors.placeofmarriage)}
              helperText={touched.placeofmarriage && errors.placeofmarriage}
            />
            <TextField
              fullWidth
              name="nameofattendant"
              label="Name of Attendant"
              {...getFieldProps('nameofattendant')}
              error={Boolean(touched.nameofattendant && errors.nameofattendant)}
              helperText={touched.nameofattendant && errors.nameofattendant}
            />
            <TextField
              fullWidth
              name="addressofattendant"
              label="Address Of Attendant"
              {...getFieldProps('addressofattendant')}
              error={Boolean(touched.addressofattendant && errors.addressofattendant)}
              helperText={touched.addressofattendant && errors.addressofattendant}
            />
          </Stack>

          <Stack direction={{ xs: 'row' }} spacing={2}>
            <TextField
              fullWidth
              name="yearofResidency"
              label="Since when have you resided in this barangay?"
              {...getFieldProps('yearofResidency')}
              error={Boolean(touched.yearofResidency && errors.yearofResidency)}
              helperText={touched.yearofResidency && errors.yearofResidency}
            />
          </Stack>
        </Stack>

        <Box sx={{ color: 'gray', my: 2 }}>
          <Typography variant="subtitle4">Barangay Birth Certificate Requirement</Typography>
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

BarangayBirthCertificateForm.propTypes = {
  // Function to call on submit
  onSubmitForm: PropTypes.func.isRequired,
};
