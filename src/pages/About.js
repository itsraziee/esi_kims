// material
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { AboutCard } from '../sections/@dashboard/about';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function About() {
  return (
    <Page title="About">
      <Container sx={{ mt: 5, mb: 5 }}>
        <Typography variant="h4" sx={{ mb: 5, mt: 4 }}>
          The History of Barangay Kimanait
        </Typography>
        <AboutCard />
      </Container>
    </Page>
  );
}
