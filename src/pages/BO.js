
// material
import { Grid, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { OfficialsCard } from '../sections/@dashboard/officials';

// mock
import POSTS from '../_mock/officials';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Officials() {
  return (
    <Page title="Barangay Officials">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
           Barangay Officials
          </Typography>
         
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post) => (
            <OfficialsCard key={post.id} post={post} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
