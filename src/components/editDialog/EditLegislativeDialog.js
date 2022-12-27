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
      caseNumber: 0,
      solved: false,
    },
    validationSchema: Yup.object({
      caseNumber: Yup.number().min(1).required('Case No. is required'),
      solved: Yup.boolean().required(),
    }),
    onSubmit: (values) => {
      const newValue = { caseNumber: values.caseNumber, caseType: values.solved ? 'solved' : 'unsolved' };
      console.log({ newValue });
      updateLegislative(legislative.id, newValue)
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
        caseNumber: legislative.caseNumber,
        solved: legislative.caseType === 'solved',
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
          <FormControlLabel
            sx={{ float: 'right' }}
            control={
              <Switch
                checked={formik.values.solved}
                onChange={(e, checked) => {
                  console.log({ checked });
                  formik.setFieldValue('solved', checked);
                }}
              />
            }
            label={formik.values.solved ? 'Solved' : 'Unsolved'}
          />
          <TextField
            label="Case No."
            fullWidth
            variant="standard"
            type="number"
            {...formik.getFieldProps('caseNumber')}
            error={formik.touched.caseNumber && formik.errors.caseNumber}
            helperText={formik.touched.caseNumber && formik.errors.caseNumber}
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
