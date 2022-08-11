// material
import { Grid, Container, Stack, Typography } from '@mui/material';
// components
import { useEffect } from 'react';
import { useOfficials } from '../hooks/useOfficials';
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { OfficialsCard } from '../sections/@dashboard/officials';

// mock
import POSTS from '../_mock/officials';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Officials() {
  const officials = useOfficials('official');

  useEffect(() => {
    console.log({ officials });
  }, [officials]);

  return (
    <Page title="Barangay Officials">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Barangay Officials
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {officials && officials.map((official) => <OfficialsCard key={official.id} official={official} />)}
        </Grid>
      </Container>
    </Page>
  );
}
