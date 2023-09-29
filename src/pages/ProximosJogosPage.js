import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { ProximosJogosSort, ProximosJogosList, ProximosJogosWidget,  ProximosJogosFilterSidebar } from '../sections/@dashboard/proximosjogos';
// mock
import PRODUCTS from '../_mock/products';



export default function ProximosJogosPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Próximos Jogos | Betspace </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Próximos Jogos
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProximosJogosFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProximosJogosSort />
          </Stack>
        </Stack>

        <ProximosJogosList />
        <ProximosJogosWidget />
      </Container>
    </>
  );
}
