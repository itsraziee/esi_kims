import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Button, Stack, TextField, Typography, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// TODO: Date of Birth error message is not working!

export default function BarangayDeathCertificateForm({ onSubmitForm }) {
  const RequestDocumentFormSchema = Yup.object().shape({
    fullName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('First name is required'),
    purok: Yup.number().min(0).max(13).required(),
    relationship: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Relationship is required'),
    deceasedName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Deceased Name is required'),
    placeofDeath: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Place of Birth is required'),
    dateofDeath: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Date of Death is required'),
    age: Yup.number().min(0, 'Must be positive!').required('Age is required'),
    causeofDeath: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Cause of Death is required'),
    address: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Address is required'),
    civilStatus: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Civil Status is required'),
    placeBurried: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Place Burried is required'),
    religion: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Religion is required'),
    occupation: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Occupation is required'),
    nameoffather: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name of Father is required'),
    maidenNameofMother: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Maiden Name of Mother is required'),
    placeofdeath: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Place of Death is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      purok: '',
      relationship: '',
      deceasedName: '',
      placeofBirth: '',
      dateofDeath: '',
      age: '',
      causeofDeath: '',
      address: '',
      civilStatus: '',
      placeBurried: '',
      religion: '',
      occupation: '',
      nameoffather: '',
      maidenNameofMother: '',
      placeofDeath: '',
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
              name="deceasedName"
              label="Deceased Name"
              {...getFieldProps('deceasedName')}
              error={Boolean(touched.deceasedName && errors.deceasedName)}
              helperText={touched.deceasedName && errors.deceasedName}
            />
            <TextField
              fullWidth
              name="placeofDeath"
              label="Place of Death"
              {...getFieldProps('placeofDeath')}
              error={Boolean(touched.placeofDeath && errors.placeofDeath)}
              helperText={touched.placeofDeath && errors.placeofDeath}
            />
            <TextField
              fullWidth
              name="dateofBirth"
              label="Date of Birth"
              {...getFieldProps('dateofBirth')}
              error={Boolean(touched.dateofBirth && errors.dateofBirth)}
              helperText={touched.dateofBirth && errors.dateofBirth}
            />
            <TextField
              fullWidth
              name="dateofDeath"
              label="Date of Death"
              {...getFieldProps('dateofDeath')}
              error={Boolean(touched.dateofDeath && errors.dateofDeath)}
              helperText={touched.dateofDeath && errors.dateofDeath}
            />
          </Stack>

          <Stack direction={{ xs: 'row' }} spacing={2}>
            <TextField
              name="age"
              label="Age"
              {...getFieldProps('age')}
              error={Boolean(touched.age && errors.age)}
              helperText={touched.age && errors.age}
            />
            <TextField
              fullWidth
              name="causeofDeath"
              label="Cause of Death"
              {...getFieldProps('causeofDeath')}
              error={Boolean(touched.causeofDeath && errors.causeofDeath)}
              helperText={touched.causeofDeath && errors.causeofDeath}
            />
            <TextField
              fullWidth
              name="address"
              label="Address"
              {...getFieldProps('address')}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />
          </Stack>

          <Stack direction={{ xs: 'row' }} spacing={2}>
            <TextField
              fullWidth
              name="civilStatus"
              label="Civil Status"
              {...getFieldProps('civilStatus')}
              error={Boolean(touched.civilStatus && errors.civilStatus)}
              helperText={touched.civilStatus && errors.civilStatus}
            />
            <TextField
              fullWidth
              name="placeBurried"
              label="Place Burried"
              {...getFieldProps('placeBurried')}
              error={Boolean(touched.placeBurried && errors.placeBurried)}
              helperText={touched.placeBurried && errors.placeBurried}
            />
            <TextField
              fullWidth
              name="religion"
              label="Religion"
              {...getFieldProps('religion')}
              error={Boolean(touched.religion && errors.religion)}
              helperText={touched.religion && errors.religion}
            />
            <TextField
              fullWidth
              name="occupation"
              label="Occupation"
              {...getFieldProps('occupation')}
              error={Boolean(touched.occupation && errors.occupation)}
              helperText={touched.occupation && errors.occupation}
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
              name="maidenNameofMother"
              label="Maiden Name of Mother"
              {...getFieldProps('maidenNameofMother')}
              error={Boolean(touched.maidenNameofMother && errors.maidenNameofMother)}
              helperText={touched.maidenNameofMother && errors.maidenNameofMother}
            />
          </Stack>
        </Stack>

        <Box sx={{ color: 'gray', my: 2 }}>
          <Typography sx={{ color: 'gray' }} variant="subtitle4">
            Barangay Death Certificate Requirement
          </Typography>
          <Typography>1. Purok Cerification</Typography>
          <Typography>
            2. Health Center Certification (Document cannot be process without this certification)
          </Typography>
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
