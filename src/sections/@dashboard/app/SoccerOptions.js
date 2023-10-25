import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';

import {
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

    const styles = {
        chip: {
            marginTop: 2,
            marginRight: 1,
            width: '100%',
            backgroundColor: 'rgb(100 125 153 / 50%)',
            color: '#fff',
            border: 0,
            fontWeight: 600,
            fontSize: 12,
            cursor: 'pointer',
        },
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <Grid spacing={2}>
                            <Typography
                                variant="body2"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center', // Alinha verticalmente
                                    textAlign: 'left',
                                    pr: 2,
                                    ml: 1,
                                    mt: 2,
                                    fontWeight: 700,
                                    color: '#B1D2F7'
                                }}
                            >
                                <EmojiEventsTwoToneIcon sx={{ color: '#33FFC2', mr: 2 }} />
                                Destaques
                            </Typography>

                            <Grid container spacing={2} sx={{ mr: 2 }}>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Button variant="outlined" startIcon={<AccessTimeTwoToneIcon />} sx={{ m: 2 }} onClick={handleClickProxJogos}>
                                        Próximos Jogos
                                    </Button>
                                </Grid>

                                <Grid item xs={12} sm={12} md={12}>
                                    <Button variant="outlined" startIcon={<AlbumTwoToneIcon />} onClick={handleClickAoVivo}>
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