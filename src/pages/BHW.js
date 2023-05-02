// material
import { Grid, Container, Stack, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// components
import { useEffect } from 'react';
import Page from '../components/Page';
import { BhwCard, OfficialsCard } from '../sections/@dashboard/officials';


import { useOfficials } from '../hooks/useOfficials';


// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function BHW() {
  const officials = useOfficials('BHW');

  useEffect(() => {
    console.log({ officials });
  }, [officials]);

  return (
    <Page title="Barangay Health Worker">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Barangay Health Worker
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {officials && officials.map((official) => <OfficialsCard key={official.id} official={official} />)}
        </Grid>
      </Container>
    </Page>
  );
}
