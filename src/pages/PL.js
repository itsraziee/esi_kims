// material
import { Grid,  Container, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useOfficials } from '../hooks/useOfficials';
// components
import Page from '../components/Page';
import { OfficialsCard, PurokLeadersCard } from '../sections/@dashboard/officials';

// mock
import PLPOSTS from '../_mock/pl';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function PL() {
  const officials = useOfficials('PL');

  useEffect(() => {
    console.log({ officials });
  }, [officials]);

  return (
    <Page title="Purok Leaders">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Purok Leaders
          </Typography>
        
        </Stack>

        <Grid container spacing={3}>
          {officials && officials.map((official) => <OfficialsCard key={official.id} official={official} />)}
        </Grid>
      </Container>
    </Page>
  );
}
