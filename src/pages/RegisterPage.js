import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Iconify from '../components/iconify';
// sections
import { RegisterForm } from '../sections/auth/register';
import background from '../illustrations/banner_login_betspace.png'; // Importe a imagem

// ----------------------------------------------------------------------
const StyledRoot = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        backgroundImage: `url(${background})`,
        backgroundColor: "#002732",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
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


export default function RegisterPage() {
    const mdUp = useResponsive('up', 'md');

    return (
        <>
            <Helmet>
                <title> Cadastre-se | Betspace </title>
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
                            Cadastre-se
                        </Typography>

                        <RegisterForm />

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

                        <Typography variant="body2" sx={{ mb: 5, mt: 5, color: '#C6FFEE' }}>
                            Você não tem uma conta? {''}
                            <Link sx={{ cursor: 'pointer' }} variant="subtitle2" onClick={() => alert('teste cadastro')}>Cadastre-se</Link>
                        </Typography>
                    </StyledContent>
                </StyledSection>

            </StyledRoot>
        </>
    );
}
