
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { BspoCard } from '../sections/@dashboard/officials';

// mock
import BSPOPOSTS from '../_mock/bspo';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function BSPO() {
  return (
    <Page title="Barangay Service Point Officer">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
          Barangay Service Point Officer
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {BSPOPOSTS.map((post) => (
            <BspoCard key={post.id} post={post} />
          ))}
        </Grid>
        </Container>
    </Page>
  );
}
