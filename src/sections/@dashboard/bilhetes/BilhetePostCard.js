import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { fDate } from '../../../utils/formatTime';

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});


const StyledAvatar = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

const StyledInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled,
}));

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const clientId = 'nsFLNPBrUItYQGSbu9PjGcOcbMoIlhP3draLr6oJKv8';
const searchQuery = 'soccer';
const apiUrl = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${clientId}`;

const BilhetePostCard = ({ index, post }) => {
  const [photoUrl, setPhotoUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results.length > 0) {
          const photoIndex = index % data.results.length;
          const smallPhotoUrl = data.results[photoIndex].urls.small;
          setPhotoUrl(smallPhotoUrl);
        } else {
          console.error('Nenhuma foto disponível');
        }
      } catch (error) {
        console.error('Erro ao obter fotos:', error);
      }
    };

    fetchData();
  }, [index]);

  const {
    id,
  } = post;

  const latestPost = 0;

  return (
    <Grid item xs={12} sm={3} md={3}>
      <Card sx={{ position: 'relative' }}>
        <StyledCardMedia
          sx={{
            ...((latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            pt: {
              xs: 'calc(100% * 3 / 3)',
              sm: 'calc(100% * 3 / 3)',
            },
          }}
        >
          <StyledCover alt={`Bilhete ${id}`} src={photoUrl} />
          <StyledAvatar alt={`Usuário ${post.id}`} src={photoUrl} />
        </StyledCardMedia>

        <CardContent
          sx={{
            pt: 2,
            ...((latestPost) && {
              bottom: 5,
              width: '100%',
              position: 'absolute',
            }),
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Bilhete #{id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Possível Retorno: {post.possivel_retorno}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quantidade de Seleções: {post.qtd_selecoes}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Venda ID: {post.venda_id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Criado em: {fDate(post.data_criacao)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

BilhetePostCard.propTypes = {
  index: PropTypes.number.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    possivel_retorno: PropTypes.string.isRequired,
    qtd_selecoes: PropTypes.number.isRequired,
    venda_id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    data_criacao: PropTypes.string,
    hora_criacao: PropTypes.string,
    venda: PropTypes.shape({
      id: PropTypes.number.isRequired,
      id_usuario: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default BilhetePostCard;
