import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import AlbumTwoToneIcon from '@mui/icons-material/AlbumTwoTone';
import {
    Button,
    Typography,
    Container,
    Grid,
    Box,
    Tabs,
    Tab,
    Chip,
    List,
    ListItem,
    Stack,

} from '@mui/material';

import Scrollbar from '../../../components/scrollbar';
import bgEvents from '../../../illustrations/bgEvent4.jpg';
import { fDecimal, fCurrency } from '../../../utils/formatNumber';

const marketsData = [
    { id: 1, label: 'Principais mercados', color: 'primary' },
    { id: 2, label: 'Resultado Final', color: 'primary' },
    { id: 3, label: 'Dupla Chance', color: 'primary' },
    { id: 4, label: 'Total de Gols mais/menos', color: 'primary' },
    { id: 5, label: 'Próximo Gol', color: 'primary' },
    { id: 6, label: 'Empate Anula', color: 'primary' },
    { id: 7, label: 'Totais de gols mais/menos 1º tempo', color: 'primary' },
    { id: 8, label: 'Escanteios Mais/Menos', color: 'primary' },
];


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function SoccerOptions() {
    const [value, setValue] = React.useState(0);
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