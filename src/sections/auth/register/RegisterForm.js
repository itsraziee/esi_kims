import { Form, FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// material
import { LoadingButton } from '@mui/lab';
import { FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
// component
import { doc, setDoc } from '@firebase/firestore';
import { useSnackbar } from 'notistack';
import Iconify from '../../../components/Iconify';
import { firestore } from '../../../firebase-init';
import { createAccount, setProfile } from '../../../service/auth';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const ROLES = ['Secretary', 'Treasurer'];
  const { enqueueSnackbar } = useSnackbar();

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string()
      .min(8)
      .matches(passwordRules, { message: 'Please create a stronger password' })
      .required('Password is required'),
    accountRole: Yup.string().oneOf(ROLES),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      accountRole: ROLES[0],
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      console.log({ values });
      const { email, password, firstName, lastName, accountRole } = values;
      return createAccount(email, password)
        .then((accountRes) => {
          const uid = accountRes.user.uid;
          const email = accountRes.user.email;
          setProfile(uid, firstName, lastName, accountRole);
          // navigate('/dashboard/app', { replace: true });
          const userRef = doc(firestore, 'users', values.accountRole);
          setDoc(userRef, { email }).then((res) => {
            enqueueSnackbar('Account has been created', { variant: 'success' });
            formik.resetForm();
          });
        })
        .catch((err) => {
          if (err.code === 'auth/email-already-in-use') {
            const userRef = doc(firestore, 'users', values.accountRole);
            setDoc(userRef, { email: values.email }).then((res) => {
              enqueueSnackbar('Account already exist and has been set', { variant: 'success' });
              formik.resetForm();
            });
            return;
          }
          console.error({ err });
          enqueueSnackbar('Account creation failed', { variant: 'error' });
        });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Select value={formik.values.accountRole} label="Role" {...getFieldProps('accountRole')}>
              {ROLES.map((role) => (
                <MenuItem value={role}>{role}</MenuItem>
              ))}
            </Select>
          </FormControl>
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
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

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
