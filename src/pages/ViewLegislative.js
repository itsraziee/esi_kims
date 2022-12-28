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
import { deleteLegislative } from '../service/legislative';

import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';
import EditLegislativeDialog from '../components/editDialog/EditLegislativeDialog';
import { firestore } from '../firebase-init';
// ----------------------------------------------------------------------

export default function ViewLegislative() {
  const user = useAuth();
  const location = useLocation();
  console.log({ location });
  const uid = new URLSearchParams(location.search).get('uid');
  console.log({ uid });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const [legislative, setLegislative] = useState();

  useEffect(() => {
    // getLegislative(uid).then((res) => {
    //   console.log({ legislativeResult: res });
    //   const legislativeData = res.data();
    //   console.log({ legislativeData });
    //   setLegislative(legislativeData);
    // });
    const unsub = onSnapshot(doc(firestore, `legislative/${uid}`), (doc) => {
      console.log('Current data: ', doc.data());
      const data = doc.data();
      setLegislative({ ...data, id: doc.ref.id });
    });
    return () => unsub;
  }, [uid]);

  useEffect(() => {
    console.log({ legislative });
  }, [legislative]);

  return (
    <Page title="Legislative">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">{legislative?.title}</Typography>

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
        {legislative && (
          <iframe
            title={legislative?.title}
            src={legislative?.pdfUrl}
            id="iframe"
            style={{ width: '100%', height: '60vh' }}
          />
        )}
      </Container>
      {legislative && (
        <EditLegislativeDialog
          open={openEditDialog}
          handleClose={() => setOpenEditDialog(false)}
          legislative={legislative}
        />
      )}

      <DeleteConfirmationDialog
        open={openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        title="Delete Legislative?"
        onProceed={() => {
          deleteLegislative(uid)
            .then(() => {
              setOpenDeleteDialog(false);
              navigate('/dashboard/legislative');
              enqueueSnackbar('Legislative deleted successfully', { variant: 'success' });
            })
            .catch((err) => {
              console.error(err);
              enqueueSnackbar('Legislative deletion failed', { variant: 'error' });
            });
        }}
      />
    </Page>
  );
}
