import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Container, Grid, MenuItem, Select, Stack, Typography } from '@mui/material';
// components
import { useEffect, useState } from 'react';
import Page from '../components/Page';

import Iconify from '../components/Iconify';
import { BlotterCard } from '../sections/@dashboard/blotter';

import { useAuth } from '../hooks/useAuth';
import { useBlotters } from '../hooks/useBlotters';
// ----------------------------------------------------------------------

export default function Blotter() {
  const user = useAuth();
  const [solved, setSolved] = useState(false);
  const blotters = useBlotters(solved);

  useEffect(() => {
    console.log({ blotters });
  }, [blotters]);

  return (
    <Page title="Blotter">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Blotter
          </Typography>
          <Grid container spacing={1} direction="row" justifyContent="flex-end" alignItems="center">
            <Grid item>
              <Select
                size="small"
                value={solved}
                onChange={(e) => {
                  setSolved(e.target.value);
                }}
              >
                <MenuItem value={false}>Unsolved</MenuItem>
                <MenuItem value>Solved</MenuItem>
              </Select>
            </Grid>
            {user && (
              <Grid item>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/dashboard/blotterForm"
                  startIcon={<Iconify icon="eva:plus-fill" />}
                >
                  Add Blotter
                </Button>
              </Grid>
            )}
          </Grid>
        </Stack>
        <Grid container spacing={3}>
          {blotters?.map((blotter) => (
            <Grid item xs={12} sm={8} md={3}>
              <BlotterCard
                title={blotter?.caseNumber}
                url={`/dashboard/viewBlotterPdf/?uid=${blotter.id}`}
                icon={'clarity:document-solid'}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
