import { FormControlLabel, Switch } from '@mui/material';
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
import { updateLegislative } from '../../service/legislative';


export default function EditLegislativeDialog({ open, handleClose, legislative }) {
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      ordinanceNumber: 0,
      series: 0,
      title: "",
      authors: "",
    },
    validationSchema: Yup.object({
      ordinanceNumber: Yup.number().min(1).required('Ordinance Number is required'),
      series: Yup.number().min(1).required('Series is required'),
      title: Yup.string().min(1).required('Title is required'),
      authors: Yup.string().min(1).required('Authors is required'),
    }),
    onSubmit: (values) => {
      
      updateLegislative(legislative.id, values)
        .then((res) => {
          console.log(res);
          enqueueSnackbar('Legislative updated successfully', { variant: 'success' });
          handleClose();
        })
        .catch((err) => {
          enqueueSnackbar('Legislative update failed', { variant: 'error' });
          console.error(err);
        });
    },
  });

  useEffect(() => {
    formik.setValues(
      {
        ordinanceNumber: legislative.ordinanceNumber,
        series: legislative.series,
        title: legislative.title,
        authors: legislative.authors,
      },
      true
    );
  }, [legislative]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Legislative</DialogTitle>
      <form noValidate onSubmit={formik.handleSubmit}>
        <DialogContent>
          <DialogContentText>This will change the state of this Legislative in real time.</DialogContentText>
      
          <TextField
            label="Ordinance No."
            fullWidth
            variant="standard"
            type="number"
            {...formik.getFieldProps('ordinanceNumber')}
            error={formik.touched.ordinanceNumber && formik.errors.ordinanceNumber}
            helperText={formik.touched.ordinanceNumber && formik.errors.ordinanceNumber}
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
            label="Title"
            fullWidth
            variant="standard"
            type="text"
            {...formik.getFieldProps('title')}
            error={formik.touched.title && formik.errors.title}
            helperText={formik.touched.title && formik.errors.title}
          />

          <TextField
            label="Authors"
            fullWidth
            variant="standard"
            type="text"
            {...formik.getFieldProps('authors')}
            error={formik.touched.authors && formik.errors.authors}
            helperText={formik.touched.authors && formik.errors.authors}
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
