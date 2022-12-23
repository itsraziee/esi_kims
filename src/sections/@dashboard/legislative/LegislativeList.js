import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Iconify from '../../../components/Iconify';

export default function LegislativeList({ series, ordinanceNumber, authors, title, url, ...props }) {
  return (
    <ListItem disablePadding sx={{ my: 1 }} {...props}>
      <ListItemButton href={url} sx={{ borderRadius: 1 }}>
        <ListItemIcon>
          <Iconify icon={'clarity:document-solid'} width={24} height={24} />
        </ListItemIcon>
        <ListItemText
          sx={{ opacity: 0.72 }}
          primary={title}
          secondary={
            <>
              {`Ordinance No. ${ordinanceNumber}, Series of ${series} `}
              <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                - {authors}
              </Typography>
            </>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
