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
import { deleteDisclosureBoard } from '../service/disclosureBoard';

import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';
import EditDisclosureBoardDialog from '../components/editDialog/EditDisclosureBoardDialog';
import { firestore } from '../firebase-init';
import { useProfile } from '../hooks/useProfile';
// ----------------------------------------------------------------------

export default function ViewDisclosureBoard() {
  const user = useAuth();
  const profile = useProfile(user?.uid);
  const location = useLocation();
  console.log({ location });
  const uid = new URLSearchParams(location.search).get('uid');
  console.log({ uid });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const [disclosureBoard, setDisclosureBoard] = useState();

  useEffect(() => {
    const unsub = onSnapshot(doc(firestore, `disclosureBoard/${uid}`), (doc) => {
      console.log('Current data: ', doc.data());
      const data = doc.data();
      setDisclosureBoard({ ...data, id: doc.ref.id });
    });
    return () => unsub;
  }, []);

  useEffect(() => {
    console.log({ disclosureBoard });
  }, [disclosureBoard]);

  return (
    <Page title="Disclosure Board">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">{disclosureBoard?.title}</Typography>

          {user && profile?.accountRole && profile?.accountRole !== 'Captain' && (
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
        {disclosureBoard && (
          <iframe
            title={disclosureBoard?.title}
            src={disclosureBoard?.pdfUrl}
            id="iframe"
            style={{ width: '100%', height: '60vh' }}
          />
        )}
      </Container>
      {disclosureBoard && (
        <EditDisclosureBoardDialog
          open={openEditDialog}
          handleClose={() => setOpenEditDialog(false)}
          disclosureBoard={disclosureBoard}
        />
      )}

      <DeleteConfirmationDialog
        open={openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        title="Delete Disclosure Board?"
        onProceed={() => {
          deleteDisclosureBoard(uid)
            .then(() => {
              setOpenDeleteDialog(false);
              navigate('/dashboard/disclosureBoard');
              enqueueSnackbar('Disclosure Board deleted successfully', { variant: 'success' });
            })
            .catch((err) => {
              console.error(err);
              enqueueSnackbar('Disclosure Board deletion failed', { variant: 'error' });
            });
        }}
      />
    </Page>
  );
}
