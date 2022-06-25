import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const ListOfPurokImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

PurokCard.propTypes = {
  purok: PropTypes.object,
};

export default function PurokCard({ purok }) {
  const { name, cover, purokname } = purok;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <ListOfPurokImgStyle alt={name} src={cover} />
      </Box>

      <Stack spacing={-1} sx={{ p: 3 }}>
        <Link to="/dashboard/user" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle4" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle7">{purokname}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
