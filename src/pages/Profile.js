import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import {
  Button,
  Stack,
  Typography,
  TextField,
  Container,
  IconButton,
  InputAdornment,
  Card,
  CardContent,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useSnackbar } from 'notistack';
import { signOut, updatePassword } from 'firebase/auth';
// component
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { updateProfile } from '../service/profile';
import { useAuth } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';
import AuthRequired from '../layouts/auth/AuthRequired';
import { auth } from '../firebase-init';

export default function Profile() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const user = useAuth();
  const profile = useProfile(user?.uid);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const ProfileSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    password: Yup.string().min(8).matches(passwordRules, { message: 'Please create a stronger password' }),
  });
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      password: '',
    },
    validationSchema: ProfileSchema,
    onSubmit: async (values) => {
      updatePassword(user, values.password)
        .then(() => {
          // Update successful.
          console.log('password updated');
          enqueueSnackbar('Password updated successfully', { variant: 'success' });
          signOut(auth).then((res) => {
            enqueueSnackbar('Logged out successfully', { variant: 'success' });
          });
        })
        .catch((error) => {
          // An error ocurred
          console.log('password update failed:', error);
          enqueueSnackbar('Password update failed', { variant: 'error' });
          // ...
        });

      return updateProfile(user?.uid, {
        firstName: values.firstName,
        lastName: values.lastName,
      }).then((res) => {
        console.log({ res });
        navigate('/dashboard/app', { replace: true });
      });
    },
  });

  useEffect(() => {
    console.log({ profile });
    if (!profile) return;

    formik.setFieldValue('firstName', profile.firstName);
    formik.setFieldValue('lastName', profile.lastName);
  }, [profile]);

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <AuthRequired>
      <Page title="Residents Profile">
        <Container sx={{ mt: 10, mb: 5 }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <Typography variant="subtitle3" noWrap>
                      Personal Data
                    </Typography>
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

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <Button sx={{ minWidth: 275 }} variant="outlined" component="label">
                        Upload Image
                        <input type="file" hidden />
                      </Button>

                      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                        Submit
                      </LoadingButton>
                    </Stack>
                  </Stack>
                </Form>
              </FormikProvider>
            </CardContent>
          </Card>
        </Container>
      </Page>
    </AuthRequired>
  );
}
