// material
import { Grid,  Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { PurokLeadersCard } from '../sections/@dashboard/officials';

// mock
import PLPOSTS from '../_mock/pl';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function PL() {
  return (
    <Page title="Purok Leaders">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Purok Leaders
          </Typography>
        
        </Stack>

        <Grid container spacing={3}>
          {PLPOSTS.map((post) => (
            <PurokLeadersCard key={post.id} post={post} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
