import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BspoCard } from '../sections/@dashboard/officials';

// mock
import BHWPOSTS from '../_mock/bhw';
import { useAuth } from '../hooks/useAuth';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function BHW() {
  const user = useAuth();
  return (
    <Page title="Barangay Health Worker">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
          Barangay Health Worker
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
          {BHWPOSTS.map((post) => (
            <bhwCard key={post.id} post={post} />
          ))}
        </Grid>
        </Container>
    </Page>
  );
}
