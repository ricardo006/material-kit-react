import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import ExpandTwoToneIcon from '@mui/icons-material/ExpandTwoTone';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';
import FlagTwoToneIcon from '@mui/icons-material/FlagTwoTone';

import {
    Button,
    Stack,
    Chip,
    Badge,
    IconButton,
    AccordionDetails,
    AccordionSummary,
    Accordion,
    Typography,
    Card,
    CardContent,
    Container,
    Grid,
    Box,
    Paper,
} from '@mui/material';
import imgBet from '../../../illustrations/banner_match.jpg';
import Scrollbar from '../../../components/scrollbar';

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

export default function MatchEvents() {
    const [selectedItem, setSelectedItem] = useState(null);

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
            width: '50%',
            top: '50%',
            right: '50%',
            textAlign: 'center',
            background: 'rgba(0, 29, 61, 0.5)',
            padding: '16px',
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            borderTopLeftRadius: 0,
            marginRight: .2,
            borderRight: '4px solid #33FFC2',
            color: '#B6D6FC',
            fontWeight: 600,
            fontSize: 24
        },
        textContainerFora: {
            position: 'absolute',
            width: '50%',
            top: '50%',
            left: '50%',
            textAlign: 'center',
            background: 'rgba(0, 29, 61, 0.5)',
            padding: '16px',
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            borderTopRightRadius: 0,
            marginLeft: .2,
            borderLeft: '4px solid #33FFC2',
            color: '#B6D6FC',
            fontWeight: 600,
            fontSize: 24
        },
        textContainerCasaCards: {
            position: 'absolute',
            width: '100%',
            top: '70%',
            right: '50%',
            textAlign: 'center',
            // background: 'rgba(0, 29, 61, 0.5)',
            padding: '16px',
            marginRight: .2,
            color: '#B6D6FC',
            fontWeight: 600,
            fontSize: 24
        },
        textContainerForaCards: {
            position: 'absolute',
            width: '100%',
            top: '70%',
            left: '50%',
            textAlign: 'center',
            // background: 'rgba(0, 29, 61, 0.5)',
            padding: '16px',
            marginLeft: .2,
            color: '#B6D6FC',
            fontWeight: 600,
            fontSize: 24
        },
    }

    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} spacing={2}>
                        <Card>
                            <Grid spacing={2}>
                                <Paper sx={styles.paper}>

                                    <Grid item xs={6} md={6} sx={styles.textContainerCasa}>
                                        <Typography variant="h6">Fluminense</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={6} sx={styles.textContainerCasa}>
                                        <Typography variant="h6">2</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={6} sx={styles.textContainerCasa}>
                                        <Typography variant="h6">3</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={6} sx={styles.textContainerFora}>
                                        <Typography variant="h6">Vasco</Typography>
                                    </Grid>

                                </Paper>

                                <Grid container sx={{ mb: 2, backgroundColor: '#0b132b' }}>
                                    <Grid item xs={12} md={5} lg={6} sx={{ height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Badge color="error" sx={{ color: '#ff1743' }}>
                                            <InsertDriveFileTwoToneIcon />
                                        </Badge>
                                        <Typography variant="body2" align="right" sx={{ color: '#B6D6FC', ml: 1, fontWeight: 600 }}>
                                            1 - 0
                                        </Typography>
                                        <Badge color="warning" sx={{ ml: 1, color: '#ffb703' }}>
                                            <InsertDriveFileTwoToneIcon />
                                        </Badge>
                                        <Typography variant="body2" align="right" sx={{ color: '#B6D6FC', ml: 1, fontWeight: 600 }}>
                                            5 - 3
                                        </Typography>
                                        <Badge color="info" sx={{ ml: 1, color: '#4361ee' }}>
                                            <FlagTwoToneIcon />
                                        </Badge>
                                        <Typography variant="body2" align="right" sx={{ color: '#B6D6FC', ml: 1, fontWeight: 600 }}>
                                            10 - 8
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} md={5} lg={6} sx={{ xs: { mb: 3 }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography variant="body2" sx={{ color: '#B6D6FC', ml: 1, fontWeight: 600 }}>
                                            Cartão amarelo para Fluminense
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>

                            <CardContent>


                                <Grid container spacing={3}>
                                    <Grid item xs={8} md={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <Typography component="div" variant="h6" sx={{ ml: 1, mt: 1 }}>
                                            <IconButton
                                                size="medium"
                                                sx={{ mr: 1 }}
                                            >
                                                <AutoAwesomeTwoToneIcon sx={{ color: '#33ffc2' }} />
                                            </IconButton>
                                            Principais Mercados
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={4} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                                            <IconButton sx={{ backgroundColor: '#062345', borderRadius: 1, color: '#33ffc2' }}>
                                                <ExpandTwoToneIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} md={12}>
                                        <Scrollbar>
                                            <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 2 }}>
                                                {marketsData.map((data) => (
                                                    <Chip
                                                        key={data.id}
                                                        label={data.label}
                                                        sx={{
                                                            borderRadius: 1,
                                                            height: 40,
                                                            cursor: 'pointer',
                                                            fontWeight: 'bold',
                                                            backgroundColor: selectedItem === data.id ? '#33ffc2' : '#062345',
                                                            color: selectedItem === data.id ? '#062345' : '#33ffc2',
                                                            '&:hover': {
                                                                color: selectedItem === data.id ? '#062345' : '#33ffc2',
                                                                backgroundColor: selectedItem === data.id ? '#33ffc2' : '#062345',
                                                            }
                                                        }}
                                                        onClick={() => setSelectedItem(data.id)}
                                                    />
                                                ))}
                                            </Stack>
                                        </Scrollbar>
                                    </Grid>

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
                                    <Grid item xs={12} md={12}>
                                        <Accordion sx={{ backgroundColor: '#062345' }}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel3a-content"
                                                id="panel3a-header"
                                            >
                                                <Typography>Ambas equipes marcam</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Sim</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.28</Typography>
                                                        </Button>

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Não</Typography>
                                                            <Typography variant="body2" sx={styles.value}>2.28</Typography>
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
                                                <Typography>Total de gols Mais/Menos 1º tempo</Typography>
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
                                                <Typography>Resultado Final / Total de gols</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Casa & Mais 1.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.28</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Fora & Menos 1.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.80</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Casa & Mais 2.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.28</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Fora & Menos 2.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.80</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Casa & Mais 3.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.28</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Fora & Menos 3.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.80</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Casa & Mais 4.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.28</Typography>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="primary" sx={styles.buttonmarkets}>
                                                            <Typography variant="body2" sx={styles.teamName}>Fora & Menos 4.5</Typography>
                                                            <Typography variant="body2" sx={styles.value}>1.80</Typography>
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
                                                alignItems: 'center',
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
                                                alignItems: 'center',
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
                </Grid>
            </Container >
        </>
    );
}