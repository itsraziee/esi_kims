import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
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
    <Page title="Officials">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Officials
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            Add Official
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <OfficialsCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
