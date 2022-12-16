import { Container, FormControlLabel, Stack, Switch, Typography } from '@mui/material';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Page from '../components/Page';
import { firestore } from '../firebase-init';
import { useAuth } from '../hooks/useAuth';
import { solveBlotter } from '../service/blotter';

export default function ViewBlotterPdf() {
  const user = useAuth();
  const location = useLocation();
  console.log({ location });
  const uid = new URLSearchParams(location.search).get('uid');
  const [solved, setSolved] = useState(false);

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
      setBlotter(doc.data());
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
        </Stack>
        {blotter && (
          <>
            <FormControlLabel
              sx={{ float: 'right' }}
              control={
                <Switch
                  defaultChecked={blotter?.caseType === 'solved'}
                  onChange={(e, checked) => {
                    solveBlotter(uid, checked);
                  }}
                />
              }
              label={blotter?.caseType === 'solved' ? 'Solved' : 'Unsolved'}
            />
            <iframe
              title={blotter?.caseNumber}
              src={blotter?.pdfURL}
              id="iframe"
              style={{ width: '100%', height: '60vh' }}
            />
          </>
        )}
      </Container>
    </Page>
  );
}
