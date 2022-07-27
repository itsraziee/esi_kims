// material
import { Container, Typography } from '@mui/material';
import AuthRequired from '../layouts/auth/AuthRequired';
// components
import Page from '../components/Page';
import { DocumentServicesList } from '../sections/@dashboard/documentServices';
// mock
import DOCUMENTSERVICES from '../_mock/documentServices';

// ----------------------------------------------------------------------

export default function Legislative() {
  return (
    <AuthRequired>
      <Page title="Document Services">
        <Container>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Document Services
          </Typography>
          <DocumentServicesList documentServices={DOCUMENTSERVICES} />
        </Container>
      </Page>
    </AuthRequired>
  );
}
