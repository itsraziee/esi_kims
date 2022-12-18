// material
import { Container, Stack} from '@mui/material';
// components
import Page from '../components/Page';
import { DisclosureBoardFormCard } from '../sections/@dashboard/forms';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function DisclosureBoardForm() {
  return (
    <Page title="Disclosure Board Form">
      <Container sx={{ mt: 5, mb: 5 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <DisclosureBoardFormCard />
          </Stack>
      </Container>
    </Page>
  );
}
