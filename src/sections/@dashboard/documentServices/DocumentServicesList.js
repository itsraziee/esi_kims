import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import DocumentServicesCard from './DocumentServicesCard';

// ----------------------------------------------------------------------

DocumentServicesList.propTypes = {
  documentServices: PropTypes.array.isRequired
};

export default function DocumentServicesList({ documentServices, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {documentServices.map((documentService) => (
        <Grid key={documentService.id} item xs={12} sm={6} md={3}>
          <DocumentServicesCard documentService={documentService} />
        </Grid>
      ))}
    </Grid>
  );
}
