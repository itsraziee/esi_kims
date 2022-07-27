
// material
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { LegislativeList } from '../sections/@dashboard/legislative';
// mock
import LEGISLATIVE from '../_mock/legislative';

// ----------------------------------------------------------------------

export default function Legislative() {
  return (
    <Page title="Legislative">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Barangay Ordinance
        </Typography>
        <LegislativeList legislatives={LEGISLATIVE} />
      </Container>
    </Page>
  );
}
