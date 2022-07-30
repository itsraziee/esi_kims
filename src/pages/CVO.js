import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { OfficialsCard, BnsCard, CvoCard, BspoCard } from '../sections/@dashboard/officials';

// mock
import CVOPOSTS from '../_mock/cvo';
import { useAuth } from '../hooks/useAuth';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function CVO() {
  const user = useAuth();
  return (
    <Page title="Civilian Volunteer Organization">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
          Civilian Volunteer Organization
          </Typography>
          {user && (
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/officialsProfile"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add Official
            </Button>
          )}
        </Stack>

        <Grid container spacing={3}>
          {CVOPOSTS.map((post) => (
            <CvoCard key={post.id} post={post} />
          ))}
        </Grid>
      </Container>
      
    </Page>
  );
}
