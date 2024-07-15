import React from 'react';

import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import { Typography, Container, Grid, Chip, List, ListItem, Stack } from '@mui/material';

import Scrollbar from '../../../components/scrollbar';

import bgEvents from '../../../illustrations/bgEvent4.jpg';

import { fDecimal } from '../../../utils/formatNumber';

import { FOOTBALL_EVENTS } from '../../../_mock/football';

import palette from '../../../theme/palette';

export default function BannersEvents() {
  const styles = {
    chip: {
      marginTop: 2,
      marginRight: 1,
      width: '100%',
      backgroundColor: 'rgb(100 125 153 / 50%)',
      color: palette.common.white,
      border: 0,
      fontWeight: 600,
      fontSize: 12,
      cursor: 'pointer',
    },
    typography: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
      pr: 2,
      ml: 1,
      mt: 2,
      fontWeight: 700,
      color: '#B1D2F7',
    },
    'list-item': {
      height: 150,
      width: 280,
      borderRadius: 2,
      m: 1,
      p: 2,
      boxShadow: 'rgba(0, 1, 2, 0.24) 0px 5px 9px',
      backgroundImage: `url(${bgEvents})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    'list-item__grid': {
      p: 0,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      textAlign: 'left',
    },
    'list-item__title': {
      mt: 0.4,
      fontWeight: 700,
      backgroundColor: 'transparent',
    },
    'list-item__datetime': {
      mt: 1,
      marginRight: 2,
      width: '100%',
      backgroundColor: 'transparent',
    },
    'list-item__odd': {
      display: 'flex',
      alignItems: 'center',
      pb: 1,
    },
  };

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Grid spacing={2}>
              <Typography variant="body2" sx={styles.typography}>
                <EmojiEventsTwoToneIcon sx={{ color: palette.primary.main, mr: 2 }} />
                Destaques
              </Typography>

              <Scrollbar>
                <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 2 }}>
                  {FOOTBALL_EVENTS.map((event) => (
                    <List key={event.id} sx={{ alignItems: 'center' }}>
                      <ListItem sx={styles['list-item']}>
                        <Grid style={styles['list-item__grid']}>
                          <Chip label={`${event.timeCasa} x ${event.timeFora}`} sx={styles['list-item__title']} />

                          <Chip label={`${event.data} | ${event.horario}`} sx={styles['list-item__datetime']} />

                          <div style={styles['list-item__odd']}>
                            <Chip spacing={2} label={`${fDecimal(event.oddCasa)}`} sx={styles.chip} />
                            <Chip spacing={2} label={`${fDecimal(event.oddEmpate)}`} sx={styles.chip} />
                            <Chip spacing={2} label={`${fDecimal(event.oddFora)}`} sx={styles.chip} />
                          </div>
                        </Grid>
                      </ListItem>
                    </List>
                  ))}
                </Stack>
              </Scrollbar>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
