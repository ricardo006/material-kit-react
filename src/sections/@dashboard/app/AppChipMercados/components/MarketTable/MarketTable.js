import React, { useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { 
  Chip,
  Grid, 
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow 
} from '@mui/material';

import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';
import StarOutlineTwoToneIcon from '@mui/icons-material/StarOutlineTwoTone';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';

import { fDecimal } from '../../../../../../utils/formatNumber';

import palette from '../../../../../../theme/palette';

import { MarketContext } from '../../Context';

import MainMarketsTableCell from '../MainMarketsTableCell/MainMarketsTableCell';
import FinalResultTableCell from '../FinalResultTableCell/FinalResultTableCell';
import DoubleChanceTableCell from '../DoubleChanceTableCell/DoubleChanceTableCell';

import { MARKET_ROWS_DATA } from '../../../../../../_mock/football';

export default function MarketTable({ activeMarket, concatenatedText }) {
  const navigate = useNavigate();

  const { 
    clickedEvents, 
    clicked, 
    setClickedEvents, 
    setClicked, 
    selectedChips, 
    handleOpenAlert 
  } = useContext(MarketContext);

  const [selected, setSelected] = useState([]);
  const [iconTypes, setIconTypes] = useState(MARKET_ROWS_DATA.map(() => 'star'));

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    const updatedIconTypes = [...iconTypes];
    let newSelected;

    if (selectedIndex === -1) {
      newSelected = [...selected, id];
    } else {
      newSelected = selected.filter((item) => item !== id);
    }

    setSelected(newSelected);

    updatedIconTypes[id - 1] = updatedIconTypes[id - 1] === 'star' ? 'grade' : 'star';
    setIconTypes(updatedIconTypes);
  };

  const handleClickEvent = (
    rowId, 
    eventClicked, 
    timeCasa, 
    timeFora, 
    oddCasa, 
    oddEmpate, 
    oddFora, 
    odd1x, 
    odd12, 
    odd2x
  ) => {
    const existingEvent = checkExistingEvent(eventClicked, rowId);

    const sameExistingEventId = checkSameExistingEventId(eventClicked, rowId);

    if (existingEvent) {
      setClickedEvents((prevEventos) =>
        prevEventos.filter((event) => !(event.rowId === rowId && event.evento === eventClicked))
      );

      setClicked((prevClicadas) => prevClicadas.filter((id) => id !== `${rowId}-${eventClicked}`));
    } else if (sameExistingEventId) {
      handleOpenAlert('Não foi possível adicionar, já existe escolha neste evento.');
    } else {
      setClickedEvents((prevEventos) => [
        ...prevEventos,
        {
          rowId,
          eventClicked,
          oddCasa,
          oddEmpate,
          oddFora,
          timeCasa,
          timeFora,
          odd1x,
          odd12,
          odd2x,
        },
      ]);

      setClicked((prevClicadas) => [...prevClicadas, `${rowId}-${eventClicked}`]);
    }
  };

  const checkExistingEvent = (eventClicked, rowId) => {
    return clickedEvents.find((event) => event.rowId === rowId && event.evento === eventClicked);
  }

  const checkSameExistingEventId = (eventClicked, rowId) => {
    return clickedEvents.find((event) => event.rowId === rowId && event.evento !== eventClicked);
  }

  const handleClickRow = (id) => {
    navigate('/dashboard/match', { replace: true });
  };

  const styles = {
    'scrollbar__table-cell': {
      backgroundColor: palette.primary.lighter,
      color: palette.primary.main,
      fontWeight: 'bold',
    },
    'scrollbar__table-row': {
      backgroundColor: palette.common.black,
      m: 0,
      cursor: 'pointer',
    },
    'table-cell__star': {
      textAlign: 'center',
      cursor: 'pointer',
    },
    'table-cell__time': {
      backgroundColor: palette.grey[200],
      color: palette.primary.main,
      fontWeight: 600,
    },
    'table-cell__scoreboard': {
      backgroundColor: palette.common.black,
      textAlign: 'center',
      p: 2,
      minWidth: 70,
    },
    'table-cell__score': {
      color: palette.primary.main,
      fontSize: 16,
      fontWeight: 'bold',
    },
    'table-cell__text': {
      textAlign: 'center',
      cursor: 'pointer',
      width: { xs: 40, md: 200 },
      backgroundColor: 'transparent',
      color: '#6FA9EB',
    },
    'table-cell__text--clicked': {
      backgroundColor: palette.primary.lighter,
      color: palette.primary.dark,
    },
    'table-cell__odd': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontWeight: 'bold',
      backgroundColor: palette.primary.lighter,
      color: palette.primary.main,
    },
    'table-cell__odd--clicked': {
      backgroundColor: palette.primary.main,
      color: palette.primary.lighter,
    },
  };

  return (
    <MarketContext.Provider 
      value={{ styles, TableCell, Grid, Chip, Typography, handleClickEvent, fDecimal, clicked }}
    >
      <TableContainer sx={{ minWidth: 900 }}>
        <Table sx={{ borderCollapse: 'collapse' }}>
          <TableRow style={{ height: 53 }}>
            <TableCell colSpan={12} sx={styles['scrollbar__table-cell']}>
              <Typography variant="subtitle">
                {concatenatedText || 'Campeonato'}
              </Typography>
            </TableCell>
          </TableRow>

          <TableBody sx={{ border: 0 }}>
            {activeMarket !== null ? (
              MARKET_ROWS_DATA.map((row, index) => {
                const {
                  tempoJogo,
                  timeCasa,
                  timeFora,
                  placarCasa,
                  placarFora,
                  oddCasa,
                  oddEmpate,
                  oddFora,
                  odd1x,
                  odd12,
                  odd2x,
                } = row;
                const id = index + 1;
                const selectedUser = selected.indexOf(id) !== -1;
                const iconType = iconTypes[id - 1];

                return (
                  <TableRow 
                    hover key={id} 
                    tabIndex={-1} 
                    role="checkbox" 
                    sx={styles['scrollbar__table-row']}
                  >
                    <TableCell
                      padding="checkbox"
                      sx={{
                        ...styles['table-cell__star'],
                        color: iconType !== 'star' ? palette.primary.main : '#6FA9EB',
                        backgroundColor: iconType !== 'star' ? palette.common.black : palette.common.black,
                      }}
                    >
                      {iconType === 'star' ? (
                        <StarOutlineTwoToneIcon 
                          checked={selectedUser} 
                          onClick={(event) => handleClick(event, id)} 
                        />
                      ) : (
                        <GradeTwoToneIcon
                          sx={{ color: palette.primary.main }}
                          checked={selectedUser}
                          onClick={(event) => handleClick(event, id)}
                        />
                      )}
                    </TableCell>

                    <TableCell
                      onClick={() => handleClickRow(id)}
                      component="th"
                      scope="row"
                      padding="none"
                      sx={{
                        width: { xs: '60px', md: '100px' },
                        textAlign: 'center',
                      }}
                    >
                      <Chip
                        label={`${tempoJogo} '`}
                        icon={<AlarmOutlinedIcon />}
                        onClick={handleClick}
                        sx={styles['table-cell__time']}
                      />
                    </TableCell>

                    <TableCell
                      onClick={() => handleClickRow(id)}
                      align="left"
                      sx={{ width: { xs: 200, md: 400 }, fontWeight: 'bold' }}
                    >
                      <Typography variant="subtitle2" noWrap>
                        {timeCasa}
                      </Typography>

                      <Typography variant="subtitle2" noWrap>
                        {timeFora}
                      </Typography>
                    </TableCell>

                    <TableCell 
                      onClick={() => handleClickRow(id)} 
                      align="left" 
                      sx={styles['table-cell__scoreboard']}
                    >
                      <Typography variant="body2" noWrap sx={styles['table-cell__score']}>
                        {placarCasa}
                      </Typography>

                      <Typography variant="body2" noWrap sx={styles['table-cell__score']}>
                        {placarFora}
                      </Typography>
                    </TableCell>

                    {activeMarket.toString() === 'Principais mercados' &&
                      Array.isArray(selectedChips) &&
                      selectedChips.length === 1 &&
                      selectedChips[0] === 1 ? (

                        <MainMarketsTableCell 
                          id={id}
                          timeCasa={timeCasa}
                          timeFora={timeFora}
                          oddCasa={oddCasa}
                          oddEmpate={oddEmpate}
                          oddFora={oddFora}
                        />

                      ) 
                      : activeMarket.toString() === 'Resultado Final' &&
                        Array.isArray(selectedChips) &&
                        selectedChips.length === 1 &&
                        selectedChips[0] === 2 ? (

                          <FinalResultTableCell 
                            id={id}
                            timeCasa={timeCasa}
                            timeFora={timeFora}
                            oddCasa={oddCasa}
                            oddEmpate={oddEmpate}
                            oddFora={oddFora}
                          />
                        
                      ) 
                      : activeMarket.toString() === 'Dupla Chance' &&
                        Array.isArray(selectedChips) &&
                        selectedChips.length === 1 &&
                        selectedChips[0] === 3 ? (

                          <DoubleChanceTableCell 
                            id={id}
                            timeCasa={timeCasa}
                            timeFora={timeFora}
                            oddCasa={oddCasa}
                            oddEmpate={oddEmpate}
                            oddFora={oddFora}
                            odd12={odd12}
                            odd1x={odd1x}
                            odd2x={odd2x}
                          />

                      ) : ('')
                    }

                    <TableCell align="center">
                      {selectedChips}
                      <p>{`market: ${activeMarket}`}</p>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow style={{ height: 53 }}>
                <TableCell colSpan={12}>
                  <Typography variant="subtitle1">
                    Nenhuma opção disponível
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </MarketContext.Provider>
  );
}
