// material
import { Container, Stack} from '@mui/material';
// components
import Page from '../components/Page';
import { SummonUnresolvedFormCard } from '../sections/@dashboard/forms';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function SummonUnresolvedForm() {
  return (
    <Page title="Summon Form">
      <Container sx={{ mt: 5, mb: 5 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <SummonUnresolvedFormCard />
          </Stack>
      </Container>
    </Page>
  );
}
