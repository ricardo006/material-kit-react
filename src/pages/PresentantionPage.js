import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, Grid, Paper, Button } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Betspace',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

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
                    bgcolor: 'transparent',
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
                                    height: 455,
                                    width: '100%',
                                    borderTopLeftRadius: 88,
                                    borderBottomRightRadius: 118,
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
                            m: 2,
                            borderRadius: 5,
                            background: 'linear-gradient(60deg, #001d3d, #082747)',
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            position: 'relative', // Para a imagem poder se posicionar em relação ao Paper
                        }}
                    >
                        <div
                            style={{
                                width: '60%', // Defina a largura da imagem
                                height: '100%', // Faça a altura igual à do Paper
                                position: 'absolute', // Posicione a imagem em relação ao Paper
                                top: 0,
                                right: 0,
                                clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)', // Clip-path para cortar a borda esquerda
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                                alt="Imagem"
                                style={{
                                    width: '100%', // Ajuste o tamanho da imagem conforme necessário
                                    height: '100%',
                                    objectFit: 'cover', // Para cobrir todo o espaço disponível
                                    borderTopRightRadius: 20, // Arredonde a borda superior direita
                                    borderBottomRightRadius: 10, // Arredonde a borda superior direita
                                    zIndex: 1, // Ajuste a ordem de empilhamento da imagem
                                }}
                            />
                        </div>

                        {/* Conteúdo do Paper */}
                        <div>
                            <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', p: 2, borderLeft: 4, borderTopRightRadius: 10, height: 60, color: '#33FFC2', borderRadius: '20px 0px 0 5px' }}>
                                Torne-se Administrador
                            </Typography>
                            <Typography variant="body2" gutterBottom sx={{ textAlign: 'left', p: 2, zIndex: 9999 }}>
                                Seja um administrador e tenha acesso a todas as funcionalidades do sistema.
                                Crie e gerencie eventos, mercados, cotações e muito mais.
                            </Typography>
                            <Button variant="contained" sx={{ mt: 2, color: '#33FFC2', bgcolor: '#000000', borderRadius: 2 }}>
                                Saiba Mais
                            </Button>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{
                        height: 400, m: 2, borderTopRightRadius: 5,
                        background: 'linear-gradient(60deg, #001d3d, #082747)',
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                    }}>
                        <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', p: 2, borderLeft: 4, borderTopRightRadius: 10, height: 60, color: '#edf67d', borderRadius: '20px 0px 0 5px' }}>
                            Seja um Apostador
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box >
    );
}

export default PresentationPage;
