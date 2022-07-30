import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BspoCard } from '../sections/@dashboard/officials';

// mock
import BSPOPOSTS from '../_mock/bspo';
import { useAuth } from '../hooks/useAuth';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function BSPO() {
  const user = useAuth();
  return (
    <Page title="Barangay Service Point Officer">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
          Barangay Service Point Officer
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
          {BSPOPOSTS.map((post) => (
            <BspoCard key={post.id} post={post} />
          ))}
        </Grid>
        </Container>
    </Page>
  );
}
