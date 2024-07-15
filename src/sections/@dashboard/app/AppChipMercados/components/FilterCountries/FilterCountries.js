import React, { useState, useEffect } from 'react';

import { Grid, Typography, Stack, Chip, Avatar } from '@mui/material';

import Scrollbar from '../../../../../../components/scrollbar/Scrollbar';

import palette from '../../../../../../theme/palette';

import GetCountries from '../../../../../../api/GetCountries';

export default function FilterCountries({ sendSelectedCountryId }) {
  const [selectedCountryId, setSelectedCountryId] = useState(null);

  const selectCountry = (countryId) => {
    setSelectedCountryId(countryId);
  };

  useEffect(() => {
    sendSelectedCountryId(selectedCountryId);
  }, [selectedCountryId]);

  const styles = {
    'card-content__typography': {
      textAlign: 'left',
      color: palette.primary.main,
      fontWeight: 600,
    },
  };

  const countriesData = GetCountries();

  // useEffect para fazer requisição só quando a página for carregada
  useEffect(() => {
    if (countriesData.length) {
      console.log(countriesData);
    }
  }, [countriesData]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Typography variant="body2" sx={styles['card-content__typography']}>
          Selecione os países ({countriesData?.length ?? 0})
        </Typography>

        <Scrollbar>
          <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 2 }}>
            {countriesData ? (
              countriesData.map((country) => (
                <Chip
                  key={country.country_id}
                  avatar={<Avatar alt="Countries" src={country.country_logo} />}
                  label={country.country_name ?? ''}
                  sx={styles['card-content__chip']}
                  onClick={() => selectCountry(country.country_id)}
                />
              ))
            ) : (
              <p>Carregando dados...</p>
            )}
          </Stack>
        </Scrollbar>
      </Grid>
    </Grid>
  );
}
