import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material'; // Import ArrowBack
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
// hooks
import useResponsive from '../hooks/useResponsive';
// routes
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { ForgotPasswordForm } from '../sections/auth/forgotpassword';
import background from '../illustrations/betspace_new.png'; // Import the image

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

const StyledBackLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: '#C6FFEE',
    cursor: 'pointer',
    textDecoration: 'none',
    marginTop: theme.spacing(4),
}));

export default function ForgotPasswordPage() {
    const mdUp = useResponsive('up', 'md');
    const navigate = useNavigate();

    const handleClickRegister = () => {
        navigate('/login', { replace: true });
    };

    return (
        <>
            <Helmet>
                <title>Esqueci minha senha | Betspace</title>
            </Helmet>

            <StyledRoot>
                {mdUp && (
                    <Container maxWidth="sm">
                        {/* Content for larger screens */}
                    </Container>
                )}

                <StyledSection>
                    <StyledContent>
                        <StyledBackLink variant="body2" onClick={handleClickRegister}>
                            <ArrowBackTwoToneIcon /> Ir para Login
                        </StyledBackLink>

                        <Typography sx={{ mb: 5, mt: 5, textAlign: 'center', color: '#C6FFEE' }} variant="h4" gutterBottom>
                            Recuperação de Senha
                        </Typography>

                        <ForgotPasswordForm />

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
