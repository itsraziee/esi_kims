import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { OfficialsCard } from '../sections/@dashboard/officials';

// mock
import POSTS from '../_mock/officials';
import { useAuth } from '../hooks/useAuth';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Officials() {
  const user = useAuth();
  return (
    <Page title="Barangay Officials">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
           Barangay Officials
          </Typography>
          {user && (
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/officialsProfile"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add Official
            </Button>
          )}
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
