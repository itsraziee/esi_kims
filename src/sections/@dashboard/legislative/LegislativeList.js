import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import LegislativeCard from './LegislativeCard';

// ----------------------------------------------------------------------

LegislativeList.propTypes = {
  legislatives: PropTypes.array.isRequired
};

export default function LegislativeList({ legislatives, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {legislatives.map((legislative) => (
        <Grid key={legislative.id} item xs={12} sm={6} md={3}>
          <LegislativeCard legislative={legislative} />
        </Grid>
      ))}
    </Grid>
  );
}
