import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Switch,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { updateSummon } from '../../service/summon';

export default function EditSummonDialog({ open, handleClose, summon }) {
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
      updateSummon(summon.id, newValue)
        .then((res) => {
          console.log(res);
          enqueueSnackbar('Summon updated successfully', { variant: 'success' });
          handleClose();
        })
        .catch((err) => {
          enqueueSnackbar('Summon update failed', { variant: 'error' });
          console.error(err);
        });
    },
  });

  useEffect(() => {
    formik.setValues(
      {
        caseNumber: summon.caseNumber,
        solved: summon.caseType === 'solved',
      },
      true
    );
  }, [summon]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Summon</DialogTitle>
      <form noValidate onSubmit={formik.handleSubmit}>
        <DialogContent>
          <DialogContentText>This will change the state of this summon in real time.</DialogContentText>
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
