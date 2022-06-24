import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { OfficialsCard, BnsCard, CvoCard, BspoCard } from '../sections/@dashboard/officials';

// mock
import POSTS from '../_mock/officials';
import BNSPOSTS from '../_mock/bns';
import CVOPOSTS from '../_mock/cvo';
import BSPOPOSTS from '../_mock/bspo';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Officials() {
  return (
    <Page title="Officials">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Officials
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            Add Official
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post) => (
            <OfficialsCard key={post.id} post={post}  />
          ))}
        </Grid>
      </Container>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{mt: 5}} gutterBottom>
          Civilian Volunteer Officers (CVOs)
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {CVOPOSTS.map((post) => (
            <CvoCard key={post.id} post={post}  />
          ))}
        </Grid>
      </Container>
      
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{mt: 5}} gutterBottom>
          Barangay Service Point Officers (BSPOs)
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {BSPOPOSTS.map((post) => (
            <BspoCard key={post.id} post={post}  />
          ))}
        </Grid>
      </Container>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{mt: 5}} gutterBottom>
          Barangay Health Worker (BHW)
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {BNSPOSTS.map((post) => (
            <BnsCard key={post.id} post={post}  />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
