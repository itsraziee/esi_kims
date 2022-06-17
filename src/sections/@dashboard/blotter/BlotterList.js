import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import BlotterCard from './BlotterCard';

// ----------------------------------------------------------------------

BlotterList.propTypes = {
  blotters: PropTypes.array.isRequired
};

export default function BlotterList({ blotters, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {blotters.map((blotter) => (
        <Grid key={blotter.id} item xs={12} sm={6} md={3}>
          <BlotterCard blotter={blotter} />
        </Grid>
      ))}
    </Grid>
  );
}
