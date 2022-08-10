// material
import { Grid, Container, Stack, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// components
import Page from '../components/Page';
import { BhwCard } from '../sections/@dashboard/officials';

// mock
import BHWPOSTS from '../_mock/bhw';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function BHW() {
  return (
    <Page title="Barangay Health Worker">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Barangay Health Worker
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {BHWPOSTS.map((post) => (
            <BhwCard key={post.id} post={post} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
