import React from 'react';

import { Grid, Typography, IconButton, List, ListItem } from '@mui/material';

import SportsSoccerTwoToneIcon from '@mui/icons-material/SportsSoccerTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

import Scrollbar from '../../../../../../components/scrollbar/Scrollbar';

import { fDecimal } from '../../../../../../utils/formatNumber';

export default function DrawerBetList({ clickedEvents, handleRemoveEvent }) {
  const styles = {
    drawer__list: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    'drawer__list-item': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      p: 2,
      width: '92%',
      border: '0.5px solid rgba(0, 0, 0, 0.2)',
      mb: 2,
      borderRadius: 3,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    },
    'drawer__icon-button': {
      mr: 1,
      mb: 2,
      textAlign: 'center',
      color: '#FF99AC',
    },
    'drawer__list-typography': {
      fontSize: 14,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#6FA9EB',
    },
  };

  return (
    <Scrollbar sx={{ overflowY: 'auto', height: '100%' }}>
      <List sx={styles.drawer__list}>
        {clickedEvents.map((event, index) => (
          <ListItem sx={styles['drawer__list-item']} key={index}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={1}>
                <SportsSoccerTwoToneIcon />
              </Grid>

              <Grid item xs={9}>
                <Typography 
                  variant="body1" 
                  sx={{ mb: 1, fontSize: 15, fontWeight: 600 }}
                >
                  {event.timeCasa} X {event.timeFora}
                </Typography>
              </Grid>

              <Grid item xs={2} key={event.rowId}>
                <IconButton
                  className="lixeira-button"
                  sx={styles['drawer__icon-button']}
                  onClick={() => handleRemoveEvent(event.rowId, event.evento)}
                >
                  <DeleteTwoToneIcon />
                </IconButton>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle" sx={styles['drawer__list-typography']}>
                  {event.evento === 'Casa'
                    ? `Vencedor da partida: ${event.timeCasa}`
                    : event.evento === 'Empate'
                    ? `Vencedor da partida: ${event.evento}`
                    : event.evento === 'Fora'
                    ? `Vencedor da partida: ${event.timeFora}`
                    : event.evento === 'Casa ou Fora'
                    ? `Dupla Chance: ${event.timeCasa} ou ${event.timeFora}`
                    : event.evento === 'Casa ou Empate'
                    ? `Dupla Chance: ${event.timeCasa} ou Empate`
                    : event.evento === 'Fora ou Empate'
                    ? `Dupla Chance: ${event.timeFora} ou Empate`
                    : ''}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle" sx={styles['drawer__list-typography']}>
                  {event.evento === 'Casa'
                    ? `Odd: ${fDecimal(event.oddCasa)}`
                    : event.evento === 'Empate'
                    ? `Odd: ${fDecimal(event.oddEmpate)}`
                    : event.evento === 'Fora'
                    ? `Odd: ${fDecimal(event.oddFora)}`
                    : event.evento === 'Casa ou Fora'
                    ? `Odd: ${event.odd12}`
                    : event.evento === 'Casa ou Empate'
                    ? `Odd: ${event.odd1x}`
                    : event.evento === 'Fora ou Empate'
                    ? `Odd: ${event.odd2x}`
                    : ''}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Scrollbar>
  );
}
