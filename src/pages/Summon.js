import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Container, Grid, MenuItem, Select, Stack, Typography } from '@mui/material';
// components
import { useEffect, useState } from 'react';
import Page from '../components/Page';

import Iconify from '../components/Iconify';
import { SummonCard } from '../sections/@dashboard/summon';

import { useAuth } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';
import { useSummons } from '../hooks/useSummons';
// ----------------------------------------------------------------------

export default function Summon() {
  const user = useAuth();
  const profile = useProfile(user?.uid);
  const [solved, setSolved] = useState(false);
  const summons = useSummons(solved);

  useEffect(() => {
    console.log({ summons });
  }, [summons]);

  return (
    <Page title="Summon">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Summon
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
            {user && profile?.accountRole && profile?.accountRole !== 'Captain' && (
              <Grid item>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/dashboard/summonForm"
                  startIcon={<Iconify icon="eva:plus-fill" />}
                >
                  Add Summon
                </Button>
              </Grid>
            )}
          </Grid>
        </Stack>
        <Grid container spacing={3}>
          {summons?.map((summon) => (
            <Grid item xs={12} sm={8} md={3}>
              <SummonCard
                title={summon?.caseNumber}
                url={`/dashboard/viewSummonPdf/?uid=${summon.id}`}
                icon={'clarity:document-solid'}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
