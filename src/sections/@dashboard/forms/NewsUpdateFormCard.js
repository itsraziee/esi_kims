import { Form, FormikProvider, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// material
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';
import { Button, Card, CardContent, IconButton, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
// ----------------------------------------------------------------------

export default function NewsUpdateFormCard() {
  const navigate = useNavigate();
  const [newsPdf, setNewsPdf] = useState();
  const [newsPdfPreview, setNewsPdfPreview] = useState();
  const [newsImage, setNewsImage] = useState();
  const [newsImagePreview, setNewsImagePreview] = useState();

  useEffect(() => {
    if (newsPdf) {
      setNewsPdfPreview(URL.createObjectURL(newsPdf));
    }
  }, [newsPdf]);

  useEffect(() => {
    if (newsImage) {
      setNewsImagePreview(URL.createObjectURL(newsImage));
    }
  }, [newsImage]);

  const NewsUpdateFormSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').required('Title is required'),
    description: Yup.string().min(2, 'Too Short!').required('Description is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: NewsUpdateFormSchema,
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
    <Card sx={{ width: '100vw' }}>
      <CardContent>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Typography variant="subtitle3" noWrap>
                News Update Form
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField
                  name="title"
                  label="Title"
                  fullWidth
                  {...getFieldProps('title')}
                  error={Boolean(touched.title && errors.title)}
                  helperText={touched.title && errors.title}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <TextField
                  multiline
                  fullWidth
                  name="description"
                  label="Description"
                  {...getFieldProps('description')}
                  error={Boolean(touched.description && errors.description)}
                  helperText={touched.description && errors.description}
                  rows={4}
                />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button sx={{ minWidth: 275 }} variant="outlined" component="label">
                  Upload PDF
                  <input
                    type="file"
                    hidden
                    multiple={false}
                    accept="application/pdf"
                    onChange={(e) => {
                      const files = [...e.target.files];
                      console.log({ e, files });
                      setNewsPdf(files[0]);
                    }}
                  />
                </Button>
                <Button sx={{ minWidth: 275 }} variant="outlined" component="label">
                  Upload Image
                  <input
                    type="file"
                    hidden
                    multiple={false}
                    accept="image/*"
                    onChange={(e) => {
                      const files = [...e.target.files];
                      console.log({ e, files });
                      setNewsImage(files[0]);
                    }}
                  />
                </Button>

                <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                  Submit
                </LoadingButton>
              </Stack>
              {newsImagePreview && (
                <Stack>
                  <Stack direction="row" alignItems="center" justifyContent="center">
                    <Typography sx={{ flex: 1 }}>Image Preview</Typography>
                    <IconButton>
                      <CloseIcon />
                    </IconButton>
                  </Stack>
                  <img alt="preview" src={newsImagePreview} />
                </Stack>
              )}

              {newsPdfPreview && (
                <Stack>
                  <Typography>PDF Preview</Typography>
                  <iframe title="preview" src={newsPdfPreview} style={{ height: '100vh' }} />
                </Stack>
              )}
            </Stack>
          </Form>
        </FormikProvider>
      </CardContent>
    </Card>
  );
}
