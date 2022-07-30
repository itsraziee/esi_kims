// material
import { Container, Typography } from '@mui/material';
import AuthRequired from '../layouts/auth/AuthRequired';
// components
import Page from '../components/Page';
import { SummonList } from '../sections/@dashboard/summon';
// mock
import SUMMON from '../_mock/summon';

// ----------------------------------------------------------------------

export default function Summon() {
  return (
    <AuthRequired>
      <Page title="Summon">
        <Container>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Summon
          </Typography>
          <SummonList summons={SUMMON} />
        </Container>
      </Page>
    </AuthRequired>
  );
}
