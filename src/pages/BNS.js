
// material
import { Grid, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { BnsCard } from '../sections/@dashboard/officials';

// mock
import BNSPOSTS from '../_mock/bns';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function BNS() {
  return (
    <Page title="Barangay Nutrition Scholar">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Barangay Nutrition Scholars
          </Typography>
         
        </Stack>

        <Grid container spacing={3}>
          {BNSPOSTS.map((post) => (
            <BnsCard key={post.id} post={post} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
