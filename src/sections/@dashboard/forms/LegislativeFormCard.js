import { Form, FormikProvider, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// material
import { LoadingButton } from '@mui/lab';
import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { createLegislative, updateLegislativePdf, uploadLegislativePdf } from '../../../service/legislative';
// ----------------------------------------------------------------------

export default function LegislativeFormCard() {
  const navigate = useNavigate();
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState();
  const [pdfFile, setPdfFile] = useState();

  const LegislativeFormSchema = Yup.object().shape({
    ordinanceNumber: Yup.string().required('Ordinanace No. is required'),
    title: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Title is required'),
    authors: Yup.string().required('Authors is required'),
  });

  const formik = useFormik({
    initialValues: {
      ordinanceNumber: '',
      title: '',
      authors: '',
    },
    validationSchema: LegislativeFormSchema,
    onSubmit: (data) => {
      console.log({ data });
      return createLegislative(data)
        .then((res) => {
          const legislativeUid = res.id;
          console.log({ res });

          return uploadLegislativePdf(legislativeUid, pdfFile).then((res) => {
            console.log(res);

            return updateLegislativePdf(legislativeUid).then((res) => {
              navigate('/dashboard/legislative/', { replace: true });
            });
          });
        })
        .catch((err) => {
          console.log({ err });
        });
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
                    Upload Ordinance
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField
                      fullWidth
                      name="ordinanceNumber"
                      label="Ordinance No.*"
                      {...getFieldProps('ordinanceNumber')}
                      error={Boolean(touched.ordinanceNumber && errors.ordinanceNumber)}
                      helperText={touched.ordinanceNumber && errors.ordinanceNumber}
                    />

                    <TextField
                      fullWidth
                      name="series"
                      label="Series*"
                      {...getFieldProps('series')}
                      error={Boolean(touched.series && errors.series)}
                      helperText={touched.series && errors.series}
                    />
                  </Stack>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField
                      fullWidth
                      name="title"
                      label="Title*"
                      {...getFieldProps('title')}
                      error={Boolean(touched.title && errors.title)}
                      helperText={touched.title && errors.title}
                    />
                  </Stack>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField
                      fullWidth
                      name="authors"
                      label="Authors*"
                      {...getFieldProps('authors')}
                      error={Boolean(touched.authors && errors.authors)}
                      helperText={touched.authors && errors.authors}
                    />
                  </Stack>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button sx={{ minWidth: 275 }} variant="outlined" component="label">
                      Upload PDF
                      <input
                        type="file"
                        hidden
                        multiple={false}
                        onChange={(e) => {
                          const pdf = e.target.files[0];
                          const objectUrl = URL.createObjectURL(pdf);

                          setPdfPreviewUrl(objectUrl);
                          setPdfFile(pdf);
                        }}
                      />
                    </Button>

                    <LoadingButton
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      loading={isSubmitting}
                      disabled={!pdfFile}
                    >
                      Submit
                    </LoadingButton>
                  </Stack>
                </Stack>
              </Form>
            </FormikProvider>
          </CardContent>
        </Card>
      </Grid>
      {pdfPreviewUrl && (
        <Grid item xs={12}>
          <iframe title="pdf_preview" src={pdfPreviewUrl} style={{ width: '100%', height: '100vh' }} />
        </Grid>
      )}
    </Grid>
  );
}
