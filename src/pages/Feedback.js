// material
import { Container, Grid, Stack, Typography } from '@mui/material';
// components
import { useEffect } from 'react';
import Page from '../components/Page';

import NotTreasurer from '../components/auth/NotTreasurer';
import { useAuth } from '../hooks/useAuth';
import { useFeedbacks } from '../hooks/useFeedbacks';
import { useProfile } from '../hooks/useProfile';
import { FeedbackCard } from '../sections/@dashboard/feedback';
// ----------------------------------------------------------------------

export default function Feedback() {
  const user = useAuth();
  const profile = useProfile(user?.uid);
  const feedbacks = useFeedbacks();
  useEffect(() => {
    console.log({ feedbacks });
  }, [feedbacks]);
  return (
    <NotTreasurer>
      <Page title="Received Feedback ">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" sx={{ mb: -1 }}>
              Received Feedback
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {feedbacks?.map((feedback) => (
              <Grid item xs={12} sm={8} md={3}>
                <FeedbackCard commentSuggestion={feedback?.commentSuggestion} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Page>
    </NotTreasurer>
  );
}
