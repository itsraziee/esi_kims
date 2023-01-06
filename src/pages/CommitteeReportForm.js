// material
import { Container, Stack } from '@mui/material';
// components
import Page from '../components/Page';
import { CommitteeReportFormCard } from '../sections/@dashboard/forms';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function CommitteeReportForm() {
  return (
    <Page title="Committee Report Form">
      <Container sx={{ mt: 5, mb: 5 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <CommitteeReportFormCard />
        </Stack>
      </Container>
    </Page>
  );
}
