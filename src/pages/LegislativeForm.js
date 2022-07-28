// material
import { Container, Stack} from '@mui/material';
// components
import Page from '../components/Page';
import { LegislativeFormCard } from '../sections/@dashboard/forms';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function LegislativeForm() {
  return (
    <Page title="Legislative Form">
      <Container sx={{ mt: 5, mb: 5 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <LegislativeFormCard />
          </Stack>
      </Container>
    </Page>
  );
}
