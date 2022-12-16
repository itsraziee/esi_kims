import { useLocation } from 'react-router-dom';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import { useEffect, useState } from 'react';
import Page from '../components/Page';

import { useAuth } from '../hooks/useAuth';
import { getDisclosureBoard } from '../service/disclosureBoard';
// ----------------------------------------------------------------------

export default function ViewDisclosureBoard() {
  const user = useAuth();
  const location = useLocation();
  console.log({ location });
  const uid = new URLSearchParams(location.search).get('uid');
  console.log({ uid });

  const [disclosureBoard, setDisclosureBoard] = useState();

  useEffect(() => {
    getDisclosureBoard(uid).then((res) => {
      console.log({ disclosureBoardResult: res });
      const disclosureBoardData = res.data();
      console.log({ disclosureBoardData });
      setDisclosureBoard(disclosureBoardData);
    });
  }, []);

  useEffect(() => {
    console.log({ disclosureBoard });
  }, [disclosureBoard]);

  return (
    <Page title="Disclosure Board">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">{disclosureBoard?.title}</Typography>
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
    </Page>
  );
}
