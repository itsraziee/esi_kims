import { Form, FormikProvider, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// material
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { createSummon, updatePdfURL, uploadSummonPdf } from '../../../service/summon';
// ----------------------------------------------------------------------

export default function SummonFormCard() {
  const navigate = useNavigate();
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState();
  const [pdfFile, setPdfFile] = useState();

  const SummonFormCardSchema = Yup.object().shape({
    caseType: Yup.string().oneOf(['unsolved', 'solved']).required('Case Type is required'),
    caseNumber: Yup.number().min(0).required('Title is required'),
  });

  const formik = useFormik({
    initialValues: {
      caseNumber: '',
      caseType: 'unsolved',
    },
    validationSchema: SummonFormCardSchema,
    onSubmit: async (data) => {
      return createSummon(data.caseNumber, data.caseType).then((res) => {
        console.log({ createdSummon: res });
        const summonUid = res.id;
        return uploadSummonPdf(res.id, pdfFile).then((res) => {
          console.log({ res });
          return updatePdfURL(summonUid, res.ref).then((res) => {
            navigate('/dashboard/summon', { replace: true });
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
                    Summon
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                    <TextField
                      fullWidth
                      name="caseNumber"
                      label="Case no."
                      {...getFieldProps('caseNumber')}
                      error={Boolean(touched.caseNumber && errors.caseNumber)}
                      helperText={touched.caseNumber && errors.caseNumber}
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
