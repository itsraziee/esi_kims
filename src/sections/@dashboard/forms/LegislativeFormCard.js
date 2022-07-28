import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stack,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { createOfficial } from '../../../service/official';
// ----------------------------------------------------------------------

export default function LegislativeFormCard() {
  const navigate = useNavigate();

  const LegislativeFormSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('First name is required'),
     });

  const formik = useFormik({
    initialValues: {
      title: '',
      
    },
    validationSchema: LegislativeFormSchema,
    onSubmit: (data) => {
      console.log({ data });
      createOfficial(data)
        .then((res) => console.log({ res }))
        .catch((err) => console.log({ err }));
      navigate('/dashboard/app', { replace: true });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Typography variant="subtitle3" noWrap>
                Upload Legislative
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  name="title"
                  label="Title"
                  {...getFieldProps('title')}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />

                
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
