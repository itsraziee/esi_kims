import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Avatar, Card, CardContent, CardHeader, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose} disabled>
          Disable
        </MenuItem>
      </Menu>
    </>
  );
}

export default function Account({ accountRole, firstName, lastName, email, password, image }) {
  const [showPassword, setShowPassword] = useState(false);

  console.log({ firstName, lastName });

  return (
    <Card>
      <CardHeader title={accountRole} action={<AccountMenu />} />
      <CardContent>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Avatar src={image} sx={{ height: 100, width: 100 }} />
        </Stack>
        <Typography>{`${firstName} ${lastName}`}</Typography>

        <Typography>{email}</Typography>
        <Stack direction="row" justifyContent="center" alignItems="center">
          {showPassword && <Typography sx={{ flex: 1 }}>{password}</Typography>}
          {!showPassword && <Typography sx={{ flex: 1 }}>{passwordPlaceholder(password)}</Typography>}
          <IconButton
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword && <VisibilityIcon />}
            {!showPassword && <VisibilityOffIcon />}
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}

function passwordPlaceholder(password) {
  const passwordLength = password.length;
  let placeholder = '';

  for (let i = 0; i < passwordLength; i += 1) {
    placeholder += '*';
  }

  return placeholder;
}
