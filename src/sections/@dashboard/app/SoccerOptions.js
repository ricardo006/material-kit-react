import React from 'react';
import { useNavigate } from 'react-router-dom';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import AlbumTwoToneIcon from '@mui/icons-material/AlbumTwoTone';
import {
    Button,
    Container,
    Grid
} from '@mui/material';

export default function SoccerOptions() {
    const navigate = useNavigate();

    const handleClickProxJogos = () => {
        navigate('proximosjogos', { replace: true });
    };

    const handleClickAoVivo = () => {
        navigate('aovivo', { replace: true })
    }

    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <Grid spacing={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <Button
                                        variant="outlined"
                                        startIcon={<AccessTimeTwoToneIcon />}
                                        sx={{
                                            width: { xs: 'calc(50% - 8px)', sm: 'calc(50% - 8px)' },
                                            mb: 2,
                                        }}
                                        onClick={handleClickProxJogos}
                                    >
                                        Próximos Jogos
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        startIcon={<AlbumTwoToneIcon />}
                                        sx={{
                                            width: { xs: 'calc(50% - 8px)', sm: 'calc(50% - 8px)' },
                                            mb: 2,
                                            ml: { xs: 2, sm: 2, md: 2 },
                                        }}
                                        onClick={handleClickAoVivo}
                                    >
                                        Ao Vivo
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}