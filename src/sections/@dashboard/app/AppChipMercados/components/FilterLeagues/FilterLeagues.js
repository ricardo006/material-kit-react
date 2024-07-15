import React, { useState } from 'react';

import { Grid, Typography, Stack, Chip, Avatar } from '@mui/material';

import Scrollbar from '../../../../../../components/scrollbar/Scrollbar';

import Competitions from '../../../../../../api/Competitions';

import palette from '../../../../../../theme/palette';

export default function FilterLeagues({ selectedCountryId }) {
  const [competitionsData, setCompetitionsData] = useState([]);
  const [showCompetitionsApi, setShowCompetitionsApi] = useState(true);

  const onDataUpdateCompetitions = (data) => {
    setCompetitionsData(data);

    if (data?.error === 404) setShowCompetitionsApi(false);
  };

  const styles = {
    'card-content__typography': {
      textAlign: 'left',
      color: palette.primary.main,
      fontWeight: 600,
    },
  };

  return (
    <Grid spacing={3} sx={{ mt: 2 }}>
      <Grid item xs={12} md={12}>
        <Typography variant="body2" sx={styles['card-content__typography']}>
          Selecione as ligas ({competitionsData.length})
        </Typography>

        {showCompetitionsApi ? (
          <Competitions 
            countryId={selectedCountryId} 
            onDataUpdateCompetitions={onDataUpdateCompetitions} 
          />
        ) : null}

        <Scrollbar>
          <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 2 }}>
            {competitionsData !== null && competitionsData.length ? (
              competitionsData.map((league) => (
                <Chip
                  avatar={
                    league.country_logo ? (
                      <Avatar 
                        sx={{ color: palette.primary.dark }} 
                        alt="Leagues" 
                        src={league.country_logo}
                      />
                    ) : (
                      <Avatar 
                        sx={{ color: palette.primary.dark }} 
                        alt="Leagues"
                      >
                        {league.league_name[0]}
                      </Avatar>
                    )
                  }
                  key={league.league_id}
                  label={league.league_name}
                  sx={styles['card-content__chip']}
                />
              ))
            ) : (
              <p>Carregando dados...({selectedCountryId})</p>
            )}
          </Stack>
        </Scrollbar>
      </Grid>
    </Grid>
  );
}
