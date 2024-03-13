import React, { useState, useEffect } from 'react';

import { Grid, Button } from '@mui/material';

import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';

import { NEXT_HOURS_BUTTONS } from './constants';

export default function FilterHoursButtons({ sendSelectedTab }) {
  const [selectedTab, setSelectedTab] = useState(false);

  const styles = {
    button: {
      textAlign: 'left',
      ml: 1,
      mt: 2,
      boxShadow: 'none',
      fontSize: 12,
      minWidth: 100,
      width: '100%',
    },
  };

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  useEffect(() => {
    sendSelectedTab(selectedTab);
  }, [selectedTab]);

  return (
    <Grid container spacing={2}>
      {NEXT_HOURS_BUTTONS.map((button, index) => (
        <Grid item xs={6} sm={4} md={button.md} key={index}>
          <Button
            variant="contained"
            startIcon={<AccessTimeTwoToneIcon />}
            onClick={() => handleTabChange(button.tab)}
            sx={{
              ...styles.button,
              minWidth: button.minWidth,
            }}
          >
            {button.title}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
