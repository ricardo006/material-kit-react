import React from 'react';

import { Stack, Chip } from '@mui/material';

import Scrollbar from '../../../../../../components/scrollbar/Scrollbar';

import palette from '../../../../../../theme/palette';

import { MARKET_DATA } from '../../../../../../_mock/football';

export default function MarketChips({ defineMarketChip, cleanMarketChip, selectedChips }) {
  const handleMarketClick = (market, idChip) => {
    if (selectedChips.includes(idChip)) {
      cleanMarketChip();
      return;
    } 

    defineMarketChip(market, idChip);
  };

  const styles = {
    chip: {
      cursor: 'pointer',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: palette.primary.lighter,
        color: palette.primary.dark,
      },
    }
  };

  return (
    <Scrollbar>
      <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 2, p: 2 }}>
        {MARKET_DATA.map((market) => (
          <Chip
            key={market.id}
            label={market.label}
            color={market.color}
            variant={selectedChips.includes(market.id) ? 'outlined' : 'filled'}
            sx={{
              ...styles.chip,
              backgroundColor: selectedChips.includes(market.id) 
                ? palette.primary.lighter 
                : palette.primary.lighter,
              color: selectedChips.includes(market.id) 
                ? palette.primary.main 
                : palette.primary.dark,
            }}
            onClick={() => handleMarketClick(market.label, market.id)}
          />
        ))}
      </Stack>
    </Scrollbar>
  );
}
