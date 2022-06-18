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
              fullWidth
              label="Age"
              {...getFieldProps('age')}
              error={Boolean(touched.age && errors.age)}
              helperText={touched.age && errors.age}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField
              label="Phone number"
              id="outlined-start-adornment"
              {...getFieldProps('phone')}
              error={Boolean(touched.phone && errors.phone)}
              helperText={touched.phone && errors.phone}
              InputProps={{
                startAdornment: <InputAdornment position="start">+63</InputAdornment>,
              }}
            />

            <TextField
              fullWidth
              label="Gender"
              {...getFieldProps('gender')}
              error={Boolean(touched.gender && errors.gender)}
              helperText={touched.gender && errors.gender}
            />
          </Stack>

          <TextField
              fullWidth
              label="Address"
              {...getFieldProps('address')}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
