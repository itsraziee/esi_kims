// material
import { Container, Stack } from '@mui/material';
// components
import Page from '../components/Page';
import RequestDocumentFormCard from '../sections/@dashboard/forms/RequestDocumentFormCard';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function RequestDocumentForm() {
  return (
    <Page title="Document Request Form">
      <Container sx={{ mt: 5, mb: 5 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <RequestDocumentFormCard />
        </Stack>
      </Container>
    </Page>
  );
}
