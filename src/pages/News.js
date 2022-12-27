// material
import { Container, Grid, List, Stack, Typography } from '@mui/material';
// components
import { useEffect } from 'react';
import Page from '../components/Page';

import { useAuth } from '../hooks/useAuth';
import { useNews } from '../hooks/useNews';
import { NewsItem } from '../sections/@dashboard/app/NewsUpdateCard';
// ----------------------------------------------------------------------

export default function News() {
  const user = useAuth();

  const newsList = useNews();
  // const [tileViewMode, setTileViewMode] = useState(false);

  useEffect(() => {
    console.log({ news: newsList });
  }, [newsList]);

  return (
    <Page title="News">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            News
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <List dense>
              {newsList?.map((news) => (
                <NewsItem key={news.id} news={news} />
              ))}
            </List>
          </Grid>
          {/* )} */}
        </Grid>
      </Container>
    </Page>
  );
}
