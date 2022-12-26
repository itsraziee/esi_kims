import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteConfirmationDialog({
  open,
  handleClose,
  onProceed,
  title = 'Delete',
  description = 'This action cannot be undone. Are you sure?',
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onProceed}>Yes</Button>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}
