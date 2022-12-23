import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Iconify from '../../../components/Iconify';

LegislativeList.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function LegislativeList({ series, ordinanceNumber, authors, color = 'primary', title, url, ...props }) {
  return (
    <ListItem disablePadding sx={{ my: 1 }} {...props}>
      <ListItemButton
        href={url}
        sx={{
          borderRadius: 1,
          boxShadow: 0,
          color: (theme) => theme.palette[color].darker,
          bgcolor: (theme) => theme.palette[color].lighter,
        }}
      >
        <ListItemIcon>
          {/* <IconWrapperStyle
            sx={{
              mt: '5',
              color: (theme) => theme.palette[color].dark,
              backgroundImage: (theme) =>
                `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
                  theme.palette[color].dark,
                  0.24
                )} 100%)`,
            }}
          > */}
            <Iconify icon={'clarity:document-solid'} width={24} height={24} />
          {/* </IconWrapperStyle> */}
        </ListItemIcon>
        <ListItemText
          primary={
            <>
              <Typography variant="subtitle4">
                {`Ordinance No. ${ordinanceNumber}, Series of ${series}`}: {title}
              </Typography>
            </>
          }
          secondary={
            <>
              <Typography sx={{ display: 'flex', opacity: 0.72 }} component="span" variant="subtitle8">
                {authors}
              </Typography>
            </>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
