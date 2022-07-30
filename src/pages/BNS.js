import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BnsCard } from '../sections/@dashboard/officials';

// mock
import BNSPOSTS from '../_mock/bns';
import { useAuth } from '../hooks/useAuth';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function BNS() {
  const user = useAuth();
  return (
    <Page title="Barangay Nutrition Scholar">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Barangay Nutrition Scholars
          </Typography>
          {user && (
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/BnsCard"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add Official
            </Button>
          )}
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
