import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useLocation, useNavigate } from 'react-router-dom';
// material
import { Container, IconButton, Stack, Typography } from '@mui/material';
// components
import { doc, onSnapshot } from 'firebase/firestore';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import Page from '../components/Page';

import { useAuth } from '../hooks/useAuth';
import { deleteCommitteeReport } from '../service/committeeReport';

import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';
import EditCommitteeReportDialog from '../components/editDialog/EditCommitteeReportDialog';
import { firestore } from '../firebase-init';
// ----------------------------------------------------------------------

export default function ViewCommitteeReport() {
  const user = useAuth();
  const location = useLocation();
  console.log({ location });
  const uid = new URLSearchParams(location.search).get('uid');
  console.log({ uid });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const [committeeReport, setCommitteeReport] = useState();

  useEffect(() => {
    const unsub = onSnapshot(doc(firestore, `committeeReport/${uid}`), (doc) => {
      console.log('Current data: ', doc.data());
      const data = doc.data();
      setCommitteeReport({ ...data, id: doc.ref.id });
    });
    return () => unsub;
  }, [uid]);

  useEffect(() => {
    console.log({ committeeReport });
  }, [committeeReport]);

  return (
    <Page title="Committee Report">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">{committeeReport?.subject}</Typography>

          {user && (
            <Stack direction="row" spacing={1}>
              <IconButton
                onClick={() => {
                  setOpenEditDialog(true);
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  setOpenDeleteDialog(true);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          )}
        </Stack>
        {committeeReport && (
          <iframe
            title={committeeReport?.title}
            src={committeeReport?.pdfUrl}
            id="iframe"
            style={{ width: '100%', height: '60vh' }}
          />
        )}
      </Container>
      {committeeReport && (
        <EditCommitteeReportDialog
          open={openEditDialog}
          handleClose={() => setOpenEditDialog(false)}
          committeeReport={committeeReport}
        />
      )}

      <DeleteConfirmationDialog
        open={openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        title="Delete Committee Report?"
        onProceed={() => {
          deleteCommitteeReport(uid)
            .then(() => {
              setOpenDeleteDialog(false);
              navigate('/dashboard/committeeReport');
              enqueueSnackbar('Committee Report deleted successfully', { variant: 'success' });
            })
            .catch((err) => {
              console.error(err);
              enqueueSnackbar('Committee Report deletion failed', { variant: 'error' });
            });
        }}
      />
    </Page>
  );
}
