import React from 'react';
import { useNavigate } from 'react-router-dom';

import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import AlbumTwoToneIcon from '@mui/icons-material/AlbumTwoTone';

import { Button, Container, Grid } from '@mui/material';

export default function SoccerOptions() {
  const navigate = useNavigate();

  const handleClickNextGames = () => {
    navigate('proximosjogos', { replace: true });
  };

  const handleClickLive = () => {
    navigate('aovivo', { replace: true });
  };

  const styles = {
    buttons: {
      display: 'flex',
      gap: '1rem',
    },
    button: {
      width: {
        xs: 'calc(50% - 8px)',
        sm: 'calc(50% - 8px)',
      },
      mb: 2,
    },
  };

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Grid spacing={2}>
              <Grid container spacing={2}>
                <Grid sx={styles.buttons} item xs={12} sm={6} md={6}>
                  <Button
                    variant="outlined"
                    startIcon={<AccessTimeTwoToneIcon />}
                    sx={styles.button}
                    onClick={handleClickNextGames}
                  >
                    Próximos Jogos
                  </Button>

                  <Button
                    variant="outlined"
                    startIcon={<AlbumTwoToneIcon />}
                    sx={styles.button}
                    onClick={handleClickLive}
                  >
                    Ao Vivo
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
