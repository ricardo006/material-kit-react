import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import ExpandTwoToneIcon from '@mui/icons-material/ExpandTwoTone';

import {
    Button,
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


                                <Grid container spacing={3}>
                                    <Grid item xs={8} md={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <Typography component="div" variant="h6" sx={{ ml: 1 }}>
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
                                            <Typography component="div" variant="body2" sx={{ mr: 1, fontWeight: 600 }}>
                                                Expandir mercados
                                            </Typography>
                                            <IconButton sx={{ backgroundColor: '#062345', borderRadius: 1, color: '#33ffc2' }}>
                                                <ExpandTwoToneIcon />
                                            </IconButton>
                                        </Grid>
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
            </Container>
        </>
    );
}