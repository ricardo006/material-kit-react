import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
import useResponsive from '../hooks/useResponsive';
import Logo from '../components/logo';
import Iconify from '../components/iconify';
import { LoginForm } from '../sections/auth/login';
import background from '../illustrations/betspace_tree.png';

// Certifique-se de importar useEffect corretamente
// Se você ainda está enfrentando problemas, certifique-se de que o React está instalado corretamente em seu projeto.
// Você pode reinstalar o React usando o comando: npm install react
// ou se estiver usando yarn: yarn add react
// Certifique-se de estar usando uma versão compatível do React.

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
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

const FullWidthButton = styled(Button)({
  width: '100%', // Garante que o botão ocupa 100% da largura
  padding: 0, marginLeft: 0
});

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate('/register', { replace: true });
  };

  const responseGoogle = (response) => {
    console.log('Resposta do Google:', response);
    // Aqui você pode manipular os dados do perfil do usuário, como armazenar no estado do componente ou enviá-los para o servidor.
  };

  useEffect(() => {
    // A função `responseGoogle` será chamada sempre que o componente for montado

    // Se você precisar de uma lógica específica quando o componente for desmontado, você pode retornar uma função de limpeza do useEffect
    return () => {
      // Lógica de limpeza, se necessário
    };
  }, []); // O array de dependências vazio [] significa que o useEffect será executado apenas uma vez, quando o componente for montado

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
        <StyledSection>
          <StyledContent>
            <Typography sx={{ mb: 5, mt: 5, textAlign: 'center', color: '#33FFC2' }} variant="h4" gutterBottom>
              Login
            </Typography>

            <LoginForm />

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Entre usando as redes sociais:
              </Typography>
            </Divider>

            <Stack spacing={2}>

              <GoogleLogin
                clientId="949134044481-8oa9g1ji7huvs252t7s7lbcdln2imips.apps.googleusercontent.com"
                buttonText="Login com Google"
                onSuccess={responseGoogle}
              />

              <FullWidthButton variant="outlined" color="inherit">
                <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
              </FullWidthButton>

              <FullWidthButton variant="outlined" color="inherit">
                <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
              </FullWidthButton>
            </Stack>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="body2" sx={{ mt: 2, color: '#C6FFEE', textAlign: 'left' }}>
                Não tem uma conta? {''}
              </Typography>

              <Typography variant="body2" sx={{ mt: 2, color: '#C6FFEE', textAlign: 'right', ml: 1 }}>
                <Link
                  sx={{ cursor: 'pointer', textDecoration: 'none', color: '#33FFC2' }}
                  variant="subtitle2"
                  onClick={handleClickRegister}
                >
                  Cadastre-se
                </Link>
              </Typography>
            </Box>
          </StyledContent>
        </StyledSection>
      </StyledRoot>
    </>
  );
}
