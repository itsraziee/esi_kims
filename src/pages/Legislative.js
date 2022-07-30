import { Link as RouterLink } from 'react-router-dom';
// material
import { Container, Typography, Button, Stack } from '@mui/material';
// components
import Page from '../components/Page';
import { LegislativeList } from '../sections/@dashboard/legislative';

// mock
import LEGISLATIVE from '../_mock/legislative';
import Iconify from '../components/Iconify';
import { useAuth } from '../hooks/useAuth';
// ----------------------------------------------------------------------

export default function Legislative() {
  const user = useAuth();
  return (
    <Page title="Legislative">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Barangay Ordinance
          </Typography>
          {user && (
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/legislativeForm"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Ordinance
            </Button>
          )}
        </Stack>

        <LegislativeList legislatives={LEGISLATIVE} />
      </Container>
    </Page>
  );
}
