// material
import { Container, Stack } from '@mui/material';
// components
import Page from '../components/Page';
import { AboutCard } from '../sections/@dashboard/about';


// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function About() {
  return (
    <Page title="About">
      <Container sx={{ mt: 5, mb: 5 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <AboutCard />
          </Stack>
      </Container>
    </Page>
  );
}
