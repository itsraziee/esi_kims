import { Link as RouterLink } from 'react-router-dom';
// material
import { Container, Typography, Button } from '@mui/material';
// components
import Page from '../components/Page';
import { LegislativeList } from '../sections/@dashboard/legislative';

// mock
import LEGISLATIVE from '../_mock/legislative';
import Iconify from '../components/Iconify';

// ----------------------------------------------------------------------

export default function Legislative() {
  return (
    <Page title="Legislative">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Barangay Ordinance
        </Typography>
        <Button
          variant="contained"
          component={RouterLink}
          to="/dashboard/legislativeForm"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          New Legislative
        </Button>
        <LegislativeList legislatives={LEGISLATIVE} />
      </Container>
    </Page>
  );
}
