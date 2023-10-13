import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { CaixaPostCard, CaixaPostsSort, CaixaPostsSearch } from '../sections/@dashboard/caixa';
// mock
import CAIXAS from '../_mock/caixa';

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

export default function CaixaPage() {
  return (
    <>
      <Helmet>
        <title> Caixa | Betspace </title>
      </Helmet>

      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Caixa
          </Typography>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <CaixaPostsSearch posts={CAIXAS} />
          <CaixaPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={2}>
          {CAIXAS.map((post, index) => (
            <CaixaPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
