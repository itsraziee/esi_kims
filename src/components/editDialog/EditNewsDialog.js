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
import { updateNews } from '../../service/news';

export default function EditNewsDialog({ open, handleClose, news }) {
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().min(1).required('Title is required'),
      description: Yup.string().min(1).required('Description is required'),
    }),
    onSubmit: (values) => {
      updateNews(news.id, values)
        .then((res) => {
          console.log(res);
          enqueueSnackbar('News updated successfully', { variant: 'success' });
          handleClose();
        })
        .catch((err) => {
          enqueueSnackbar('News update failed', { variant: 'error' });
          console.error(err);
        });
    },
  });

  useEffect(() => {
    formik.setValues(
      {
        title: news.title,
        description: news.description,
      },
      true
    );
  }, [news]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update News</DialogTitle>
      <form noValidate onSubmit={formik.handleSubmit}>
        <DialogContent>
          <DialogContentText>This will change the state of this News in real time.</DialogContentText>

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
            label="Description"
            fullWidth
            variant="standard"
            multiline
            type="text"
            {...formik.getFieldProps('description')}
            error={formik.touched.description && formik.errors.description}
            helperText={formik.touched.description && formik.errors.description}
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
