import React from 'react';

import {
  Grid,
  Typography,
} from '@mui/material';

import palette from '../../../../../../theme/palette';

export default function FilterTitle({ Icon, title }) {
  const styles = {
    typography: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
      pr: 2,
      ml: 1,
      mt: 2,
      color: palette.primary.main,
      fontSize: 12,
    },
  };

  return (
    <Grid item xs={12} sm={12} md={12}>
      <Typography
        variant="body2"
        sx={styles.typography}
      >
        <Icon sx={{ color: palette.primary.main, mr: 2 }} />

        { title }
      </Typography>
    </Grid>
  );
}
