import { Form, FormikProvider, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// material
import { LoadingButton } from '@mui/lab';
import { Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
// ----------------------------------------------------------------------

export default function SummonDocumentForm() {
  const navigate = useNavigate();

  const SummonDocumentFormSchema = Yup.object().shape({
    complainant: Yup.string().min(2, 'Too Short!').required('Complainant is required'),
    defendant: Yup.string().min(2, 'Too Short!').required('Defendant is required'),
    consequence: Yup.string().min(2, 'Too Short!').required('Consequence is required'),
    caseNumber: Yup.number().required('Case Number is required'),
    about: Yup.string().min(2, 'Too Short!').required('About is required'),
    dateOfSession: Yup.date().required('Date of Session is required'),
    timeOfSession: Yup.string().required('Time of Session is required'),
    currentDate: Yup.date().required('Current Date is required'),
  });

  const formik = useFormik({
    initialValues: {
      complainant: '',
      defendant: '',
      consequence: '',
      caseNumber: '',
      about: '',
      dateOfSession: '',
      timeOfSession: '',
      currentDate: '',
    },
    validationSchema: SummonDocumentFormSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Card sx={{ minWidth: 400 }}>
          <CardContent>
            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Typography variant="subtitle3" noWrap>
                    Summon Form
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                    <TextField
                      fullWidth
                      name="complainant"
                      label="Complainant"
                      {...getFieldProps('complainant')}
                      error={Boolean(touched.complainant && errors.complainant)}
                      helperText={touched.complainant && errors.complainant}
                    />
                    <TextField
                      fullWidth
                      name="defendant"
                      label="Defendant"
                      {...getFieldProps('defendant')}
                      error={Boolean(touched.defendant && errors.defendant)}
                      helperText={touched.defendant && errors.defendant}
                    />
                    <TextField
                      fullWidth
                      name="caseNumber"
                      label="Case Number"
                      {...getFieldProps('caseNumber')}
                      error={Boolean(touched.caseNumber && errors.caseNumber)}
                      helperText={touched.caseNumber && errors.caseNumber}
                    />
                    <TextField
                      fullWidth
                      name="dateOfSession"
                      id="dateOfSession"
                      label="Date of Session"
                      type="date"
                      {...getFieldProps('dateOfSession')}
                      error={Boolean(touched.dateOfSession && errors.dateOfSession)}
                      helperText={touched.dateOfSession && errors.dateOfSession}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Stack>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                    <TextField
                      fullWidth
                      multiline
                      name="about"
                      label="About"
                      {...getFieldProps('about')}
                      error={Boolean(touched.about && errors.about)}
                      helperText={touched.about && errors.about}
                    />
                    <TextField
                      fullWidth
                      name="timeOfSession"
                      label="Time of Session"
                      {...getFieldProps('timeOfSession')}
                      error={Boolean(touched.timeOfSession && errors.timeOfSession)}
                      helperText={touched.timeOfSession && errors.timeOfSession}
                    />
                    <TextField
                      fullWidth
                      name="currentDate"
                      id="currentDate"
                      label="Current Date"
                      type="date"
                      {...getFieldProps('currentDate')}
                      error={Boolean(touched.currentDate && errors.currentDate)}
                      helperText={touched.currentDate && errors.currentDate}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Stack>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                      Submit
                    </LoadingButton>
                  </Stack>
                </Stack>
              </Form>
            </FormikProvider>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
