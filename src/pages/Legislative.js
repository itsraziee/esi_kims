import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
// components
import { useEffect } from 'react';
import Page from '../components/Page';

import Iconify from '../components/Iconify';
import { LegislativeCard } from '../sections/@dashboard/legislative';

import { useAuth } from '../hooks/useAuth';
import { useLegislatives } from '../hooks/useLegislatives';
// ----------------------------------------------------------------------

export default function Legislative() {
  const user = useAuth();

  const legislatives = useLegislatives();

  useEffect(() => {
    console.log({ legislatives });
  }, [legislatives]);

  return (
    <Page title="Legislative">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Legislative
          </Typography>
          {user && (
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/legislativeForm"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add Legislative
            </Button>
          )}
        </Stack>
        <Grid container spacing={3}>
          {legislatives?.map((legislative) => {
            return (
              <Grid item xs={12} sm={8} md={3}>
                <LegislativeCard
                  title={legislative.title}
                  url={`/dashboard/viewlegislative/?uid=${legislative.id}`}
                  icon={'clarity:document-solid'}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Page>
  );
}
