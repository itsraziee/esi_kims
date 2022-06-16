// material
import { Container } from '@mui/material';
// components
import Page from '../components/Page';
import { ResidentsProfileCard } from '../sections/@dashboard/residentsProfile';


// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

export default function Blog() {
  return (
    <Page title="About">
      <Container sx={{mt: 5, mb: 5}}>
          <ResidentsProfileCard />
      </Container>
    </Page>
  );
}
