// material
import { Container, Stack } from '@mui/material';
// components
import Page from '../components/Page';
import { NewsUpdateFormCard } from '../sections/@dashboard/forms';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function NewsUpdateForm() {
  return (
    <Page title="News Update Form">
      <Container sx={{ mt: 5, mb: 5 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <NewsUpdateFormCard />
        </Stack>
      </Container>
    </Page>
  );
}
