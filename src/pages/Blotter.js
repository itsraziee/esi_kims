// material
import { Container, Typography } from '@mui/material';
import AuthRequired from '../layouts/auth/AuthRequired';
// components
import Page from '../components/Page';
import { BlotterList } from '../sections/@dashboard/blotter';
// mock
import BLOTTER from '../_mock/blotter';

// ----------------------------------------------------------------------

export default function Blotter() {
  return (
    <AuthRequired>
      <Page title="Blotter">
        <Container>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Blotter
          </Typography>
          <BlotterList blotters={BLOTTER} />
        </Container>
      </Page>
    </AuthRequired>
  );
}
