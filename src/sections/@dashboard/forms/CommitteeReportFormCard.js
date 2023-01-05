import { Form, FormikProvider, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// material
import { LoadingButton } from '@mui/lab';
import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import {
  createCommitteeReport,
  updateCommitteeReportPdf,
  uploadCommitteeReportPdf,
} from '../../../service/committeeReport';

// ----------------------------------------------------------------------

export default function CommitteeReportFormCard() {
  const navigate = useNavigate();
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState();
  const [pdfFile, setPdfFile] = useState();
  const { enqueueSnackbar } = useSnackbar();

  const CommitteeReportFormSchema = Yup.object().shape({
    committeeReportNumber: Yup.string().required('Committee Report No. is required'),
    subject: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Title is required'),
    from: Yup.string().required('Where the report from is required'),
    date: Yup.date().required('Date of Committee Report is required'),
  });

  const formik = useFormik({
    initialValues: {
      committeeReportNumber: '',
      subject: '',
      from: '',
      date: '',
    },
    validationSchema: CommitteeReportFormSchema,
    onSubmit: (data) => {
      console.log({ data });
      return createCommitteeReport(data)
        .then((res) => {
          const committeeReportUid = res.id;
          console.log({ res });

          return uploadCommitteeReportPdf(committeeReportUid, pdfFile).then((res) => {
            console.log(res);

            return updateCommitteeReportPdf(committeeReportUid).then((res) => {
              enqueueSnackbar('Committee Report added successfully.', { variant: 'success' });
              navigate('/dashboard/committeeReport/', { replace: true });
            });
          });
        })
        .catch((err) => {
          console.log({ err });
          enqueueSnackbar('Committee Report creation failed.', { variant: 'error' });
        });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Card sx={{ width: '100%' }}>
          <CardContent>
            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Typography variant="subtitle3" noWrap>
                    Upload Committee Report
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField
                      fullWidth
                      name="committeeReportNumber"
                      label="Committee Report No.*"
                      {...getFieldProps('committeeReportNumber')}
                      error={Boolean(touched.committeeReportNumber && errors.committeeReportNumber)}
                      helperText={touched.committeeReportNumber && errors.committeeReportNumber}
                    />

                    <TextField
                      fullWidth
                      name="date"
                      id="date"
                      label="Date*"
                      type="date"
                      {...getFieldProps('date')}
                      error={Boolean(touched.date && errors.date)}
                      helperText={touched.date && errors.date}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Stack>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField
                      fullWidth
                      name="subject"
                      label="Subject*"
                      {...getFieldProps('subject')}
                      error={Boolean(touched.subject && errors.subject)}
                      helperText={touched.subject && errors.subject}
                    />
                  </Stack>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField
                      fullWidth
                      name="from"
                      label="From*"
                      {...getFieldProps('from')}
                      error={Boolean(touched.from && errors.from)}
                      helperText={touched.from && errors.from}
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
