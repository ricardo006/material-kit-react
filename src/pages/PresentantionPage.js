import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, Grid, Paper, Button } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import background from '../illustrations/banner_presentation.png'; // Importe a imagem
import admin from '../illustrations/create-admin.png'; // Importe a imagem
import apostador from '../illustrations/create-apostador.png'; // Importe a imagem
import float1 from '../illustrations/float-1.png'; // Importe a imagem
import float2 from '../illustrations/float-2.png'; // Importe a imagem
import float3 from '../illustrations/float-3.png'; // Importe a imagem

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Betspace',
        imgPath: background,
    }
];

const items = [
    {
        imgPath: admin,
    },
    {
        imgPath: apostador
    },
    {
        imgPath: float1
    },
    {
        imgPath: float2
    },
    {
        imgPath: float3
    }
]

function PresentationPage() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 80,
                    pl: 2,
                    bgcolor: '#000',
                }}
            >
                <Typography sx={{ fontSize: 20, fontWeight: 600 }}>{images[0].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: { xs: 'auto', md: 700 },
                                    width: '100%',
                                    borderTopLeftRadius: { xs: 0, md: 0, sm: 0 },
                                    borderBottomRightRadius: { xs: 0, md: 0, sm: 0 },
                                    display: 'block',
                                    overflow: 'hidden',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            display: 'flex',
                            height: 400,
                            mt: { xs: 0, md: 2, sm: 2 },
                            ml: { xs: 2, md: 2, sm: 0 },
                            mr: { xs: 2, md: 0, sm: 2 },
                            borderRadius: 5,
                            position: 'relative',
                            backgroundColor: '#082747',
                        }}
                    >
                        <Box sx={{ flex: 1, zIndex: 1 }}>
                            <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', fontSize: 20, fontWeight: 800, pt: 2, pl: 1, borderLeft: 4, borderTopRightRadius: 10, height: 60, color: '#33FFC2', borderRadius: '20px 0px 0 5px', zIndex: 1 }}>
                                Torne-se Administrador
                            </Typography>

                            <Typography variant="body2" gutterBottom sx={{ textAlign: 'justify', fontSize: 16, fontWeight: 400, p: 2, zIndex: 1 }}>
                                Seja um administrador e tenha acesso a todas as funcionalidades do sistema. Crie e gerencie eventos, mercados, cotações e muito mais.
                                Tenha acesso a relatórios e estatísticas para melhorar suas vendas e aumentar seus lucros.
                                Saiba mais sobre como se tornar um administrador.
                            </Typography>

                            <Button variant="contained" sx={{ m: 2, color: '#001d3d', justifyContent: 'right', bgcolor: '#33FFC2', borderRadius: 2, zIndex: 1 }}>
                                Quero ser Administrador
                            </Button>
                        </Box>

                        <div
                            style={{
                                width: '50%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)',
                                zIndex: 0,
                            }}
                        >
                            <img
                                src={items[0].imgPath}
                                alt="Imagem"
                                style={{
                                    width: { xs: 'auto', md: '100%', sm: 'auto' },
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                }}
                            />
                        </div>
                    </Paper>

                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            display: 'flex',
                            height: 400,
                            m: 2,
                            borderRadius: 5,
                            position: 'relative',
                            backgroundColor: '#082747',
                        }}
                    >
                        <Box sx={{ flex: 1, zIndex: 1 }}>
                            <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', p: 2, borderLeft: 4, borderTopRightRadius: 10, height: 60, color: '#edf67d', borderRadius: '20px 0px 0 5px' }}>
                                Seja um Apostador
                            </Typography>

                            <Typography variant="body2" gutterBottom sx={{ textAlign: 'justify', fontSize: 16, fontWeight: 400, p: 2, zIndex: 1 }}>
                                Tenha vantagens exclusivas ao se tornar um apostador. Acesse eventos, mercados, cotações e muito mais.
                                Saque rápido e depósito fácil. Aproveite as melhores odds e promoções exclusivas.
                                Indique amigos e ganhe bônus ou comissões por cada indicação. Saiba mais sobre como se tornar um apostador.
                            </Typography>
                        </Box>

                        <div
                            style={{
                                width: '50%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)',
                                zIndex: 0,
                            }}
                        >
                            <img
                                src={items[1].imgPath}
                                alt="Imagem"
                                style={{
                                    width: { xs: 'auto', md: '100%', sm: 'auto' },
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                }}
                            />
                        </div>
                    </Paper>

                </Grid>

                <Grid item xs={12} md={12}>
                    <Typography variant="h6"
                        sx={{
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 800,
                            // background: 'linear-gradient(-60deg, #263238, #94e6cd, #94e6cd, #0132d2)',
                            height: '100%',
                            zIndex: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            color: '#fff',
                            padding: '20px',
                        }}>
                        Conheça as vantagens de ser Administrador
                    </Typography>
                </Grid>

                <Grid item xs={12} md={3} sm={12}>
                    <Paper
                        sx={{
                            display: 'flex',
                            height: 400,
                            m: 2,
                            borderRadius: 5,
                            position: 'relative',
                            backgroundColor: '#082747',
                        }}
                    >
                        <Box sx={{ flex: 1, zIndex: 1 }}>
                            <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', fontSize: 20, fontWeight: 800, pt: 2, pl: 1, borderLeft: 4, borderTopRightRadius: 10, height: 60, color: '#33FFC2', borderRadius: '20px 0px 0 5px', zIndex: 1 }}>
                                Cash Out
                            </Typography>
                            <Typography variant="body2" gutterBottom sx={{ textAlign: 'justify', fontSize: 16, fontWeight: 400, p: 2, zIndex: 1 }}>
                                A <span style={{ color: '#33FFC2', fontWeight: 800 }}>Betspace</span> é diferente, lógico que é! Aqui você tem cash out, saque rápido e depósito fácil.
                                Chega de esperar seu bilhete ser liquidado, aqui você tem cash out e não precisa ficar esperando o cambista fazer transferência bancária.
                            </Typography>
                        </Box>

                        <div
                            style={{
                                width: '50%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)',
                                zIndex: 0,
                            }}
                        >
                            <img
                                src={items[0].imgPath}
                                alt="Imagem"
                                style={{
                                    width: { xs: 'auto', md: '100%', sm: 'auto' },
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                }}
                            />
                        </div>
                    </Paper>

                </Grid>

                <Grid item xs={12} md={3} sm={12}>
                    <Paper
                        sx={{
                            display: 'flex',
                            height: 400,
                            m: 2,
                            borderRadius: 5,
                            position: 'relative',
                            backgroundColor: '#082747',
                        }}
                    >
                        <Box sx={{ flex: 1, zIndex: 1 }}>
                            <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', fontSize: 20, fontWeight: 800, pt: 2, pl: 1, borderLeft: 4, borderTopRightRadius: 10, height: 60, color: '#bbdefb', borderRadius: '20px 0px 0 5px', zIndex: 1 }}>
                                Indicação Premiada
                            </Typography>
                            <Typography variant="body2" gutterBottom sx={{ textAlign: 'justify', fontSize: 16, fontWeight: 400, p: 2, zIndex: 1 }}>
                                Cada apostador ou cambista que indicar um novo apostador para o sistema, ganhará um bônus de acordo com as regras da promoção vigente. Todas suas indicações serão acompanhadas e você poderá acompanhar o status de cada uma delas.
                            </Typography>
                        </Box>

                        <div
                            style={{
                                width: '90%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)',
                                zIndex: 0,
                            }}
                        >
                            <img
                                src={items[2].imgPath}
                                alt="Imagem"
                                style={{
                                    width: { xs: 'auto', md: '100%', sm: 'auto' },
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                }}
                            />
                        </div>
                    </Paper>

                </Grid>

                <Grid item xs={12} md={3} sm={12}>
                    <Paper
                        sx={{
                            display: 'flex',
                            height: 400,
                            m: 2,
                            borderRadius: 5,
                            position: 'relative',
                            backgroundColor: '#082747',
                        }}
                    >
                        <Box sx={{ flex: 1, zIndex: 1 }}>
                            <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', fontSize: 20, fontWeight: 800, pt: 2, pl: 1, borderLeft: 4, borderTopRightRadius: 10, height: 60, color: '#48cae4', borderRadius: '20px 0px 0 5px', zIndex: 1 }}>
                                Diversas Ligas & Campeonatos
                            </Typography>
                            <Typography variant="body2" gutterBottom sx={{ textAlign: 'justify', fontSize: 16, fontWeight: 400, p: 2, zIndex: 1 }}>
                                Diversos campeonatos como Brasileirão, Libertadores, Champions League entre outros. Aproveite as melhores odds e promoções exclusivas.
                                Acompanhe os jogos ao vivo e faça suas apostas com segurança e rapidez. Saiba mais sobre como se tornar um apostador.
                            </Typography>
                        </Box>

                        <div
                            style={{
                                width: '90%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)',
                                zIndex: 0,
                            }}
                        >
                            <img
                                src={items[3].imgPath}
                                alt="Imagem"
                                style={{
                                    width: { xs: 'auto', md: '100%', sm: 'auto' },
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                }}
                            />
                        </div>
                    </Paper>

                </Grid>

                <Grid item xs={12} md={3} sm={12}>
                    <Paper
                        sx={{
                            display: 'flex',
                            height: 400,
                            m: 2,
                            borderRadius: 5,
                            position: 'relative',
                            backgroundColor: '#082747',
                        }}
                    >
                        <Box sx={{ flex: 1, zIndex: 1 }}>
                            <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', fontSize: 20, fontWeight: 800, pt: 2, pl: 1, borderLeft: 4, borderTopRightRadius: 10, height: 60, color: '#ff499e', borderRadius: '20px 0px 0 5px', zIndex: 1 }}>
                                Relatórios & Estatísticas
                            </Typography>
                            <Typography variant="body2" gutterBottom sx={{ textAlign: 'justify', fontSize: 16, fontWeight: 400, p: 2, zIndex: 1 }}>
                                Na <span style={{ color: '#33FFC2', fontWeight: 800 }}>Betspace</span> você tem acesso a relatórios e estatísticas para melhorar suas vendas e aumentar seus lucros.
                                Para você que é administrador, tenha acesso a relatórios e estatísticas para melhorar suas vendas e aumentar seus lucros. Não precisa liquidar o bilhete e efetuar o pagamento manualmente, o sistema faz isso por você.
                            </Typography>
                        </Box>

                        <div
                            style={{
                                width: '90%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)',
                                zIndex: 0,
                            }}
                        >
                            <img
                                src={items[4].imgPath}
                                alt="Imagem"
                                style={{
                                    width: { xs: 'auto', md: '100%', sm: 'auto' },
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                }}
                            />
                        </div>
                    </Paper>

                </Grid>
            </Grid>
        </Box >
    );
}

export default PresentationPage;
