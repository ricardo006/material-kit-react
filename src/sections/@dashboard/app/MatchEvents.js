import React, { useState, useEffect } from 'react';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import ImageIcon from '@mui/icons-material/Image';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    AccordionDetails,
    AccordionSummary,
    Accordion,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Container,
    Grid,
    Box,
    Tabs,
    Tab,
    Chip,
    Paper,
    List,
    ListItem,
    Stack,

} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import imgBet from '../../../illustrations/banner_match.jpg';
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

export default function MatchEvents() {
    const theme = useTheme();

    const styles = {
        cardMedia: {
            height: '60%', // Defina a altura desejada aqui (60%)
        },
        paper: {
            backgroundImage: `url(${imgBet})`,
            position: 'relative',
            width: '100%',
            height: '300px',
            padding: 0
        },
        textContainerCasa: {
            position: 'absolute',
            width: '100%',
            top: '50%',
            right: '50%',
            textAlign: 'center',
            background: 'rgba(0, 29, 61, 0.5)',
            padding: '16px',
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            borderTopLeftRadius: 30,
            marginRight: .2,
            borderRight: '4px solid #33FFC2',
            color: '#B6D6FC',
            fontWeight: 600,
            fontSize: 24
        },
        textContainerFora: {
            position: 'absolute',
            width: '100%',
            top: '50%',
            left: '50%',
            textAlign: 'center',
            background: 'rgba(0, 29, 61, 0.5)',
            padding: '16px',
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            borderTopRightRadius: 30,
            marginLeft: .2,
            borderLeft: '4px solid #33FFC2',
            color: '#B6D6FC',
            fontWeight: 600,
            fontSize: 24
        }
    }

    return (
        <>
            <Container maxWidth="xl">
                <Card>
                    <Grid container spacing={2}>
                        <Paper sx={styles.paper}>
                            <Grid xs={6} md={1} >
                                <Typography>'</Typography>
                            </Grid>
                            <Grid xs={6} md={5} sx={styles.textContainerCasa}>
                                <Typography variant="h6">Fluminense</Typography>
                            </Grid>
                            <Grid xs={6} md={5} sx={styles.textContainerFora}>
                                <Typography variant="h6">Vasco</Typography>
                            </Grid>
                            <Grid xs={6} md={1} >
                                <Typography>'</Typography>

                            </Grid>
                        </Paper>

                    </Grid>

                    <CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'row', mb: 4 }}>
                            <Typography component="div" variant="h5">
                                Principais Mercados
                            </Typography>
                        </Box>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12}>
                                <Accordion sx={{ backgroundColor: '#183D66' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Accordion 1</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                            <Grid item xs={12} md={12} >
                                <Accordion sx={{ backgroundColor: '#183D66' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 2</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Accordion sx={{ backgroundColor: '#183D66' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography>Disabled Accordion</Typography>
                                    </AccordionSummary>
                                </Accordion>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}