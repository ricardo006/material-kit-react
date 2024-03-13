import React, { useState, useEffect } from 'react';

import { 
  Grid, 
  Typography, 
  Button, 
  ListItem, 
  ListItemText, 
  Drawer, 
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

import palette from '../../../../../../theme/palette';

import ModalConfirmBet from '../../../../../../components/modal/ModalConfirmBet';

import DrawerBetList from '../DrawerBetList/DrawerBetList';

import { fCurrency } from '../../../../../../utils/formatNumber';

export default function BetDrawer({ clickedEvents, showDrawer, handleRemoveEvent }) {
  const [totalSelections, setTotalSelections] = useState(0);
  const [betAmount, setBetAmount] = useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dataBet, setDataBet] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const anchor = isMobile ? 'bottom' : 'right';
  const drawerWidth = 400;  
  
  const styles = {
    drawer: {
      width: isMobile ? '100%' : drawerWidth, // Largura total em dispositivos móveis, largura definida em desktop
      overflowY: 'auto',
      height: '100%',
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: isMobile ? '100%' : drawerWidth, // Largura total em dispositivos móveis, largura definida em desktop
        overflowY: 'auto',
        height: '100%',
      },
    },
    drawer__grid: {
      backgroundColor: palette.primary.lighter,
      p: 3,
      mb: 2,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    'drawer__grid-typography': {
      textAlign: 'left',
      display: 'flex',
      color: palette.primary.main,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      py: 1,
    },
    'drawer__grid-grid': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    drawer__button: {
      backgroundColor: palette.primary.light,
      color: palette.primary.main,
      textTransform: 'none', // Para manter o texto "Fechar" em letras
      p: 1,
    },
    'drawer__button-confirm': {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      height: 80,
      fontSize: 16,
    },
  };

  useEffect(() => {
    if (showDrawer) setIsDrawerOpen(true);
  }, [showDrawer]);

  const calculateTotalSelections = () => {
    return clickedEvents.length;
  };

  const calculatePossibleReturns = () => {
    const totalOdds = calculateTotalOdds();
    const possibleReturns = betAmount * totalOdds;
    return possibleReturns;
  };

  const calculateTotalOdds = () => {
    const totalOdds = clickedEvents.reduce((acc, event) => {
      const { evento: eventType } = event; // Obtém o tipo de evento (Casa, Empate, Fora, etc.)

      let oddKey;

      switch (eventType) {
        case 'Casa':
          oddKey = 'oddCasa';
          break;
        case 'Empate':
          oddKey = 'oddEmpate';
          break;
        case 'Fora':
          oddKey = 'oddFora';
          break;
        case 'Casa ou Empate':
          oddKey = 'odd1x';
          break;
        case 'Casa ou Fora':
          oddKey = 'odd12';
          break;
        case 'Fora ou Empate':
          oddKey = 'odd2x';
          break;
        default:
          break;
      }

      const odd = event[oddKey];

      if (typeof odd === 'number' && !Number.isNaN(odd) && odd > 0.0001) {
        return acc * odd;
      }

      return acc;
    }, 1);
    // corrigir esse retorno de 1
    return totalOdds;
  };

  useEffect(() => {
    setTotalSelections(calculateTotalSelections());
  }, [clickedEvents]);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleClickOpenModal = () => {
    const newData = ['Item 1', 'Item 2', 'Item 3'];
    setDataBet(newData);
    setIsModalOpen(true);
  };

  return (
    <>
      <Drawer anchor={anchor} open={isDrawerOpen} onClose={closeDrawer} sx={styles.drawer}>
        <Grid container sx={styles.drawer__grid}>
          <Grid item xs={8}>
            <Typography variant="h6" sx={styles['drawer__grid-typography']}>
              Cupom de Aposta{''}
            </Typography>

            <Typography variant="body2" sx={{ color: palette.primary.dark }}>
              {totalSelections > 1
                ? `Múltipla: ${totalSelections} seleções`
                : totalSelections === 1
                ? 'Simples: 1 seleção'
                : ''}
            </Typography>
          </Grid>

          <Grid item xs={4} sx={styles['drawer__grid-grid']}>
            <Button
              sx={styles.drawer__button}
              onClick={closeDrawer}
            >
              <HighlightOffTwoToneIcon />
              <Typography variant="body2" sx={{ ml: 1, fontWeight: 600 }}>
                Fechar
              </Typography>
            </Button>
          </Grid>
        </Grid>

        <DrawerBetList 
          clickedEvents={clickedEvents} 
          handleRemoveEvent={handleRemoveEvent}
        />

        <ListItem>
          <ListItemText
            primary={
              <TextField
                sx={{ mt: 2 }}
                label="Valor da Aposta"
                variant="outlined"
                fullWidth
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(parseFloat(e.target.value))}
              />
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText primary={`Odds Totais: ${calculateTotalOdds().toFixed(2)}`} />
        </ListItem>

        <ListItem sx={{ mb: 2 }}>
          <ListItemText
            primary={`Possíveis Retornos: R$ ${
              fCurrency(Number.isNaN(calculatePossibleReturns())) 
                ? '' 
                : calculatePossibleReturns().toFixed(2)
            }`}
          />
        </ListItem>

        <div>
          <Button 
            onClick={handleClickOpenModal} 
            variant="contained" 
            fullWidth 
            sx={styles['drawer__button-confirm']}
          >
            Confirmar Aposta
          </Button>

          <ModalConfirmBet
            data={dataBet}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </Drawer>
    </>
  );
}
