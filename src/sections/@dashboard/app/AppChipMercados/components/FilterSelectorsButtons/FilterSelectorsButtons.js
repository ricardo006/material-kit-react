import React, { useState, useEffect } from 'react';

import { Grid, Button } from '@mui/material';

import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import SportsSoccerTwoToneIcon from '@mui/icons-material/SportsSoccerTwoTone';

export default function FilterSelectorsButtons({ sendSelectedTab }) {
  const [selectedTab, setSelectedTab] = useState(false);

  const styles = {
    'buttons': {
      display: 'flex', 
      gap: '0.5rem', 
      mt: 2
    },
  };

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  useEffect(() => {
    sendSelectedTab(selectedTab);
  }, [selectedTab]);

  return (
    <Grid item xs={12} md={12} sx={styles.buttons}>
      <Button 
        variant="contained" 
        startIcon={<PublicTwoToneIcon />} 
        onClick={() => handleTabChange(0)}
      >
        Países
      </Button>

      <Button 
        variant="contained" 
        startIcon={<SportsSoccerTwoToneIcon />} 
        onClick={() => handleTabChange(1)}
      >
        Ligas
      </Button>
    </Grid>
  );
}
