import { Form, FormikProvider, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// material
import { LoadingButton } from '@mui/lab';
import {
  Avatar,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { signOut, updatePassword } from 'firebase/auth';
import { useSnackbar } from 'notistack';
// component
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import { auth } from '../firebase-init';
import { useAuth } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';
import AuthRequired from '../layouts/auth/AuthRequired';
import { updateProfile, updateProfilePicture, uploadProfilePicture } from '../service/profile';

export default function Profile() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const user = useAuth();
  const profile = useProfile(user?.uid);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [imageObjectUrl, setImageObjectUrl] = useState();
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

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
      if (values.password) {
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
      }

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
    setImageObjectUrl(profile?.photoURL);
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
                    <Grid container>
                      <Grid item xs={12} sm={6}>
                        <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center">
                          <Grid item>
                            <Avatar src={imageObjectUrl} alt="Upload preview" sx={{ height: 220, width: 220 }} />
                          </Grid>

                          <Grid item>
                            <LoadingButton
                              sx={{ width: 200, mt: 1 }}
                              variant="contained"
                              component="label"
                              fullWidth
                              loading={uploadingPhoto}
                            >
                              Upload Image
                              <input
                                type="file"
                                hidden
                                multiple={false}
                                onChange={(e) => {
                                  console.log({ e });
                                  const imageFile = e.target.files[0];
                                  const objectUrl = URL.createObjectURL(imageFile);
                                  // setOfficialPhoto(imageFile);
                                  console.log({ imageFile });
                                  setUploadingPhoto(true);
                                  uploadProfilePicture(user.uid, imageFile).then((res) => {
                                    return updateProfilePicture(user.uid, imageFile).then((res) => {
                                      setUploadingPhoto(false);
                                      console.log({ objectUrl });
                                      setImageObjectUrl(objectUrl);
                                    });
                                  });
                                }}
                              />
                            </LoadingButton>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Stack direction="row" spacing={2}>
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
                          </Grid>
                          <Grid item xs={12}>
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
                          </Grid>
                          <Grid item xs={12}>
                            <LoadingButton
                              fullWidth
                              size="large"
                              type="submit"
                              variant="contained"
                              loading={isSubmitting || uploadingPhoto}
                            >
                              Submit
                            </LoadingButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
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
