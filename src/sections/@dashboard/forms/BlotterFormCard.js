import { Form, FormikProvider, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// material
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Card,
  CardContent,
  FormControl, Grid, InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { createBlotter, updatePdfURL, uploadBlotterPdf } from '../../../service/blotter';
// ----------------------------------------------------------------------

export default function BlotterFormCard() {
  const navigate = useNavigate();
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState();
  const [pdfFile, setPdfFile] = useState();

  const BlotterFormCardSchema = Yup.object().shape({
    caseType: Yup.string().oneOf(['unsolved', 'solved']).required('Case Type is required'),
    caseNumber: Yup.number().min(0).required('Case number is required'),
  });

  const formik = useFormik({
    initialValues: {
      caseNumber: '',
      caseType: 'unsolved',
    },
    validationSchema: BlotterFormCardSchema,
    onSubmit: async (data) => {
      return createBlotter(data.caseNumber, data.caseType).then((res) => {
        console.log({ createdBlotter: res });
        const blotterUid = res.id;
        return uploadBlotterPdf(res.id, pdfFile).then((res) => {
          console.log({ res });
          return updatePdfURL(blotterUid, res.ref).then((res) => {
            navigate('/dashboard/app', { replace: true });
          });
        });
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
                    Blotter
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                    <TextField
                      fullWidth
                      name="caseNumber"
                      label="Case No."
                      {...getFieldProps('caseNumber')}
                      error={Boolean(touched.caseNumber && errors.caseNumber)}
                      helperText={touched.caseNumber && errors.caseNumber}
                      type="number"
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
