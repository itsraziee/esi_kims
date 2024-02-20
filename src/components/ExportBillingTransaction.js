import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';

import { useReactToPrint } from 'react-to-print';
import BarangayRevenueReport from '../sections/documents/BarangayRevenueReport';
import Iconify from './Iconify';

export default function ExportBillingTransaction({ grandTotal, reportDate, rows }) {
  const [open, setOpen] = React.useState(false);
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} startIcon={<Iconify icon="mdi:printer" />}>
        Export
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="lg"
        align="center"
      >
        <DialogTitle id="alert-dialog-title" align="left">
          {'Print'}
        </DialogTitle>
        <DialogContent>
          <BarangayRevenueReport rows={rows} grandTotal={grandTotal} reportDate={reportDate} ref={componentRef} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handlePrint();
            }}
            autoFocus
          >
            Print
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}