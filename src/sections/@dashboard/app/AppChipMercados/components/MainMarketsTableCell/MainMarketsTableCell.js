import React, { useContext} from 'react';

import { MarketContext } from '../../Context';

export default function MainMarketsTableCell({ 
  id, 
  timeCasa,
  timeFora,
  oddCasa,
  oddEmpate,
  oddFora,
  }) {
  const { 
    clicked, 
    styles, 
    TableCell, 
    Grid, 
    Chip, 
    Typography, 
    handleClickEvent,
    fDecimal,
  } = useContext(MarketContext);

  return (
    <>
      <TableCell
        sx={{
          ...styles['table-cell__text'],
          ...(clicked.includes(`${id}-${'Casa'}`) ? styles['table-cell__text--clicked'] : ''),
        }}
        onClick={() => handleClickEvent(
          id, 
          'Casa',
          timeCasa, 
          timeFora, 
          oddCasa, 
          oddEmpate, 
          oddFora
        )}
      >
        <Grid 
          container 
          justifyContent="space-between" 
          alignItems="center" 
          sx={{ borderRadius: 10 }}
        >
          <Grid item>{timeCasa}</Grid>

          <Grid item>
            <Chip
              sx={{
                ...styles['table-cell__odd'],
                ...(clicked.includes(`${id}-${'Casa'}`) ? styles['table-cell__odd--clicked'] : ''),
              }}
              label={`${fDecimal(oddCasa)}`}
            />
          </Grid>
        </Grid>
      </TableCell>

      <TableCell
        sx={{
          ...styles['table-cell__text'],
          ...(clicked.includes(`${id}-${'Empate'}`) ? styles['table-cell__text--clicked'] : ''),
        }}
        onClick={() => handleClickEvent(
          id, 
          'Empate', 
          timeCasa, 
          timeFora, 
          oddCasa, 
          oddEmpate, 
          oddFora
        )}
      >
        <Grid 
          container 
          justifyContent="space-between" 
          alignItems="center" 
          sx={{ borderRadius: 10 }}
        >
          <Grid item>
            <Typography variant="body2">Empate</Typography>
          </Grid>

          <Grid item>
            <Chip
              sx={{
                ...styles['table-cell__odd'],
                ...(clicked.includes(`${id}-${'Empate'}`) ? styles['table-cell__odd--clicked'] : ''),
              }}
              label={`${fDecimal(oddEmpate)}`}
            />
          </Grid>
        </Grid>
      </TableCell>

      <TableCell
        sx={{
          ...styles['table-cell__text'],
          ...(clicked.includes(`${id}-${'Fora'}`) ? styles['table-cell__text--clicked'] : ''),
        }}
        onClick={() => handleClickEvent(
          id, 
          'Fora', 
          timeCasa, 
          timeFora, 
          oddCasa, 
          oddEmpate, 
          oddFora
        )}
      >
        <Grid 
          container 
          justifyContent="space-between" 
          alignItems="center" 
          sx={{ borderRadius: 10 }}
        >
          <Grid item>{timeFora}</Grid>

          <Grid item>
            <Chip
              sx={{
                ...styles['table-cell__odd'],
                ...(clicked.includes(`${id}-${'Fora'}`) ? styles['table-cell__odd--clicked'] : ''),
              }}
              label={`${fDecimal(oddFora)}`}
            />
          </Grid>
        </Grid>
      </TableCell>
    </>
  );
}
