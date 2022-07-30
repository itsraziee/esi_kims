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

export default function DocumentServicesCard({ url = null, documentService }) {
  const { title, cover } = documentService;

  return (
    <Link sx={{ textDecoration: 'none' }} href={url} color="#7A0C2E">
      <Card>
        <Box sx={{ pt: '100%', position: 'relative' }}>
          <DocumentServicesImgStyle alt={title} src={cover} />
        </Box>

        <Stack spacing={-1} sx={{ p: 3 }}>
            <Typography variant="subtitle4" noWrap>
              {title}
            </Typography>
        </Stack>
      </Card>
    </Link>
  );
}
