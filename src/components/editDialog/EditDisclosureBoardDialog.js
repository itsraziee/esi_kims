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
import { updateDisclosureBoard } from '../../service/disclosureBoard';


export default function EditDisclosureBoardDialog({ open, handleClose, disclosureBoard }) {
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().min(1).required('Title is required'),
    }),
    onSubmit: (values) => {
      
      updateDisclosureBoard(disclosureBoard.id, values)
        .then((res) => {
          console.log(res);
          enqueueSnackbar('Disclosure Board updated successfully', { variant: 'success' });
          handleClose();
        })
        .catch((err) => {
          enqueueSnackbar('Disclosure Board update failed', { variant: 'error' });
          console.error(err);
        });
    },
  });

  useEffect(() => {
    formik.setValues(
      {
        title: disclosureBoard.title,
      },
      true
    );
  }, [disclosureBoard]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Disclosure Board</DialogTitle>
      <form noValidate onSubmit={formik.handleSubmit}>
        <DialogContent>
          <DialogContentText>This will change the state of this Disclosure Board in real time.</DialogContentText>

          <TextField
            label="Title"
            fullWidth
            variant="standard"
            type="text"
            {...formik.getFieldProps('title')}
            error={formik.touched.title && formik.errors.title}
            helperText={formik.touched.title && formik.errors.title}
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
