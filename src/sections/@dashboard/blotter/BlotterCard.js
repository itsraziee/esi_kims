import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const BlotterImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

BlotterCard.propTypes = {
  blotter: PropTypes.object,
};

export default function BlotterCard({ blotter }) {
  const { title, cover } = blotter;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <BlotterImgStyle alt={title} src={cover} />
      </Box>

      <Stack spacing={-1} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle4" noWrap>
            {title}
          </Typography>
        </Link>
      </Stack>
    </Card>
  );
}
