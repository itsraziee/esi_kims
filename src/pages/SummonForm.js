// material
import { Container, Stack } from '@mui/material';
// components
import Page from '../components/Page';
import { SummonFormCard } from '../sections/@dashboard/forms';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function SummonForm() {
  return (
    <Page title="Summon Form">
      <Container sx={{ mt: 5, mb: 5 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <SummonFormCard />
        </Stack>
      </Container>
    </Page>
  );
}
