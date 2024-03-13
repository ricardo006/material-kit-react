import React, { useState, useEffect } from 'react';

import SportsSoccerTwoToneIcon from '@mui/icons-material/SportsSoccerTwoTone';

import {
  Grid,
  Typography,
  Container,
  Card,
} from '@mui/material';

import FabButton from '../../../../components/button-apostar/FabButton';
import Scrollbar from '../../../../components/scrollbar';
import CustomAlert from '../../../../components/alert';

import BetDrawer from './components/BetDrawer/BetDrawer';
import Filters from './components/Filters/Filters';
import MarketChips from './components/MarketChips/MarketChips';
import MarketTable from './components/MarketTable/MarketTable';

import { MarketContext } from './Context';

import Competitions from '../../../../api/Competitions';

import palette from '../../../../theme/palette';

export default function AppChipMarket() {
  const [clicked, setClicked] = useState([]);
  const [competitionsData, setCompetitionsData] = useState([]);
  const [clickedEvents, setClickedEvents] = useState([]);
  const [selectedChips, setSelectedChips] = useState([]);
  const [activeMarket, setActiveMarket] = useState(null);
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(0);

  const [concatenatedText, setConcatenatedText] = useState('');

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const cleanMarketChip = () => {
    setSelectedChips([]);
    setActiveMarket('');
    setConcatenatedText('');
  }

  const defineMarketChip = (market, idChip) => {
    setSelectedChips([idChip]);
    setActiveMarket(market.toString());

    const newLabel = `Brasil - Campeonato Brasileiro Série A (${market})`;

    setConcatenatedText(newLabel);
  }

  const handleOpenAlert = (message) => {
    setAlertMessage(message);
    setAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(isDrawerOpen + 1);
  };

  useEffect(() => {

      if (selectedCountryId) {
          // Verifique se os dados das competições ainda não foram carregados
          if (!competitionsData) {
              // Se ainda não foram carregados, faça a solicitação
              const fetchData = async () => {
                  try {
                      const response = await Competitions(selectedCountryId);
                      setCompetitionsData(response);
                  } catch (error) {
                      console.error('Erro ao buscar dados da API de competições:', error);
                  }
              };

              fetchData();
          }
      }
  }, [selectedCountryId, competitionsData]);

  const handleRemoveEvent = (rowId, eventClicked) => {
    const existingEvent = checkExistingEvent(eventClicked, rowId);

    if (existingEvent) {
      setClickedEvents((prevEventos) =>
        prevEventos.filter((event) => !(event.rowId === rowId && event.evento === eventClicked))
      );

      setClicked((prevClicadas) => prevClicadas.filter((id) => id !== `${rowId}-${eventClicked}`));
    }

    // Use a função filter para criar um novo array sem o evento correspondente ao rowId
    const newClickedEvents = clickedEvents.filter((event) => event.rowId !== rowId);

    // Atualize o estado com o novo array de eventos
    setClickedEvents(newClickedEvents);

    // Remova o item do array clicadas
    setClicked((prevClicadas) => prevClicadas.filter((id) => id !== `${rowId}-${eventClicked}`));
  };

  const checkExistingEvent = (eventClicked, rowId) => {
    return clickedEvents.find((event) => event.rowId === rowId && event.evento === eventClicked);
  }

  const styles = {
    typography: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
      pr: 2,
      ml: 1,
      mt: 2,
      fontWeight: 700,
      color: '#B1D2F7',
    },
    'grid-content': {
      mt: 4,
      mb: 4,
      backgroundColor: palette.common.black,
      borderRadius: 3,
      border: 0,
    },
    'grid-content__card': {
      backgroundColor: palette.common.black,
      marginTop: { xs: 2, md: 2 },
      mr: 2,
    },
  };

  return (
    <>
      <MarketContext.Provider 
        value={{ clickedEvents, clicked, setClickedEvents, setClicked, selectedChips, handleOpenAlert }}
      >
        <Container maxWidth="xl">
          <CustomAlert 
            open={alertOpen} 
            message={alertMessage} 
            onClose={handleCloseAlert} 
          />

          <Grid container>
            <Typography variant="body2" sx={styles.typography}>
              <SportsSoccerTwoToneIcon sx={{ color: palette.primary.main, mr: 2 }} />
              Próximos jogos
            </Typography>

            <Grid item xs={12} md={12} sx={styles['grid-content']}>
              <Card sx={styles['grid-content__card']}>
                <Filters />

                <Scrollbar>
                  <MarketChips 
                    defineMarketChip={defineMarketChip}
                    cleanMarketChip={cleanMarketChip}
                    selectedChips={selectedChips}
                  />

                  <MarketTable
                    activeMarket={activeMarket} 
                    concatenatedText={concatenatedText}                 
                  />
                </Scrollbar>
              </Card>
            </Grid>
          </Grid>

          <FabButton 
            clickedEvents={clickedEvents} 
            onNavigateClick={openDrawer} 
          />

          <BetDrawer
            clickedEvents={clickedEvents}
            showDrawer={isDrawerOpen}
            handleRemoveEvent={handleRemoveEvent}
          />
        </Container>
      </MarketContext.Provider>
    </>
  );
}
