import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { updateCommitteeReport } from '../../service/committeeReport';

export default function EditCommitteeReportDialog({ open, handleClose, committeeReport }) {
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      committeeReportNumber: 0,
      series: 0,
      date: '',
      subject: '',
      submittedBy: '',
    },
    validationSchema: Yup.object({
      committeeReportNumber: Yup.number().min(1).required('Committee Report No. is required'),
      series: Yup.number().min(1).required('Series is required'),
      subject: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Title is required'),
      submittedBy: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Submitted by is required'),
      date: Yup.date().required('Date of Committee Report is required'),
    }),
    onSubmit: (values) => {
      updateCommitteeReport(committeeReport.id, values)
        .then((res) => {
          console.log(res);
          enqueueSnackbar('Committee Report updated successfully', { variant: 'success' });
          handleClose();
        })
        .catch((err) => {
          enqueueSnackbar('Committee Report update failed', { variant: 'error' });
          console.error(err);
        });
    },
  });

  useEffect(() => {
    formik.setValues(
      {
        committeeReportNumber: committeeReport.committeeReportNumber,
        series: committeeReport.series,
        subject: committeeReport.subject,
        submittedBy: committeeReport.submittedBy,
        date: committeeReport.date,
      },
      true
    );
  }, [committeeReport]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Committee Report</DialogTitle>
      <form noValidate onSubmit={formik.handleSubmit}>
        <DialogContent>
          <DialogContentText>This will change the state of this Committee Report in real time.</DialogContentText>

          <TextField
            label="Committee Report No.*"
            fullWidth
            variant="standard"
            type="number"
            {...formik.getFieldProps('committeeReportNumber')}
            error={formik.touched.committeeReportNumber && formik.errors.committeeReportNumber}
            helperText={formik.touched.committeeReportNumber && formik.errors.committeeReportNumber}
          />

          <TextField
            label="Series"
            fullWidth
            variant="standard"
            type="number"
            {...formik.getFieldProps('series')}
            error={formik.touched.series && formik.errors.series}
            helperText={formik.touched.series && formik.errors.series}
          />

          <TextField
            label="Date*"
            fullWidth
            variant="standard"
            type="date"
            {...formik.getFieldProps('date')}
            error={formik.touched.date && formik.errors.date}
            helperText={formik.touched.date && formik.errors.date}
          />

          <TextField
            label="Subject*"
            fullWidth
            variant="standard"
            type="text"
            {...formik.getFieldProps('subject')}
            error={formik.touched.subject && formik.errors.subject}
            helperText={formik.touched.subject && formik.errors.subject}
          />

          <TextField
            label="Submitted by"
            fullWidth
            variant="standard"
            type="text"
            {...formik.getFieldProps('submittedBy')}
            error={formik.touched.submittedBy && formik.errors.submittedBy}
            helperText={formik.touched.submittedBy && formik.errors.submittedBy}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Update</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
