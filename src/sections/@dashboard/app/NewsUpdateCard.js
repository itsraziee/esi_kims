import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Button, Card, CardHeader, Divider, Link, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
// utils
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { fToNow } from '../../../utils/formatTime';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { useAuth } from '../../../hooks/useAuth';
// ----------------------------------------------------------------------

NewsUpdateCard.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function NewsUpdateCard({ title, subheader, list, ...other }) {
  const user = useAuth();
  return (
    <Card {...other}>
      <Stack direction="row" justifyContent="space-between">
        <CardHeader title={title} subheader={subheader} />
        {user && (
          <Button
            sx={{ margin: 3 }}
            variant="contained"
            component={RouterLink}
            to="/dashboard/NewsUpdateForm"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Add News
          </Button>
        )}
      </Stack>
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list?.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
          View all
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
    title: PropTypes.string,
  }),
};

function NewsItem({ news }) {
  const { imageUrl, title, description, updatedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {imageUrl && (
        <Box
          component="img"
          alt={title}
          src={imageUrl}
          sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
        />
      )}
      {!imageUrl && (
        <NewspaperIcon color="primary" alt={title} sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }} />
      )}

      <Box sx={{ flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" noWrap>
          {title}
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>

      <Typography variant="caption" sx={{ pr: 3, color: 'text.secondary' }}>
        {fToNow(updatedAt.toDate())}
      </Typography>
    </Stack>
  );
}
