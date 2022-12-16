import { Form, FormikProvider, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// material
import { LoadingButton } from '@mui/lab';
import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { createDisclosureBoard, updateDisclosureBoardPdf, uploadDisclosureBoardPdf } from '../../../service/disclosureBoard';
// ----------------------------------------------------------------------

export default function DisclosureBoardFormCard() {
  const navigate = useNavigate();
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState();
  const [pdfFile, setPdfFile] = useState();

  const DisclosureBoardFormSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Title is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema: DisclosureBoardFormSchema,
    onSubmit: (data) => {
      console.log({ data });
      return createDisclosureBoard(data)
        .then((res) => {
          const disclosureBoardUid = res.id;
          console.log({ res });

          return uploadDisclosureBoardPdf(disclosureBoardUid, pdfFile).then((res) => {
            console.log(res);

            return updateDisclosureBoardPdf(disclosureBoardUid).then((res) => {
              navigate('/dashboard/disclosureBoard/', { replace: true });
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
                    Upload Full Disclosure
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
