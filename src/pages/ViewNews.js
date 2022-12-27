import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Container, IconButton, Stack, Typography } from '@mui/material';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { firestore } from '../firebase-init';

export default function ViewNews() {
  const location = useLocation();
  const uid = new URLSearchParams(location.search).get('uid');
  const [news, setNews] = useState();

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
        <Stack direction="row" alignItems="center" justifyContent="center">
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
      <img alt={news?.title} src={news?.imageUrl} />
      <Typography>{news?.description}</Typography>

      <Stack>
        <iframe title="preview" src={news?.pdfUrl} style={{ height: '100vh' }} />
      </Stack>
    </Container>
  );
}
