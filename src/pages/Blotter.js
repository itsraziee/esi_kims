// material
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { BlotterList } from '../sections/@dashboard/blotter';
// mock
import BLOTTER from '../_mock/blotter';

// ----------------------------------------------------------------------

export default function Blotter() {
  return (
    <Page title="Blotter">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Summon
        </Typography>
        <BlotterList blotters={BLOTTER} />
      </Container>
    </Page>
  );
}
