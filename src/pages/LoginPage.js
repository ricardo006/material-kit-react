import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// routes
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';
import background from '../illustrations/banner_login_betspace.png'; // Importe a imagem

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    // backgroundImage: `url(${backgroundImage})`, // Use a imagem importada como valor
    backgroundImage: `url(${background})`,
    backgroundColor: "#002732",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, rgba(51, 255, 194, 0.10) 0%, rgba(51, 255, 194, 0.00) 100%)',
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 580,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(8, 0),
}));


export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate('/register', { replace: true });
  };

  return (
    <>
      <Helmet>
        <title> Login | Betspace </title>
      </Helmet>

      <StyledRoot>

        {mdUp && (
          <Container maxWidth="sm">
            {/* <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography> */}
            {/* <img src="/assets/illustrations/Banner Betspace Sistema.png" alt="login" /> */}
          </Container>
        )}
        {/* 
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        /> */}

        <StyledSection>
          <StyledContent>
            <Typography sx={{ mb: 5, mt: 5, textAlign: 'center', color: '#C6FFEE' }} variant="h4" gutterBottom>
              Login
            </Typography>

            <LoginForm />

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Entre usando as redes sociais:
              </Typography>
            </Divider>

            <Stack direction="row" spacing={2}>
              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
              </Button>
            </Stack>

            <Typography variant="body2" sx={{ mt: 2, color: '#C6FFEE', textAlign: 'center' }}>
              Você não tem uma conta? {''}
            </Typography>

            <Typography variant="body2" sx={{ mt: 2, color: '#C6FFEE', textAlign: 'center' }}>
              <Link sx={{ cursor: 'pointer' }} variant="subtitle2" onClick={handleClickRegister}>
                Cadastre-se
              </Link>
            </Typography>
          </StyledContent>
        </StyledSection>
      </StyledRoot>
    </>
  );
}
