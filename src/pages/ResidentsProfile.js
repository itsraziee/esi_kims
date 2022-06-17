// material
import { Container, Stack} from '@mui/material';
// components
import Page from '../components/Page';
import { ResidentsProfileCard } from '../sections/@dashboard/residentsProfile';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function ResidentsProfile() {
  return (
    <Page title="Residents Profile">
      <Container sx={{ mt: 5, mb: 5 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <ResidentsProfileCard />
          </Stack>
      </Container>
    </Page>
  );
}
