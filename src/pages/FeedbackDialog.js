import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function FeedbackDialog() {
  const [open, setOpen, value, setValue] = React.useState(2);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Stack>
          <DialogTitle>How do you rate our service?</DialogTitle>

          <DialogContent>
            <Box
              sx={{
                '& > legend': { mt: 2 },
              }}
            >
              <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} marginBottom={2}>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Stack>
            </Box>

            <TextField fullWidth label="What could we do better?" id="fullWidth" ant="standard" />

            <DialogActions>
              <Button variant="contained" onClick={handleClose} size="large" fullWidth>
                Submit
              </Button>
            </DialogActions>
          </DialogContent>
        </Stack>
      </Dialog>
    </div>
  );
}
