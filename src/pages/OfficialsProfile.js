// material
import { Container, Stack } from '@mui/material';
import AuthRequired from '../layouts/auth/AuthRequired';
// components
import Page from '../components/Page';
import { OfficialsFormCard } from '../sections/@dashboard/officialsForms';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function officialsProfile() {
  return (
    <AuthRequired>
      <Page title="Officials Profile">
        <Container sx={{ mt: 5, mb: 5 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <OfficialsFormCard />
          </Stack>
        </Container>
      </Page>
    </AuthRequired>
  );
}
