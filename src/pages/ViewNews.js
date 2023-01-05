import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Container, IconButton, Stack, Typography } from '@mui/material';
import { doc, onSnapshot } from 'firebase/firestore';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';
import EditNewsDialog from '../components/editDialog/EditNewsDialog';
import { firestore } from '../firebase-init';
import { useAuth } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';
import { deleteNews } from '../service/news';

export default function ViewNews() {
  const user = useAuth();
  const profile = useProfile(user?.uid);

  const location = useLocation();
  const uid = new URLSearchParams(location.search).get('uid');
  const [news, setNews] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(doc(firestore, `news/${uid}`), (doc) => {
      console.log('Current data: ', doc.data());
      const data = doc.data();
      setNews({ ...data, id: doc.ref.id });
    });
    return () => unsub;
  }, [uid]);

  useEffect(() => {
    console.log({ news });
  }, [news]);

  return (
    <Container>
      <Stack direction="row" alignItems="center">
        <Typography variant="h4" sx={{ flex: 1 }}>
          {news?.title}
        </Typography>
        {user && profile?.accountRole && profile?.accountRole !== 'Captain' && (
          <Stack direction="row" alignItems="center" justifyContent="center">
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
      {news?.imageUrl && <img alt={news?.title} src={news?.imageUrl} />}
      <Typography sx={{ whiteSpace: 'pre-wrap' }}>{news?.description}</Typography>

      {news?.pdfUrl && (
        <Stack>
          <iframe title="preview" src={news?.pdfUrl} style={{ height: '100vh' }} />
        </Stack>
      )}

      {news && <EditNewsDialog open={openEditDialog} handleClose={() => setOpenEditDialog(false)} news={news} />}

      <DeleteConfirmationDialog
        open={openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        title="Delete News?"
        onProceed={() => {
          deleteNews(uid)
            .then(() => {
              setOpenDeleteDialog(false);
              navigate('/dashboard/app');
              enqueueSnackbar('News deleted successfully', { variant: 'success' });
            })
            .catch((err) => {
              console.error(err);
              enqueueSnackbar('News deletion failed', { variant: 'error' });
            });
        }}
      />
    </Container>
  );
}
