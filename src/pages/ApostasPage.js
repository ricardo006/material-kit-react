import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

// @mui
import ImageIcon from '@mui/icons-material/Image';
import { Chip, Button, Tooltip, Accordion, AccordionSummary, AccordionDetails, Card, CardContent, Grid, Container, Stack, Typography, Box, Tab, Tabs, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import imgBet from '../illustrations/cover_1.jpg'
import Scrollbar from '../components/scrollbar';

// components
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

const apostasMultiplas = [
  {
    apostador: "Apostador 1",
    selecoes: [
      { nome: "Brasil 2x1 Argentina", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Dupla Chance' },
      { nome: "França 3x0 Alemanha", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' },
      { nome: "Espanha 1x1 Portugal", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' }
    ],
    dataAposta: "15/10/2023",
    valorAposta: 10.0, // Valor em reais
    retorno: 210.0, // Valor em reais
    placar: "4x2",
    status: "Perdida"
  },
  {
    apostador: "Apostador 2",
    selecoes: [
      { nome: "Portugal 2x2 Itália", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' },
      { nome: "Inglaterra 1x0 Holanda", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' },
      { nome: "Bélgica 3x1 França", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' }
    ],
    dataAposta: "16/10/2023",
    valorAposta: 15.0, // Valor em reais
    retorno: 320.0, // Valor em reais
    placar: "2x0",
    status: "Perdida"
  },
  {
    apostador: "Apostador 3",
    selecoes: [
      { nome: "Uruguai 0x1 Croácia", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' },
      { nome: "Inglaterra 2x0 Alemanha", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' },
      { nome: "França 2x2 Espanha", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' }
    ],
    dataAposta: "17/10/2023",
    valorAposta: 20.0, // Valor em reais
    retorno: 400.0, // Valor em reais
    placar: "3x1",
    status: "Ganha"
  },
  {
    apostador: "Apostador 4",
    selecoes: [
      { nome: "Espanha 2x0 Holanda", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' },
      { nome: "Itália 1x1 Bélgica", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' },
      { nome: "Suécia 3x2 Inglaterra", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' }
    ],
    dataAposta: "18/10/2023",
    valorAposta: 25.0, // Valor em reais
    retorno: 550.0, // Valor em reais
    placar: "4x3",
    status: "Ganha"
  },
  {
    apostador: "Apostador 5",
    selecoes: [
      { nome: "Argentina 3x2 Portugal", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' },
      { nome: "Croácia 1x1 Inglaterra", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' },
      { nome: "França 4x0 Bélgica", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' }
    ],
    dataAposta: "19/10/2023",
    valorAposta: 12.0, // Valor em reais
    retorno: 260.0, // Valor em reais
    placar: "3x1",
    status: "Ganha"
  },
  {
    apostador: "Apostador 6",
    selecoes: [
      { nome: "Brasil 2x0 Itália", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' },
      { nome: "Alemanha 2x1 Espanha", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' },
      { nome: "Suécia 2x2 Holanda", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' }
    ],
    dataAposta: "20/10/2023",
    valorAposta: 18.0, // Valor em reais
    retorno: 380.0, // Valor em reais
    placar: "3x3",
    status: "Ganha"
  },
  {
    apostador: "Apostador 7",
    selecoes: [
      { nome: "Argentina 4x2 França", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' },
      { nome: "Inglaterra 1x0 Bélgica", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' },
      { nome: "Holanda 3x1 Portugal", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' }
    ],
    dataAposta: "21/10/2023",
    valorAposta: 22.0, // Valor em reais
    retorno: 460.0, // Valor em reais
    placar: "3x2",
    status: "Ganha"
  },
  {
    apostador: "Apostador 8",
    selecoes: [
      { nome: "Brasil 3x1 Portugal", tempo: "90' min | Tempo Extra", status: 'Em andamento', mercado: 'Vencedor Final' },
      { nome: "Espanha 2x0 Croácia", tempo: "90' min | Tempo Extra", status: 'Ganhando', mercado: 'Vencedor Final' },
      { nome: "Itália 1x1 França", tempo: "90' min | Tempo Extra", status: 'Em andamento', mercado: 'Vencedor Final' }
    ],
    dataAposta: "22/10/2023",
    valorAposta: 30.0, // Valor em reais
    retorno: 640.0, // Valor em reais
    placar: "4x0",
    status: "Perdida"
  },
  {
    apostador: "Apostador 9",
    selecoes: [
      { nome: "Argentina 2x1 Alemanha", tempo: "90' min | Tempo Extra", status: 'Em andamento', mercado: 'Vencedor Final' },
      { nome: "França 3x0 Inglaterra", tempo: "90' min | Tempo Extra", status: 'Em andamento', mercado: 'Vencedor Final' },
      { nome: "Holanda 1x1 Croácia", tempo: "90' min | Tempo Extra", status: 'Em andamento', mercado: 'Vencedor Final' }
    ],
    dataAposta: "23/10/2023",
    valorAposta: 28.0, // Valor em reais
    retorno: 590.0, // Valor em reais
    placar: "2x0",
    status: "Ganha"
  },
  {
    apostador: "Apostador 10",
    selecoes: [
      { nome: "Brasil 2x1 Inglaterra", tempo: "90' min | Tempo Extra", status: 'Em andamento', mercado: 'Vencedor Final' },
      { nome: "Espanha 2x2 Itália", tempo: "90' min | Tempo Extra", status: 'Em andamento', mercado: 'Vencedor Final' },
      { nome: "Bélgica 3x0 Portugal", tempo: "90' min | Tempo Extra", status: 'Em andamento', mercado: 'Vencedor Final' }
    ],
    dataAposta: "24/10/2023",
    valorAposta: 35.0, // Valor em reais
    retorno: 730.0, // Valor em reais
    placar: "3x1",
    status: "Ganha"
  }
];

function CustomTabPanel(props) {
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
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const styles = {
  avatar: {
    borderRadius: 1, // Adicione bordas ao Avatar
    width: '100%',
    height: '70%',
  },
  card: {
    boxShadow: 'rgba(0, 0, 0, 0.20) 0px 3px 4px;', // Adicione elevação
    p: 2,
    backgroundColor: '#062345',
    // m: 2
  },
  cardContent: {
    height: (expanded) => (expanded ? 'auto' : '0'), // Define a altura do CardContent
    overflow: 'hidden',
    transition: 'height .3s ease-in',
  },
  accordionDetails: {
    maxHeight: (expanded) => (expanded ? '100%' : '0'), // Define a altura máxima
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out',
    display: (expanded) => (expanded ? 'block' : 'none'),
  },
  gradientChip: {
    backgoundImage: 'linear-gradient(to right, #ff9900, #ff66cc)'
  }
};

export default function ApostasPage() {
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = useState({ 0: true });
  const elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const elemCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleAccordionChange = (index) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  useEffect(() => {
    // Lógica para lidar com a mudança no estado expanded
    console.log('Expanded mudou:', expanded);
  }, [expanded]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title> Betspace | Apostas </title>
      </Helmet>

      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3} sx={{ m: 2 }}>
          <Typography variant="h4" gutterBottom>
            Apostas realizadas
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            Nova Aposta
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between" sx={{ m: 2 }}>
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Box sx={{ width: '100%', mt: 2 }}>
          <Box sx={{ backgroundColor: '#062345', color: '#023047', pt: 2, height: '100%', borderRadius: 2 }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ ml: 2, mr: 2, p: 0, height: 50, backgroundColor: '#062345', borderRadius: 2 }}>
              <Tab sx={{ mb: 6, mt: 0 }} label="Em aberto" {...a11yProps(0)} />
              <Tab sx={{ mb: 6, mt: 0 }} label="Finalizadas" {...a11yProps(1)} />
              <Tab sx={{ mb: 6, mt: 0 }} label="Ganha" {...a11yProps(2)} />
            </Tabs>

            <CustomTabPanel value={value} index={0}>
              {elemCard.slice(0, 10).map((index) => (
                <Card
                  sx={{
                    ...styles.card,
                    mt: 2,
                    height: { xs: '20%', md: 'auto' }, // Defina a altura para 40% em dispositivos móveis
                    border: 0
                  }}
                >
                  <Grid container alignItems="center" height="100%" >
                    <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={styles.avatar} src={imgBet}>
                        <ImageIcon />
                      </Avatar>
                    </Grid>

                    <Grid item xs={6} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <Typography variant="body2" sx={{ marginLeft: { xs: 2, md: 2 } }}>
                        Ricardo Oliveira
                      </Typography>
                      <Typography variant="subtitle2" sx={{ marginLeft: { xs: 2, md: 2 } }}>
                        Múltipla: 5 seleções
                      </Typography>
                      <Typography variant="subtitle2" sx={{ marginLeft: { xs: 2, md: 2 } }}>
                        Data da aposta:  15/10/2023
                      </Typography>
                    </Grid>

                    <Grid item xs={6} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-end', md: 'flex-start' } }}>
                      <Typography variant="subtitle2" sx={{ mt: 2 }}>
                        Odd: 21.00
                      </Typography>
                      <Typography variant="subtitle2">
                        Valor: R$10,00
                      </Typography>
                      <Typography variant="subtitle2" sx={{ mb: 2 }}>
                        Retornos:  R$210,00
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={2}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}>
                      <Tooltip sx={{
                        background: '#ff1743'
                      }}
                        title={expanded[index] ? 'Fechar' : 'Visualizar'
                        }>
                        <Button
                          variant="contained"
                          sx={{
                            width: { xs: '100%', md: '80%' },
                            mt: 2,
                            float: 'right',
                            boxShadow: 'rgba(0, 0, 0, 0.15) 1.05px 1.05px 2px',
                            backgroundColor: '#33ffc2',
                            color: '#001D3D'
                          }}
                          onClick={() => handleAccordionChange(index)}
                          key={index} // Adicione o evento onClick aqui
                        >
                          {expanded[index] ? <ArrowDropUpTwoToneIcon /> : <ArrowDropDownTwoToneIcon />}
                          {expanded[index] ? ' Fechar' : ' Visualizar'}
                        </Button>
                      </Tooltip>
                    </Grid>
                  </Grid>

                  <Accordion expanded={expanded[index]} sx={{ display: expanded[index] ? 'block' : 'none', border: 0, borderRadius: 2, backgroundColor: '#062345', p: 0 }}>
                    <AccordionDetails>
                      {elementos !== 0 &&
                        <Grid spacing={2}>
                          <Typography variant="subtitle2" sx={{ mt: 2, textAlign: 'left' }}>
                            Eventos selecionados:
                          </Typography>
                          <Scrollbar>

                            <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 2 }}>
                              {elementos ? (
                                elementos.slice(0, 10).map((country, index) => (
                                  <List key={index} sx={{ alignItems: 'center' }}>
                                    <ListItem
                                      sx={{
                                        height: 150,
                                        width: 280,
                                        borderRadius: 2,
                                        boxShadow: 'rgba(0, 1, 2, 0.24) 0px 5px 9px;',
                                        background: 'radial-gradient(at -306.9% 185%, transparent 69.22%, #EF476B 113.79%)',
                                        // background: 'radial- gradient(at - 306.9 % 185 %, transparent 69.22 %, #33ffc2 113.79 %)',
                                        // background: 'radial- gradient(at - 306.9 % 185 %, transparent 69.22 %, #65c9f7 113.79 %)',
                                        border: '.2px solid #ef476f',
                                        // border: '.2px solid #33ffc2',
                                        // border: '.2px solid #65c9f7',
                                        m: 1,
                                        p: 2
                                      }}
                                    >
                                      {/* <Grid style={{ p: 0, display: 'flex', flexDirection: 'column', textAlign: 'left', width: '100%' }}>
                                        <Chip label="Vasco 2x1 Fluminense" sx={{ mt: 1, fontWeight: 700, backgroundColor: 'rgb(100 125 153 / 50 %)', color: '#fff' }} />
                                        <Chip label="10' min | 2º tempo" sx={{ mt: 1, marginRight: 2, width: '100%', backgroundColor: 'transparent' }} />

                                        <div style={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                                          <Chip label="Vencedor Final: Vasco" sx={{ mt: 1, backgroundColor: 'transparent', fontWeight: 600 }} />
                                          <Chip label="2.10" sx={{ mt: 1, width: '100%', backgroundColor: 'rgb(100 125 153 / 50 %)', color: '#fff', fontWeight: 600 }} />
                                        </div>
                                      </Grid> */}

                                      <Grid style={{ p: 0, display: 'flex', flexDirection: 'column', textAlign: 'left', width: '100%' }}>
                                        <Chip label="Vasco 2x1 Fluminense" sx={{ mt: 1, fontWeight: 700, backgroundColor: 'rgb(100 125 153 / 50 %)' }} />
                                        <Chip label="10' min | 2º tempo" sx={{ mt: 1, marginRight: 2, width: '100%', backgroundColor: 'transparent' }} />

                                        <div style={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                                          <Chip label="Vencedor Final: Vasco" sx={{ mt: 1, backgroundColor: 'transparent', fontWeight: 600 }} />
                                          <Chip label="2.10" sx={{ mt: 1, width: '100%', backgroundColor: 'rgb(100 125 153 / 50 %)', color: '#fff', fontWeight: 600 }} />
                                        </div>
                                      </Grid>
                                    </ListItem>
                                  </List>
                                ))
                              ) : (
                                <p>Carregando dados...</p>
                              )}
                            </Stack>
                          </Scrollbar>

                        </Grid>
                      }
                    </AccordionDetails>
                  </Accordion>
                </Card>
              ))}
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              Apostas Finalizadas
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
              Apostas Ganhas
            </CustomTabPanel>
          </Box>

        </Box>
      </Container >
    </>
  );
}
