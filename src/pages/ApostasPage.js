import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
// @mui
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Button, Tooltip, Accordion, AccordionSummary, AccordionDetails, Card, CardContent, Grid, Container, Stack, Typography, Box, Tab, Tabs, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import imgBet from '../illustrations/cover_1.jpg'

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
    height: '100%',
  },
  card: {
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;', // Adicione elevação
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
};

export default function ApostasPage() {
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

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
          <Box sx={{ backgroundColor: '#062345', color: '#fff', m: 2, borderRadius: 1 }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Em aberto" {...a11yProps(0)} />
              <Tab label="Finalizadas" {...a11yProps(1)} />
              <Tab label="Ganha" {...a11yProps(2)} />
            </Tabs>
          </Box>

          <CustomTabPanel value={value} index={0}>
            <Card
              sx={{
                ...styles.card,
                mt: 2,
                height: { xs: '20%', md: 'auto' }, // Defina a altura para 40% em dispositivos móveis
              }}
            >

              <Grid container alignItems="center" height="100%" >
                <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={styles.avatar} src={imgBet}>
                    <ImageIcon />
                  </Avatar>
                </Grid>

                <Grid item xs={6} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography variant="h6" sx={{ marginLeft: { xs: 2, md: 2 } }}>
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

                <Grid item xs={12} md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Tooltip title="Visualizar">
                    <Button
                      variant="contained"
                      sx={{ width: { xs: '100%', md: 'auto' }, borderRadius: '50px', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}
                      onClick={toggleExpand} // Adicione o evento onClick aqui
                    >
                      Visualizar
                    </Button>
                  </Tooltip>
                </Grid>
              </Grid>

              <Accordion expanded={expanded} sx={{ display: expanded ? 'block' : 'none', borderRadius: 1 }}>
                <AccordionSummary />
                <AccordionDetails >
                  <Typography variant="subtitle2" sx={{ mt: 2 }}>
                    Odd: 21.00
                  </Typography>
                  <Typography variant="subtitle2">
                    Valor: R$10,00
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mb: 2 }}>
                    Retornos: R$210,00
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </Card>

            <Card
              sx={{
                ...styles.card,
                mt: 2,
                height: { xs: '20%', md: 'auto' }, // Defina a altura para 40% em dispositivos móveis
              }}
            >
              <Grid container alignItems="center" height="100%"> {/* Defina a altura do Grid como 100% */}
                <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={styles.avatar} src={imgBet}>
                    <ImageIcon />
                  </Avatar>
                </Grid>

                <Grid item xs={6} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography variant="h6" sx={{ marginLeft: { xs: 2, md: 2 } }}>
                    Ricardo Oliveira
                  </Typography>
                  <Typography variant="subtitle2" sx={{ marginLeft: { xs: 2, md: 2 } }}>
                    Múltipla: 5 seleções
                  </Typography>
                  <Typography variant="subtitle2" sx={{ marginLeft: { xs: 2, md: 2 } }}>
                    Data:  15/10/2023
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

                <Grid item xs={12} md={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Tooltip title="Visualizar">
                    <Button
                      variant="contained"
                      sx={{ width: { xs: '100%', md: 'auto' }, borderRadius: 50, boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }} // Largura total em dispositivos menores e bordas arredondadas
                    >
                      Visualizar
                    </Button>
                  </Tooltip>
                </Grid>
              </Grid>
            </Card>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </Box>
      </Container>
    </>
  );
}
