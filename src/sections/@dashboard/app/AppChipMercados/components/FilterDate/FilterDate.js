import React from 'react';

import { Grid, TextField } from '@mui/material';

export default function FilterDate({ id, label }) {
  const styles = {
    accordion__textField: {
      margin: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <Grid item xs={12} sm={6} md={6}>
      <TextField
        id={id}
        label={label}
        type="date"
        inputProps={
          {
            className: styles.accordion__textField
          }
        }
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        sx={styles.accordion__textField}
      />
    </Grid>
  );
}
