import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function ResidentsProfileCard() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const ResidentsProfileSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    middleName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Middle name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    address: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Address required'),
    age: Yup.number().typeError("Age must be a number").integer("Age must be an integer").required('Age required'),
    // phone: Yup.string().typeError("Phone must be a number").integer("Age must be an integer").matches ((\+[0-9]{2})|0)[.\- ]?9[0-9]{2}[.\- ]?[0-9]{3}[.\- ]?[0-9]{4}.required('Age required'),
    gender: Yup.number().typeError("Age must be a number").integer("Age must be an integer").required('Age required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      gender: '',
      age: '',
      email: '',
      password: '',
    },
    validationSchema: ResidentsProfileSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Middle name"
              {...getFieldProps('middleName')}
              error={Boolean(touched.middleName && errors.middleName)}
              helperText={touched.middleName && errors.middleName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />

            <TextField
              label="Age"
              {...getFieldProps('age')}
              error={Boolean(touched.age && errors.age)}
              helperText={touched.age && errors.age}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              label="Sex"
              {...getFieldProps('sex')}
              error={Boolean(touched.sex && errors.sex)}
              helperText={touched.sex && errors.sex}
            />

            <TextField
              fullWidth
              label="Date of Birth"
              {...getFieldProps('dateOfBirth')}
              error={Boolean(touched.dateOfBirth && errors.dateOfBirth)}
              helperText={touched.dateOfBirth && errors.dateOfBirth}
            />

            <TextField
              fullWidth
              label="Civil Status"
              {...getFieldProps('civilStatus')}
              error={Boolean(touched.civilStatus && errors.civilStatus)}
              helperText={touched.civilStatus && errors.civilStatus}
            />

            <TextField
              fullWidth
              label="Citizenship"
              {...getFieldProps('citizenship')}
              error={Boolean(touched.citizenship && errors.citizenship)}
              helperText={touched.citizenship && errors.citizenship}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Religion"
              {...getFieldProps('religion')}
              error={Boolean(touched.religion && errors.religion)}
              helperText={touched.religion && errors.religion}
            />

            <TextField
              fullWidth
              label="Height"
              {...getFieldProps('height')}
              error={Boolean(touched.height && errors.height)}
              helperText={touched.height && errors.height}
            />

            <TextField
              fullWidth
              label="Weight"
              {...getFieldProps('weight')}
              error={Boolean(touched.weight && errors.weight)}
              helperText={touched.weight && errors.weight}
            />

            <TextField
              fullWidth
              label="Phone number"
              id="outlined-start-adornment"
              {...getFieldProps('phone')}
              error={Boolean(touched.phone && errors.phone)}
              helperText={touched.phone && errors.phone}
              InputProps={{
                startAdornment: <InputAdornment position="start">+63</InputAdornment>,
              }}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Occupation"
              {...getFieldProps('occupation')}
              error={Boolean(touched.occupation && errors.occupation)}
              helperText={touched.occupation && errors.occupation}
            />

            <TextField
              fullWidth
              label="Address"
              {...getFieldProps('address')}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Spouse"
              {...getFieldProps('spouse')}
              error={Boolean(touched.spouse && errors.spouse)}
              helperText={touched.spouse && errors.spouse}
            />

            <TextField
              fullWidth
              label="Address"
              {...getFieldProps('address')}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />

            <TextField
              fullWidth
              label="Number of Children"
              {...getFieldProps('numberOfChildren')}
              error={Boolean(touched.numberOfChildren && errors.numberOfChildren)}
              helperText={touched.numberOfChildren && errors.numberOfChildren}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Father's Name"
              {...getFieldProps('fathersname')}
              error={Boolean(touched.fathersname && errors.fathersname)}
              helperText={touched.fathersname && errors.fathersname}
            />

            <TextField
              fullWidth
              label="Occupation"
              {...getFieldProps('occupation')}
              error={Boolean(touched.occupation && errors.occupation)}
              helperText={touched.occupation && errors.occupation}
            />

            <TextField
              fullWidth
              label="Address"
              {...getFieldProps('address')}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Mother's Name"
              {...getFieldProps('mothersname')}
              error={Boolean(touched.mothersname && errors.mothersname)}
              helperText={touched.mothersname && errors.mothersname}
            />

            <TextField
              fullWidth
              label="Occupation"
              {...getFieldProps('occupation')}
              error={Boolean(touched.occupation && errors.occupation)}
              helperText={touched.occupation && errors.occupation}
            />

            <TextField
              fullWidth
              label="Address"
              {...getFieldProps('address')}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              disabled
              label="Elementary"
              {...getFieldProps('elementary')}
              error={Boolean(touched.elementary && errors.elementary)}
              helperText={touched.elementary && errors.elementary}
              
            />

            <TextField
              fullWidth
              label="Name of School"
              {...getFieldProps('nameOfSchool')}
              error={Boolean(touched.nameOfSchool && errors.nameOfSchool)}
              helperText={touched.nameOfSchool && errors.nameOfSchool}
            />

            <TextField
              fullWidth
              label="Address of School"
              {...getFieldProps('addressOfSchool')}
              error={Boolean(touched.addressOfSchool && errors.addressOfSchool)}
              helperText={touched.addressOfSchool && errors.addressOfSchool}
            />

            <TextField
              fullWidth
              label="Year"
              {...getFieldProps('year')}
              error={Boolean(touched.year && errors.year)}
              helperText={touched.year && errors.year}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              disabled
              label="High school"
              {...getFieldProps('highSchool')}
              error={Boolean(touched.highSchool && errors.highSchool)}
              helperText={touched.highSchool && errors.highSchool}
              
            />

            <TextField
              fullWidth
              label="Name of School"
              {...getFieldProps('nameOfSchool')}
              error={Boolean(touched.nameOfSchool && errors.nameOfSchool)}
              helperText={touched.nameOfSchool && errors.nameOfSchool}
            />

            <TextField
              fullWidth
              label="Address of School"
              {...getFieldProps('addressOfSchool')}
              error={Boolean(touched.addressOfSchool && errors.addressOfSchool)}
              helperText={touched.addressOfSchool && errors.addressOfSchool}
            />

            <TextField
              fullWidth
              label="Year"
              {...getFieldProps('year')}
              error={Boolean(touched.year && errors.year)}
              helperText={touched.year && errors.year}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              disabled
              label="College"
              {...getFieldProps('college')}
              error={Boolean(touched.college && errors.college)}
              helperText={touched.college && errors.college}
              
            />

            <TextField
              fullWidth
              placeholder="Put N/A if not applicable"
              label="Name of School"
              {...getFieldProps('nameOfSchool')}
              error={Boolean(touched.nameOfSchool && errors.nameOfSchool)}
              helperText={touched.nameOfSchool && errors.nameOfSchool}
            />

            <TextField
              fullWidth
              label="Address of School"
              {...getFieldProps('addressOfSchool')}
              error={Boolean(touched.addressOfSchool && errors.addressOfSchool)}
              helperText={touched.addressOfSchool && errors.addressOfSchool}
            />

            <TextField
              fullWidth
              label="Year Graduated"
              {...getFieldProps('year')}
              error={Boolean(touched.year && errors.year)}
              helperText={touched.year && errors.year}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              disabled
              label="Vocational"
              {...getFieldProps('vocational')}
              error={Boolean(touched.vocational && errors.vocational)}
              helperText={touched.vocational && errors.vocational}
              
            />

            <TextField
              fullWidth
              placeholder="Put N/A if not applicable"
              label="Name of School"
              {...getFieldProps('nameOfSchool')}
              error={Boolean(touched.nameOfSchool && errors.nameOfSchool)}
              helperText={touched.nameOfSchool && errors.nameOfSchool}
            />

            <TextField
              fullWidth
              label="Address of School"
              {...getFieldProps('addressOfSchool')}
              error={Boolean(touched.addressOfSchool && errors.addressOfSchool)}
              helperText={touched.addressOfSchool && errors.addressOfSchool}
            />

            <TextField
              fullWidth
              label="Year Graduated"
              {...getFieldProps('year')}
              error={Boolean(touched.year && errors.year)}
              helperText={touched.year && errors.year}
            />
          </Stack>

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Submit
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
