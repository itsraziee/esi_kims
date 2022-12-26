import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Container, FormControlLabel, IconButton, Stack, Switch, Typography } from '@mui/material';
import { doc, onSnapshot } from 'firebase/firestore';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Page from '../components/Page';
import { firestore } from '../firebase-init';
import { useAuth } from '../hooks/useAuth';
import { deleteSummon, solveSummon } from '../service/summon';

export default function ViewSummonPdf() {
  const user = useAuth();
  const location = useLocation();
  console.log({ location });
  const uid = new URLSearchParams(location.search).get('uid');
  const [solved, setSolved] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [summon, setSummon] = useState();

  useEffect(() => {
    // getSummon(uid).then((res) => {
    //   console.log({ summonResult: res });
    //   const summonData = res.data();
    //   console.log({ summonData });
    //   setSummon(summonData);
    // });
    const unsub = onSnapshot(doc(firestore, `summon/${uid}`), (doc) => {
      console.log('Current data: ', doc.data());
      setSummon(doc.data());
    });
    return () => unsub;
  }, []);

  useEffect(() => {
    console.log({ summon });
  }, [summon]);

  return (
    <Page title="Summon">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Case number: {summon?.caseNumber}</Typography>

          <Stack direction="row" spacing={1}>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                deleteSummon(uid)
                  .then(() => {
                    enqueueSnackbar('Summon deleted successfully', { variant: 'success' });
                    navigate('/dashboard/summon');
                  })
                  .catch((err) => {
                    console.error(err);
                    enqueueSnackbar('Summon deletion failed', { variant: 'error' });
                  });
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Stack>
        {summon && (
          <>
            <FormControlLabel
              sx={{ float: 'right' }}
              control={
                <Switch
                  defaultChecked={summon?.caseType === 'solved'}
                  onChange={(e, checked) => {
                    solveSummon(uid, checked);
                  }}
                />
              }
              label={summon?.caseType === 'solved' ? 'Solved' : 'Unsolved'}
            />
            <iframe
              title={summon?.caseNumber}
              src={summon?.pdfURL}
              id="iframe"
              style={{ width: '100%', height: '60vh' }}
            />
          </>
        )}
      </Container>
    </Page>
  );
}
