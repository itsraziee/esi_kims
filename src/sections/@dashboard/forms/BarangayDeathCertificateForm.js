import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Button, Stack, TextField, Typography, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export default function BarangayDeathCertificateForm({ onSubmitForm }) {
  const RequestDocumentFormSchema = Yup.object().shape({
    fullName: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('First name is required'),
    purok: Yup.number().min(0).max(13).required(),
    relationship: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Relationship is required'),
    deceasedname: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Deceased Name is required'),
    placeofbirth: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Place of Birth is required'),
    dateofbirth: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Date of Birth is required'),
    age: Yup.number().min(0, 'Must be positive!').required('Age is required'),
    causeofdeath: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Cause of Death is required'),
    address: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Address is required'),
    civilStatus: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Civil Status is required'),
    placeburried: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Place Burried is required'),
    religion: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Religion is required'),
    occupation: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Occupation is required'),
    nameoffather: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Name of Father is required'),
    maiden: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Maiden is required'),
    placeofdeath: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Place of Death is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      purok: '',
      relationship: '',
      deceasedname: '',
      placeofbirth: '',
      dateofbirth: '',
      age: '',
      causeofdeath: '',
      address: '',
      civilStatus: '',
      placeburried: '',
      religion: '',
      occupation: '',
      nameoffather: '',
      maiden: '',
      placeofdeath: '',
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
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <>
            <Stack direction={{ xs: 'column' }}>
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
                name="relationship"
                label="Relationship"
                {...getFieldProps('relationship')}
                error={Boolean(touched.relationship && errors.relationship)}
                helperText={touched.relationship && errors.relationship}
              />

              <TextField
                sx={{ minWidth: 91, mt: 2 }}
                fullWidth
                name="deceasedname"
                label="Deceased Name"
                {...getFieldProps('deceasedname')}
                error={Boolean(touched.deceasedname && errors.deceasedname)}
                helperText={touched.deceasedname && errors.deceasedname}
              />
            </Stack>
            <Stack direction={{ xs: 'row', sm: 'column' }} spacing={2}>
              <TextField
                fullWidth
                name="placeofbirth"
                label="Place of Birth"
                {...getFieldProps('placeofbirth')}
                error={Boolean(touched.placeofbirth && errors.placeofbirth)}
                helperText={touched.placeofbirth && errors.placeofbirth}
              />
              <TextField
                sx={{ minWidth: 91, mt: 2 }}
                fullWidth
                name="dateofbirth"
                label="Date of Birth"
                {...getFieldProps('dateofbirth')}
                error={Boolean(touched.dateofbirth && errors.dateofbirth)}
                helperText={touched.dateofbirth && errors.dateofbirth}
              />
              <TextField
                sx={{ minWidth: 91, mt: 2 }}
                fullWidth
                name="age"
                label="Age"
                {...getFieldProps('age')}
                error={Boolean(touched.age && errors.age)}
                helperText={touched.age && errors.age}
              />

              <TextField
                sx={{ minWidth: 91, mt: 2 }}
                fullWidth
                name="causeofdeath"
                label="Cause of Death"
                {...getFieldProps('causeofdeath')}
                error={Boolean(touched.causeofdeath && errors.causeofdeath)}
                helperText={touched.causeofdeath && errors.causeofdeath}
              />
            </Stack>
            <Stack direction={{ xs: 'row', sm: 'column' }}>
              <TextField
                fullWidth
                name="address"
                label="Address"
                {...getFieldProps('address')}
                error={Boolean(touched.address && errors.address)}
                helperText={touched.address && errors.address}
              />
              <TextField
                sx={{ minWidth: 91, mt: 2 }}
                fullWidth
                name="civilstatus"
                label="Civil Status"
                {...getFieldProps('civilstatus')}
                error={Boolean(touched.civilStatus && errors.civilStatus)}
                helperText={touched.civilStatus && errors.civilStatus}
              />
              <TextField
                sx={{ minWidth: 91, mt: 2 }}
                fullWidth
                name="placeburried"
                label="Place Burried"
                {...getFieldProps('placeburried')}
                error={Boolean(touched.placeburried && errors.placeburried)}
                helperText={touched.placeburried && errors.placeburried}
              />

              <TextField
                sx={{ minWidth: 91, mt: 2 }}
                fullWidth
                name="religion"
                label="Religion"
                {...getFieldProps('religion')}
                error={Boolean(touched.religion && errors.religion)}
                helperText={touched.religion && errors.religion}
              />
            </Stack>
            <Stack direction={{ xs: 'row', sm: 'column' }} spacing={2}>
              <TextField
                fullWidth
                name="Occupation"
                label="Occupation"
                {...getFieldProps('occupation')}
                error={Boolean(touched.occupation && errors.occupation)}
                helperText={touched.occupation && errors.occupation}
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
              <TextField
                sx={{ minWidth: 91, mt: 2 }}
                fullWidth
                name="maiden"
                label="Maiden Name of Mother"
                {...getFieldProps('maiden')}
                error={Boolean(touched.maiden && errors.maiden)}
                helperText={touched.maiden && errors.maiden}
              />
              <TextField
                sx={{ minWidth: 91, mt: 2 }}
                fullWidth
                name="placeofdeath"
                label="Place of Death"
                {...getFieldProps('placeofdeath')}
                error={Boolean(touched.placeofdeath && errors.placeofdeath)}
                helperText={touched.placeofdeath && errors.placeofdeath}
              />
            </Stack>
          </>
        </Stack>

        <Box sx={{ color: 'gray', my: 2 }}>
          <Typography sx={{ color: 'gray' }} variant="subtitle4">
            Barangay Death Certificate Requirements
          </Typography>
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
