// material
import { Container, Stack} from '@mui/material';
// components
import Page from '../components/Page';
import { BlotterUnresolvedFormCard } from '../sections/@dashboard/forms';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function BlotterUnresolvedForm() {
  return (
    <Page title="Blotter Form">
      <Container sx={{ mt: 5, mb: 5 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <BlotterUnresolvedFormCard />
          </Stack>
      </Container>
    </Page>
  );
}