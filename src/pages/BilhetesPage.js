import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography, CircularProgress } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { BilhetePostCard, BilhetePostsSort, BilhetePostsSearch } from '../sections/@dashboard/bilhetes';
// mock
import { getMeusBilhetes } from '../services/meusBilhetes';

const SORT_OPTIONS = [
  { value: 'all', label: 'Todos' },
  { value: 'popular', label: 'Mais populares' },
  { value: 'oldest', label: 'Oldest' },
];

export default function BilhetesPage() {
  const [bilhetes, setBilhetes] = useState([]);

  useEffect(() => {
    const fetchBilhetes = async () => {
      try {
        // Utilize a função getMeusBilhetes para obter os dados reais dos bilhetes
        const response = await getMeusBilhetes();

        // Verifica se a resposta tem a propriedade 'bilhetes' e se é uma array
        if (response && Array.isArray(response.bilhetes)) {
          setBilhetes(response.bilhetes);
        } else {
          console.warn('Resposta inválida ou nenhum bilhete encontrado.');
        }
      } catch (error) {
        // Trate os erros conforme necessário
        console.error('Erro ao obter os bilhetes:', error);
      }
    };

    fetchBilhetes();
  }, []);

  console.log(bilhetes)
  const handleButtonClick = () => {
    alert('teste');
  };

  return (
    <>
      <Helmet>
        <title> Bilhetes | Betspace </title>
      </Helmet>

      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Bilhetes
          </Typography>
          <Button variant="contained" onClick={handleButtonClick} startIcon={<Iconify icon="eva:plus-fill" />}>
            Criar Venda de Bilhete
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BilhetePostsSearch />
          <BilhetePostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={2}>
          {bilhetes.map((bilhete, index) => (
            <BilhetePostCard key={bilhete.id} index={index} post={bilhete} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

