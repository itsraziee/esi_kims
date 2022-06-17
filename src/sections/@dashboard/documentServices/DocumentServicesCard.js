import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const DocumentServicesImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

DocumentServicesCard.propTypes = {
  documentService: PropTypes.object,
};

export default function DocumentServicesCard({ documentService }) {
  const { title, cover, year } = documentService;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <DocumentServicesImgStyle alt={title} src={cover} />
      </Box>

      <Stack spacing={-1} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle3" noWrap>
            {title}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle4">{year}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
