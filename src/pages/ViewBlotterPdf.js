import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Container, IconButton, Stack, Typography } from '@mui/material';
import { doc, onSnapshot } from 'firebase/firestore';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';
import EditBlotterDialog from '../components/editDialog/EditBlotterDialog';
import Page from '../components/Page';
import { firestore } from '../firebase-init';
import { useAuth } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';
import { deleteBlotter } from '../service/blotter';

export default function ViewBlotterPdf() {
  const user = useAuth();
  const profile = useProfile(user?.uid);
  const location = useLocation();
  console.log({ location });
  const uid = new URLSearchParams(location.search).get('uid');
  const [solved, setSolved] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const [blotter, setBlotter] = useState();

  useEffect(() => {
    // getSummon(uid).then((res) => {
    //   console.log({ summonResult: res });
    //   const summonData = res.data();
    //   console.log({ summonData });
    //   setSummon(summonData);
    // });
    const unsub = onSnapshot(doc(firestore, `blotter/${uid}`), (doc) => {
      console.log('Current data: ', doc.data());
      const data = doc.data();
      setBlotter({ ...data, id: doc.ref.id });
    });
    return () => unsub;
  }, []);

  useEffect(() => {
    console.log({ blotter });
  }, [blotter]);

  return (
    <Page title="Blotter">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Case number: {blotter?.caseNumber}</Typography>
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

        {blotter && (
          <iframe
            title={blotter?.caseNumber}
            src={blotter?.pdfURL}
            id="iframe"
            style={{ width: '100%', height: '60vh' }}
          />
        )}
      </Container>
      {blotter && (
        <EditBlotterDialog open={openEditDialog} handleClose={() => setOpenEditDialog(false)} blotter={blotter} />
      )}
      <DeleteConfirmationDialog
        open={openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        title="Delete Blotter?"
        onProceed={() => {
          deleteBlotter(uid)
            .then(() => {
              setOpenDeleteDialog(false);
              navigate('/dashboard/blotter');
              enqueueSnackbar('Blotter deleted successfully', { variant: 'success' });
            })
            .catch((err) => {
              console.error(err);
              enqueueSnackbar('Blotter deletion failed', { variant: 'error' });
            });
        }}
      />
    </Page>
  );
}
