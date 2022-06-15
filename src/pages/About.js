// material
import { Container, Stack } from '@mui/material';
// components
import Page from '../components/Page';
import { AboutCard } from '../sections/@dashboard/about';


// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function Blog() {
  return (
    <Page title="About">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <AboutCard />
        </Stack>
      </Container>
    </Page>
  );
}
