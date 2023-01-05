import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Iconify from '../../../components/Iconify';
import { useAuth } from '../../../hooks/useAuth';

export default function CommitteeReportList({
  subject,
  from,
  date,
  committeeReportNumber,
  color = 'primary',
  url,
  ...props
}) {
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
                {`Committee Report No. ${committeeReportNumber}, Date: ${date}`}: {subject}
              </Typography>
            </>
          }
          secondary={
            <>
              <Typography sx={{ display: 'flex', opacity: 0.72 }} component="span" variant="subtitle8">
                {from}
              </Typography>
            </>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
