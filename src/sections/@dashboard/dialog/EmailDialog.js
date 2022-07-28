import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSnackbar } from 'notistack';
import { resetUserPassword } from '../../../service/auth';

export default function EmailDialog({ open, setOpen }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [email, setEmail] = React.useState();

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To reset your password, please enter your email address here. A link will be sent to your email to reset
            successfully.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              resetUserPassword(email)
                .then(() => {
                  enqueueSnackbar('Reset password email sent', { variant: 'success' });
                  handleClose();
                })
                .catch((err) => {
                  console.log({ err });
                  enqueueSnackbar('Reset password email not sent', { variant: 'error' });
                  handleClose();
                });
            }}
          >
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
