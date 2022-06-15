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
      <Container sx={{mt: 5, mb: 5}}>
          <AboutCard />
      </Container>
    </Page>
  );
}
