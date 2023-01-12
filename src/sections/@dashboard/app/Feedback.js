import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// @mui
import { Box, Button, Card, CardContent, CardHeader, Stack, TextField } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import PropTypes from 'prop-types';

import { useSnackbar } from 'notistack';
import { createFeedback } from '../../../service/feedback';
// utils

// ----------------------------------------------------------------------

Feedback.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
};

export default function Feedback({ title, subheader, list, url = null, ...other }) {
  const Feedback = Yup.object().shape({
    commentSuggestion: Yup.string().min(2, 'Too Short!'),
  });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: { commentSuggestion: '' },
    validationSchema: Feedback,
    onSubmit: (data) => {
      console.log({ data });
      createFeedback(data)
        .then((res) => {
          console.log({ res });
          if (res) {
            enqueueSnackbar('Feedback submitted successfully', {
              variant: 'success',
            });
            navigate('/dashboard/app', { replace: true });
          }
        })
        .catch((err) => {
          console.log({ err });
          enqueueSnackbar('Feedback Submitted failed.', { variant: 'error' });
        });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;
  return (
    <>
      <Card sx={{ boxShadow: 4, mt: 3 }} {...other}>
        <CardHeader title={title} subheader={subheader} />

        <CardContent>
          <Box>
            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack sx={{ mb: 1 }} spacing={2}>
                  <TextField
                    fullWidth
                    name="commentSuggestion"
                    label="Comments/Suggestions"
                    {...getFieldProps('commentSuggestion')}
                    error={Boolean(touched.commentSuggestion && errors.referenceNumber)}
                    helperText={touched.commentSuggestion && errors.referenceNumber}
                  />
                </Stack>
                <Button fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                  Submit
                </Button>
              </Form>
            </FormikProvider>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
