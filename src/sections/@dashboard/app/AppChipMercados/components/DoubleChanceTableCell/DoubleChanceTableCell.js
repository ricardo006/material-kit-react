import React, { useContext } from 'react';

import { MarketContext } from '../../Context';

export default function DoubleChanceTableCell({ 
  id, 
  timeCasa,
  timeFora,
  oddCasa,
  oddEmpate,
  oddFora,
  odd1x,
  odd12,
  odd2x
  }) {
  const { 
    clicked, 
    styles, 
    TableCell, 
    Grid, 
    Chip, 
    handleClickEvent,
    fDecimal,
  } = useContext(MarketContext);

  return (
    <>
      <TableCell
        sx={{
          ...styles['table-cell__text'],
          ...(clicked.includes(`${id}-${'Casa ou Empate'}`) ? styles['table-cell__text--clicked'] : ''),
        }}
        onClick={() => handleClickEvent(
          id, 
          'Casa ou Empate',
          timeCasa, 
          timeFora, 
          oddCasa, 
          oddEmpate, 
          oddFora, 
          odd1x, 
          odd12, 
          odd2x
        )}
      >
        <Grid 
          container 
          justifyContent="space-between" 
          alignItems="center" 
          sx={{ borderRadius: 10 }}
        >
          <Grid item>{`${timeCasa} ou Empate`}</Grid>

          <Grid item>
            <Chip
              sx={{
                ...styles['table-cell__odd'],
                ...(clicked.includes(`${id}-${'Casa ou Empate'}`) ? styles['table-cell__odd--clicked'] : ''),
              }}
              label={`${fDecimal(odd1x)}`}
            />
          </Grid>
        </Grid>
      </TableCell>

      <TableCell
        sx={{
          ...styles['table-cell__text'],
          ...(clicked.includes(`${id}-${'Casa ou Fora'}`) ? styles['table-cell__text--clicked'] : ''),
        }}
        onClick={() => handleClickEvent(
          id, 
          'Casa ou Fora', 
          timeCasa, 
          timeFora, 
          oddCasa, 
          oddEmpate,
          oddFora, 
          odd1x, 
          odd12, 
          odd2x
        )}
      >
        <Grid 
          container 
          justifyContent="space-between" 
          alignItems="center" 
          sx={{ borderRadius: 10 }}
        >
          <Grid item>
            <Grid item>{`${timeCasa} ou ${timeFora}`}</Grid>
          </Grid>

          <Grid item>
            <Chip
              sx={{
                ...styles['table-cell__odd'],
                ...(clicked.includes(`${id}-${'Casa ou Fora'}`) ? styles['table-cell__odd--clicked'] : ''),
              }}
              label={`${fDecimal(odd12)}`}
            />
          </Grid>
        </Grid>
      </TableCell>

      <TableCell
        sx={{
          ...styles['table-cell__text'],
          ...(clicked.includes(`${id}-${'Fora ou Empate'}`) ? styles['table-cell__text--clicked'] : ''),
        }}
        onClick={() => handleClickEvent(
          id, 
          'Fora ou Empate', 
          timeCasa, 
          timeFora, 
          oddCasa, 
          oddEmpate, 
          oddFora, 
          odd1x, 
          odd12, 
          odd2x
        )}
      >
        <Grid 
          container 
          justifyContent="space-between" 
          alignItems="center" 
          sx={{ borderRadius: 10 }}
        >
          <Grid item>{`${timeFora} ou Empate`}</Grid>

          <Grid item>
            <Chip
              sx={{
                ...styles['table-cell__odd'],
                ...(clicked.includes(`${id}-${'Fora ou Empate'}`) ? styles['table-cell__odd--clicked'] : ''),
              }}
              label={`${fDecimal(odd2x)}`}
            />
          </Grid>
        </Grid>
      </TableCell>
    </>
  );
}
