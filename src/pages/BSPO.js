
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useOfficials } from '../hooks/useOfficials';
// components
import Page from '../components/Page';
import { BspoCard, OfficialsCard } from '../sections/@dashboard/officials';

// mock
import BSPOPOSTS from '../_mock/bspo';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function BSPO() {
  const officials = useOfficials('BSPO');

  useEffect(() => {
    console.log({ officials });
  }, [officials]);

  return (
    <Page title="Barangay Service Point Officer">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
          Barangay Service Point Officer
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {officials && officials.map((official) => <OfficialsCard key={official.id} official={official} />)}
        </Grid>
        </Container>
    </Page>
  );
}
