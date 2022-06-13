import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import PurokCard from './ListOfPurokCard';

// ----------------------------------------------------------------------

ListOfPurokList.propTypes = {
  puroks: PropTypes.array.isRequired
};

export default function ListOfPurokList({ puroks, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {puroks.map((purok) => (
        <Grid key={purok.id} item xs={12} sm={6} md={3}>
          <PurokCard purok={purok} />
        </Grid>
      ))}
    </Grid>
  );
}
