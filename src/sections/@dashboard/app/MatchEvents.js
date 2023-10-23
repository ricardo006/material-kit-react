import React, { useState, useEffect } from 'react';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import ImageIcon from '@mui/icons-material/Image';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';

import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Button,
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
    const styles = {
        buttonmarkets: {
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#001D3D',
            width: '100%',
            color: '#33FFC2',
            border: 0,
            boxShadow: 0,
            fontSize: 14,
            '&:hover': {
                boxShadow: 0,
                backgroundColor: '#1d3557',
                color: '#33FFC2',
            },
        },
        value: {
            marginLeft: 'auto',
            fontWeight: 700,
        },
        teamName: {
            marginRight: 'auto',
            textTransform: 'capitalize',
            color: '#B9DAFF'
        },
        cardMedia: {
            height: '60%',
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
        },
    }

    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid xs={12} md={8} spacing={2}>
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
                                    <Typography component="div" variant="h6"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center', // Alinha verticalmente
                                            textAlign: 'left',
                                        }}>
                                        <AutoAwesomeTwoToneIcon sx={{ color: '#33FFC2', mr: 2 }} />
                                        Principais Mercados
                                    </Typography>
                                </Box>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={12}>
                                        <Accordion sx={{ backgroundColor: '#062345' }}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography>Vencedor Final</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Fluminense</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.28</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Empate</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.80</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Vasco</Typography>
                                                            <Typography variant="body2" sx={styles.value}>2.80</Typography>
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>
                                    <Grid item xs={12} md={12} >
                                        <Accordion sx={{ backgroundColor: '#062345' }}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                            >
                                                <Typography>Resultado ao Intervalo</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Fluminense</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.28</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Empate</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.80</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Vasco</Typography>
                                                            <Typography variant="body2" sx={styles.value}>2.80</Typography>
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <Accordion sx={{ backgroundColor: '#062345' }}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel3a-content"
                                                id="panel3a-header"
                                            >
                                                <Typography>Mais/Menos Gols</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Mais 0.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.28</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Menos 0.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.80</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Mais 1.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.28</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Menos 1.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.80</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Mais 2.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.28</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Menos 2.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.80</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Mais 3.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.28</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Menos 3.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.80</Typography>
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <Accordion sx={{ backgroundColor: '#062345' }}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel3a-content"
                                                id="panel3a-header"
                                            >
                                                <Typography>Dupla Chance</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Fluminense ou Empate</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.28</Typography>
                                                        </Button>

                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Fluminense ou Vasco</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.28</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Vasco ou Empate</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.28</Typography>
                                                        </Button>
                                                    </Grid>

                                                </Grid>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} spacing={2}>
                        <Card sx={{ ml: 1, mt: 2 }}>
                            <Grid sx={12} container spacing={2}>
                                <Paper sx={{ p: 2, mt: 2, mb: 2, backgroundColor: '#001D3D', borderRadius: 2, width: '100%', verticalAlign: 'middle', height: 120 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                                        <Typography component="div" variant="h6"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center', // Alinha verticalmente
                                                textAlign: 'left',
                                                fontSize: 12,
                                                mt: 2,
                                                ml: 2,
                                            }}>
                                            <AutoAwesomeTwoToneIcon sx={{ color: '#33FFC2', mr: 2 }} />
                                            Minhas Apostas
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                                        <Typography component="div" variant="h6"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center', // Alinha verticalmente
                                                textAlign: 'left',
                                                fontSize: 12,
                                                mt: 2,
                                                ml: 2,
                                            }}>
                                            <AutoAwesomeTwoToneIcon sx={{ color: '#33FFC2', mr: 2 }} />
                                            Minhas Apostas
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid >
            </Container >
        </>
    );
}