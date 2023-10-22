import React, { useState, useEffect } from 'react';
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

const events = [
    {
        id: 1,
        data: 'Hoje',
        horario: '18:30',
        timeCasa: 'Internacional',
        timeFora: 'São Paulo',
        placarCasa: 2,
        placarFora: 1,
        oddCasa: 2.16,
        oddEmpate: 3.03,
        oddFora: 2.5,
    },
    {
        id: 2,
        data: 'Hoje',
        horario: '18:30',
        tempoJogo: '25',
        timeCasa: 'América MG',
        timeFora: 'Vasco',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 1.8,
        oddEmpate: 2.8,
        oddFora: 3.2,
    },
    {
        id: 3,
        data: 'Hoje',
        horario: '18:50',
        tempoJogo: '35',
        timeCasa: 'Time Casa 3',
        timeFora: 'Time Fora 3',
        placarCasa: 1,
        placarFora: 3,
        oddCasa: 3.5,
        oddEmpate: 3.0,
        oddFora: 2.0,
    },
    {
        id: 4,
        data: 'Hoje',
        horario: '18:30',
        tempoJogo: '10',
        timeCasa: 'Time Casa 4',
        timeFora: 'Time Fora 4',
        placarCasa: 1,
        placarFora: 2,
        oddCasa: 2.0,
        oddEmpate: 2.5,
        oddFora: 2.8,
    },
    {
        id: 5,
        data: 'Hoje',
        horario: '18:30',
        tempoJogo: '60',
        timeCasa: 'Time Casa 5',
        timeFora: 'Time Fora 5',
        placarCasa: 3,
        placarFora: 0,
        oddCasa: 1.5,
        oddEmpate: 3.2,
        oddFora: 4.0,
    },
    {
        id: 6,
        data: 'Amanhã',
        horario: '11:30',
        tempoJogo: '30',
        timeCasa: 'Time Casa 6',
        timeFora: 'Time Fora 6',
        placarCasa: 2,
        placarFora: 2,
        oddCasa: 2.2,
        oddEmpate: 2.9,
        oddFora: 3.0,
    },
    {
        id: 7,
        data: 'Amanhã',
        horario: '12:30',
        tempoJogo: '75',
        timeCasa: 'Time Casa 7',
        timeFora: 'Time Fora 7',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.8,
        oddEmpate: 2.7,
        oddFora: 2.2,
    },
    {
        id: 8,
        data: 'Amanhã',
        horario: '20:00',
        tempoJogo: '80',
        timeCasa: 'Time Casa 8',
        timeFora: 'Time Fora 8',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 1.7,
        oddEmpate: 2.8,
        oddFora: 3.5,
    }
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

export default function BannersEvents() {
    const [value, setValue] = React.useState(0);

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
                                    fontSize: 12,
                                    color: '#33FFC2'
                                }}
                            >
                                <EmojiEventsTwoToneIcon sx={{ color: '#33FFC2', mr: 2 }} />
                                Destaques
                            </Typography>
                            <Scrollbar>
                                <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 2 }}>
                                    {events.map((event) => (
                                        <List key={event.id} sx={{ alignItems: 'center' }}>
                                            <ListItem
                                                sx={{
                                                    height: 150,
                                                    width: 280,
                                                    borderRadius: 2,
                                                    m: 1,
                                                    p: 2,
                                                    boxShadow: 'rgba(0, 1, 2, 0.24) 0px 5px 9px',
                                                    backgroundImage: `url(${bgEvents})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }}
                                            >
                                                <Grid style={{ p: 0, display: 'flex', flexDirection: 'column', textAlign: 'left', width: '100%' }}>
                                                    <Chip label={`${event.timeCasa} x ${event.timeFora}`} sx={{ mt: .4, fontWeight: 700, backgroundColor: 'transparent' }} />
                                                    <Chip label={`${event.data} | ${event.horario}`} sx={{ mt: 1, marginRight: 2, width: '100%', backgroundColor: 'transparent' }} />
                                                    <div style={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                                                        <Chip spacing={2} label={`${event.oddCasa}`} sx={styles.chip} />
                                                        <Chip spacing={2} label={`${event.oddEmpate}`} sx={styles.chip} />
                                                        <Chip spacing={2} label={`${event.oddFora}`} sx={styles.chip} />
                                                    </div>
                                                </Grid>
                                            </ListItem>
                                        </List>
                                    ))}
                                </Stack>
                            </Scrollbar>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}