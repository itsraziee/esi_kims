import { useLocation } from 'react-router-dom';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import { useEffect, useState } from 'react';
import Page from '../components/Page';

import { useAuth } from '../hooks/useAuth';
import { getLegislative } from '../service/legislative';
// ----------------------------------------------------------------------

export default function ViewLegislative() {
  const user = useAuth();
  const location = useLocation();
  console.log({ location });
  const uid = new URLSearchParams(location.search).get('uid');
  console.log({ uid });

  const [legislative, setLegislative] = useState();

  useEffect(() => {
    getLegislative(uid).then((res) => {
      console.log({ legislativeResult: res });
      const legislativeData = res.data();
      console.log({ legislativeData });
      setLegislative(legislativeData);
    });
  }, []);

  useEffect(() =>   {
    console.log({ legislative });
  }, [legislative]);

  return (
    <Page title="Legislative">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">{legislative?.title}</Typography>
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
    </Page>
  );
}
