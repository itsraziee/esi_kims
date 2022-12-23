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
