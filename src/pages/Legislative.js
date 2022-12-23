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
import GridViewIcon from '@mui/icons-material/GridView';
// ----------------------------------------------------------------------

export default function Legislative() {
  const user = useAuth();
  const VIEW_MODES = {
    tile: "TILE",
    list: "LIST",
  }

  const legislatives = useLegislatives();
  const [viewMode, setViewMode] = useState(VIEW_MODES.tile);

  useEffect(() => {
    console.log({ legislatives });
  }, [legislatives]);

  return (
    <Page title="Legislative">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Ordinances
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">View Mode</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="View Mode"
              onChange={handleChange}
            >
              <MenuItem value={20}><GridViewIconList/> Tile</MenuItem>
              <MenuItem value={10}>Tile</MenuItem>
            </Select>
          </FormControl>
          {user && (
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/legislativeForm"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add Ordinance
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
