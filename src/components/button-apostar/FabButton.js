import React, { useState, useEffect } from 'react';

import AutoAwesomeMotionTwoToneIcon from '@mui/icons-material/AutoAwesomeMotionTwoTone';

import { Fab, Grid, Typography } from '@mui/material';

import palette from '../../theme/palette';

function FabButton({ clickedEvents, onNavigateClick }) {
  const [totalSelections, setTotalSelections] = useState(0);

  const calculateTotalSelecoes = () => {
    return clickedEvents.length;
  };

  useEffect(() => {
    setTotalSelections(calculateTotalSelecoes());
  }, [clickedEvents]);

  const styles = {
    'bet-container': {
      position: 'fixed',
      bottom: 16,
      right: 16,
    },
    bet__button: {
      backgroundColor: palette.primary.main,
      '&:hover': {
        backgroundColor: palette.primary.lighter,
        color: palette.primary.main,
      },
      color: palette.primary.lighter,
    },
  };

  return (
    <>
      {totalSelections > 0 && (
        <Grid item xs={12} md={12} sx={styles['bet-container']}>
          <Fab onClick={onNavigateClick} variant="extended" sx={styles.bet__button}>
            <AutoAwesomeMotionTwoToneIcon sx={{ mr: 1 }} />

            <Typography sx={{ fontWeight: 600 }}>
              Apostar {totalSelections > 1 ? `${totalSelections} seleções` : totalSelections === 1 ? '1 seleção' : ''}
            </Typography>
          </Fab>
        </Grid>
      )}
    </>
  );
}

export default FabButton;
