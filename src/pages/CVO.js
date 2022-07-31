
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { CvoCard } from '../sections/@dashboard/officials';

// mock
import CVOPOSTS from '../_mock/cvo';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function CVO() {
  return (
    <Page title="Civilian Volunteer Organization">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
          Civilian Volunteer Organization
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {CVOPOSTS.map((post) => (
            <CvoCard key={post.id} post={post} />
          ))}
        </Grid>
      </Container>
      
    </Page>
  );
}
