// material
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { SummonList } from '../sections/@dashboard/summon';
// mock
import SUMMON from '../_mock/summon';

// ----------------------------------------------------------------------

export default function Summon() {
  return (
    <Page title="Summon">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Summon
        </Typography>
        <SummonList summons={SUMMON} />
      </Container>
    </Page>
  );
}
