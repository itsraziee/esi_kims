import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Button, Stack, TextField, Card, CardContent, FormControl, InputLabel, Select, MenuItem,  Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// ----------------------------------------------------------------------

export default function SummonFormCard() {
  const navigate = useNavigate();

  const SummonFormCardSchema = Yup.object().shape({
    caseType: Yup.string().oneOf(['unsolved', 'solved']).required('Case Type is required'),
    title: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Title is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema: SummonFormCardSchema,
    onSubmit: (data) => {
      console
        .log({ data })
        .then((res) => console.log({ res }))
        .catch((err) => console.log({ err }));
      navigate('/dashboard/app', { replace: true });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  return (
    <Card sx={{ minWidth: 400 }}>
      <CardContent>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Typography variant="subtitle3" noWrap>
                Summon 
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField
                  fullWidth
                  name="title"
                  label="Title"
                  {...getFieldProps('title')}
                  error={Boolean(touched.title && errors.title)}
                  helperText={touched.title && errors.title}
                />
                <FormControl fullWidth>
                  <InputLabel id="caseType-select-label">Case Type</InputLabel>
                  <Select
                    labelId="caseType-select-label"
                    id="caseType-select"
                    value={formik.values.caseType}
                    label="Case Type"
                    onChange={handleChange}
                    name="caseType"
                  >
                    <MenuItem value="unsolved">Unsolved</MenuItem>
                    <MenuItem value="solved">Solved</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button sx={{ minWidth: 275 }} variant="outlined" component="label">
                  Upload PDF
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
  );
}
