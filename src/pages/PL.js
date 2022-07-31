import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { PurokLeadersCard } from '../sections/@dashboard/officials';

// mock
import PLPOSTS from '../_mock/pl';
import { useAuth } from '../hooks/useAuth';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function PL() {
  const user = useAuth();
  return (
    <Page title="Purok Leaders">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Purok Leaders
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
          {PLPOSTS.map((post) => (
            <PurokLeadersCard key={post.id} post={post} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
