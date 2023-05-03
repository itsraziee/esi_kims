import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Container, Grid, List, Stack, Typography } from '@mui/material';
// components
import { useEffect } from 'react';
import Page from '../components/Page';

import Iconify from '../components/Iconify';

import { useAuth } from '../hooks/useAuth';
import { useCommitteeReports } from '../hooks/useCommitteeReports';
import { CommitteeReportList } from '../sections/@dashboard/committeeReports';
// ----------------------------------------------------------------------

export default function CommitteeReport() {
  const user = useAuth();

  const committeeReports = useCommitteeReports();

  useEffect(() => {
    console.log({ committeeReports });
  }, [committeeReports]);

  return (
    <Page title="Committee Reports">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: -3 }}>
            Committee Reports
          </Typography>

          <Stack direction="row" spacing={1}>
            {user && (
              <Button
                variant="contained"
                component={RouterLink}
                to="/dashboard/committeeReportForm"
                startIcon={<Iconify icon="eva:plus-fill" />}
              >
                Add Committee Report
              </Button>
            )}
          </Stack>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <List dense>
              {committeeReports?.map((committeeReport) => (
                <CommitteeReportList
                  type={committeeReport?.type}
                  committeeReportNumber={committeeReport?.committeeReportNumber}
                  series={committeeReport.series}
                  subject={committeeReport.subject}
                  date={committeeReport.date}
                  submittedBy={committeeReport?.submittedBy}
                  url={`/dashboard/viewCommitteeReport/?uid=${committeeReport.id}`}
                  key={committeeReport.id}
                />
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
