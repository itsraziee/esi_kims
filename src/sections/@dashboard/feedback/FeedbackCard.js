// @mui
import { Box, Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
// utils

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

FeedbackCard.propTypes = {
  color: PropTypes.string,
  commentSuggestion: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default function FeedbackCard({ commentSuggestion, color = 'primary', sx, url = null, ...other }) {
  return (
    <Card
      sx={{
        display: 'flex',
        // py: 5,
        // boxShadow: 0,
        // textAlign: 'center',
        // color: (theme) => theme.palette[color].darker,
        // bgcolor: (theme) => theme.palette[color].lighter,
        // ...sx,
      }}
      //   {...other}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography color="text.secondary" component="div" align="justify">
            {commentSuggestion}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
