import * as Yup from 'yup';
// @mui
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import PropTypes from 'prop-types';

import { LoadingButton } from '@mui/lab';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { getDocumentRequest } from '../../../service/documentRequest';
import RequestStatus from '../request/status/RequestStatus';
// utils

// ----------------------------------------------------------------------

DocumentRequestStatus.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
};

export default function DocumentRequestStatus({ title, subheader, list, url = null, ...other }) {
  const ReferenceNumber = Yup.object().shape({
    referenceNumber: Yup.string().min(2, 'Too Short!').required('Reference Number is required'),
  });
  const [open, setOpen] = useState(false);
  const [documentRequest, setDocumentRequest] = useState();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: { referenceNumber: '' },
    validationSchema: ReferenceNumber,
    onSubmit: async (data) => {
      console.log({ data });

      return getDocumentRequest(data.referenceNumber).then((res) => {
        console.log({ res });
        if (!res.exists()) {
          enqueueSnackbar('Reference number is not found, please try again later.', { variant: 'error' });
          return;
        }

        const data = { ...res.data(), referenceNumber: res.id };
        console.log({ resData: data });

        setDocumentRequest(data);
        handleClickOpen(true);
      });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, handleChange } = formik;
  return (
    <>
      <Card sx={{ boxShadow: 4 }} {...other}>
        <CardHeader title={title} subheader={subheader} />

        <CardContent>
          <Box>
            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack sx={{ mb: 1 }} spacing={2}>
                  <TextField
                    fullWidth
                    name="referenceNumber"
                    label="Reference No."
                    {...getFieldProps('referenceNumber')}
                    error={Boolean(touched.referenceNumber && errors.referenceNumber)}
                    helperText={touched.referenceNumber && errors.referenceNumber}
                  />
                </Stack>
                <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={open}>
                  Submit
                </LoadingButton>
              </Form>
            </FormikProvider>
          </Box>
        </CardContent>
      </Card>
      {documentRequest && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Document Request Status</DialogTitle>
          <DialogContent>
            <RequestStatus
              referenceNumber={documentRequest.referenceNumber}
              secretaryRemarks={documentRequest?.secretaryRemarks ?? 'N/A'}
              treasurerRemarks={documentRequest?.treasurerRemarks ?? 'N/A'}
              requestorName={documentRequest?.requestorName}
              status={documentRequest?.status}
              typeOfDocument={documentRequest?.type}
              number={documentRequest?.number}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
