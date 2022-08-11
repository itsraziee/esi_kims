// material
import { Grid, Container, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useOfficials } from '../hooks/useOfficials';
// components
import Page from '../components/Page';
import { BnsCard, OfficialsCard } from '../sections/@dashboard/officials';

// mock
import BNSPOSTS from '../_mock/bns';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function BNS() {
  const officials = useOfficials('BNS');

  useEffect(() => {
    console.log({ officials });
  }, [officials]);

  return (
    <Page title="Barangay Nutrition Scholar">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Barangay Nutrition Scholars
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {officials && officials.map((official) => <OfficialsCard key={official.id} official={official} />)}
        </Grid>
      </Container>
    </Page>
  );
}
