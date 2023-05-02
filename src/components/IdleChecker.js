import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
import { IconButton, Tooltip } from '@mui/material';
import { signOut } from 'firebase/auth';
import { useSnackbar } from 'notistack';
import { IdleTimerProvider } from 'react-idle-timer';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { auth } from '../firebase-init';

export default function IdleChecker({ children }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const user = useAuth();

  const onPrompt = () => {
    // Fire a Modal Prompt
    if (user) { 
      signOut(auth).then((res) => {
      enqueueSnackbar('Logged out due to inactivity', {
        variant: 'warning',
        persist: true,
        action: (key) => (
          <>
            <IconButton
              onClick={() => {
                closeSnackbar(key);
                navigate('/login');
              }}
            >
              <Tooltip title="Login">
                <LoginIcon sx={{ color: 'white' }} />
              </Tooltip>
            </IconButton>
            <IconButton
              onClick={() => {
                closeSnackbar(key);
              }}
            >
              <Tooltip>
                <CloseIcon sx={{ color: 'white' }} />
              </Tooltip>
            </IconButton>
          </>
        ),
      });
    });}
  };

  const onIdle = () => {
    // Close Modal Prompt
    // Do some idle action like log out your user
    console.log('user is idle');
  };

  const onActive = (event) => {
    // Close Modal Prompt
    // Do some active action
    console.log('user is active', event);
  };

  const onAction = (event) => {
    // Do something when a user triggers a watched event
  };

  return (
    <IdleTimerProvider
      timeout={1000 * 60 * 5}
      promptTimeout={1000 * 60 * 5}
      onPrompt={onPrompt}
      onIdle={onIdle}
      onActive={onActive}
      onAction={onAction}
    >
      {children}
    </IdleTimerProvider>
  );
}
