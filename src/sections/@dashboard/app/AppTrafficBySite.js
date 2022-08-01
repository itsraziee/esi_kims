import * as Yup from 'yup';
// @mui
import PropTypes from 'prop-types';
import { useFormik, Form, FormikProvider } from 'formik';
import { Box, Card, Paper, Stack, Typography, TextField, CardHeader, CardContent, Grid } from '@mui/material';

import { LoadingButton } from '@mui/lab';
// utils

// ----------------------------------------------------------------------

AppTrafficBySite.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
};

export default function AppTrafficBySite({ title, subheader, list, url = null, ...other }) {
  const ReferenceNumber = Yup.object().shape({
    referenceNumber: Yup.string().min(2, 'Too Short!').required('Reference Number is required'),
  });
  const formik = useFormik({
    initialValues: { referenceNumber: '' },
    validationSchema: ReferenceNumber,
    onSubmit: (data) => {
      console.log({ data });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
     
        <CardContent>
          <Box>
            <Stack sx={{  mb: 1}} spacing={2}>
              <TextField
                fullWidth
                name="referenceNumber"
                label="Reference No."
                {...getFieldProps('referenceNumber')}
                error={Boolean(touched.referenceNumber && errors.referenceNumber)}
                helperText={touched.referenceNumber && errors.referenceNumber}
              />
            </Stack>
            <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
              Submit
            </LoadingButton>
          </Box>
         
      </CardContent>
    </Card>
  );
}
