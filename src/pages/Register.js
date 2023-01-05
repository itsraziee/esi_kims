import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Card, Container, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/Logo';
import Page from '../components/Page';
// sections
import CaptainRequired from '../components/auth/CaptainRequired';
import AuthRequired from '../layouts/auth/AuthRequired';
import { RegisterForm } from '../sections/auth/register';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <AuthRequired>
      <CaptainRequired>
        <Page title="Register">
          <RootStyle>
            <HeaderStyle>
              <Logo />
              {/* {smUp && (
              <Typography variant="body2" sx={{ mt: { md: -2 } }}>
                Already have an account? {''}
                <Link variant="subtitle2" component={RouterLink} to="/login">
                  Login
                </Link>
              </Typography>
            )} */}
            </HeaderStyle>

            {mdUp && (
              <SectionStyle>
                <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                  Manage your job with us
                </Typography>
                <img alt="register" src="/static/illustrations/Sign-up.png" />
              </SectionStyle>
            )}

            <Container>
              <ContentStyle>
                <Typography variant="h4" align="center" gutterBottom>
                  Sign up
                </Typography>

                <Typography sx={{ color: 'text.secondary', mb: 5 }}>Enter your details below.</Typography>
                {/* <Stack spacing={1}>
                <Account
                  accountRole="Secretary"
                  firstName="Jessel Marie"
                  lastName="Pelarca"
                  email="pelarcajessel@gmail.com"
                  password="Pass_W0rd!"
                  image="https://firebasestorage.googleapis.com/v0/b/kimanait-ims.appspot.com/o/profiles%2F3jnegTMD64fZRx8uftGobjlCXn02.png?alt=media&token=58199144-aacc-47eb-b557-93d224ceec2d"
                />
                <Account
                  accountRole="Treasurer"
                  firstName="Glen I Love U"
                  lastName="Lecaros"
                  email="artiagaglenmar@gmail.com"
                  password="Raul_143!"
                  image="https://firebasestorage.googleapis.com/v0/b/kimanait-ims.appspot.com/o/profiles%2F3jnegTMD64fZRx8uftGobjlCXn02.png?alt=media&token=58199144-aacc-47eb-b557-93d224ceec2d"
                />
              </Stack> */}
                <RegisterForm />

                {/* <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
                By registering, I agree to KIMS&nbsp;
                <Link underline="always" color="text.primary" href="#">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link underline="always" color="text.primary" href="#">
                  Privacy Policy
                </Link>
                .
              </Typography> */}

                {!smUp && (
                  <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                    Already have an account?{' '}
                    <Link variant="subtitle2" to="/login" component={RouterLink}>
                      Login
                    </Link>
                  </Typography>
                )}
              </ContentStyle>
            </Container>
          </RootStyle>
        </Page>
      </CaptainRequired>
    </AuthRequired>
  );
}
