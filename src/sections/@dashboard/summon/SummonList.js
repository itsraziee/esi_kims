import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import SummonCard from './SummonCard';

// ----------------------------------------------------------------------

SummonList.propTypes = {
  summons: PropTypes.array.isRequired
};

export default function SummonList({ summons, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {summons.map((summon) => (
        <Grid key={summon.id} item xs={12} sm={6} md={3}>
          <SummonCard summon={summon} />
        </Grid>
      ))}
    </Grid>
  );
}
