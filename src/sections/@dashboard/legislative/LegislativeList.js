import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import Iconify from '../../../components/Iconify';
import { useAuth } from '../../../hooks/useAuth';

export default function LegislativeList({ series, ordinanceNumber, authors, color = 'primary', title, url, ...props }) {
  const user = useAuth();
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
