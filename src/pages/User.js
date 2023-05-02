import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import AuthRequired from '../layouts/auth/AuthRequired';
import PopulationTable from '../components/population/PopulationTable';

export default function User() {
  const location = useLocation();
  const purok = new URLSearchParams(location.search).get('purok');
  const purokList = ['1', '2', '3a', '3b', '4', '5', '6', '7', '8', '9', '10A', '11B', '12', '13'];
  return (
    <AuthRequired>
      <Typography variant="h4" sx={{ mb: 5 }}>
        {purokList.includes(purok) ? `Purok ${purok.toUpperCase()}` : 'All Residents'}
      </Typography>
      <PopulationTable purok={purok} />
    </AuthRequired>
  );
}
