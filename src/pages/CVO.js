// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useOfficials } from '../hooks/useOfficials';
// components
import Page from '../components/Page';
import { CvoCard, OfficialsCard } from '../sections/@dashboard/officials';

// mock
import CVOPOSTS from '../_mock/cvo';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function CVO() {
  const officials = useOfficials('CVO');

  useEffect(() => {
    console.log({ officials });
  }, [officials]);

  return (
    <Page title="Civilian Volunteer Organization">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Civilian Volunteer Organization
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {officials && officials.map((official) => <OfficialsCard key={official.id} official={official} />)}
        </Grid>
      </Container>
    </Page>
  );
}
