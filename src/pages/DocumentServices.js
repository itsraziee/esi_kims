// material
import { Container, Typography, Grid } from '@mui/material';
// components
import Page from '../components/Page';
import { DocumentServicesWidget } from '../sections/@dashboard/documentServices';
import NonAuthRequired from '../layouts/auth/NonAuthRequired';

// ----------------------------------------------------------------------

export default function DocumentServices() {
  return (
    <NonAuthRequired>
    <Page title="DocumentServices">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
        Document Services
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <DocumentServicesWidget
              title="Barangay Certification"
              total={0}
              color="warning"
              url="/dashboard/bo"
              icon={'ion:documents'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DocumentServicesWidget
              title="Barangay Death Certification"
              total={0}
              color="warning"
              url="/dashboard/bns"
              icon={'ion:documents'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DocumentServicesWidget
              title="Barangay Birth Certification"
              total={0}
              color="warning"
              url="/dashboard/bspo"
              icon={'ion:documents'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DocumentServicesWidget
              title="Barangay Clearance"
              total={0}
              color="warning"
              url="/dashboard/cvo"
              icon={'ion:documents'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DocumentServicesWidget
              title="Certificate of Indigency"
              total={0}
              color="warning"
              url="/dashboard/bhw"
              icon={'ion:documents'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DocumentServicesWidget
              title="Certificate of Residency"
              total={0}
              color="warning"
              url="/dashboard/pl"
              icon={'ion:documents'}
            />
          </Grid>
        </Grid>
      </Container>
      </Page>
      </NonAuthRequired>
  );
}
