import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardContent, Typography, Grid, Avatar, CircularProgress } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { fDate } from '../../../utils/formatTime';
import { useLoading } from '../../../context/LoadingContext';

const StyledCardMedia = styled('div')({
  position: 'relative',
  borderBottomLeftRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50%',  // Ajuste a altura conforme necessário
});

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '95%',
  objectFit: 'cover',
  position: 'absolute',
  padding: '10px', // Adiciona padding de 10px
  borderRadius: '20px', // Adiciona border-radius de 20px
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 62,
  height: 62,
  left: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  border: '3px solid #005f73'
}));

const StyledButtonsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 10,
});

const StyledInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(1),
  color: theme.palette.text.disabled,
}));

const profilePhotoUrl = 'https://api.unsplash.com/photos/random?query=avatar&client_id=nsFLNPBrUItYQGSbu9PjGcOcbMoIlhP3draLr6oJKv8';
const cardPhotoUrl = 'https://api.unsplash.com/photos/random?query=soccer&client_id=nsFLNPBrUItYQGSbu9PjGcOcbMoIlhP3draLr6oJKv8';

const BilhetePostCard = ({ index, post }) => {
  const [profilePhoto, setProfilePhoto] = useState('');
  const [cardPhoto, setCardPhoto] = useState('');
  const { loading, showLoading, hideLoading } = useLoading();
  const { id } = post;
  const latestPost = 0;

  useEffect(() => {
    const fetchProfilePhoto = async () => {
      // showLoading();
      try {
        const response = await fetch(profilePhotoUrl);
        const data = await response.json();
        setProfilePhoto(data.urls.small);
      } catch (error) {
        console.error('Erro ao obter foto de perfil:', error);
      } finally {
        setTimeout(() => {
          // hideLoading();
        }, 3000); // Simula o loading por 3 segundos
      }
    };

    const fetchCardPhoto = async () => {
      showLoading();
      try {
        const response = await fetch(cardPhotoUrl);
        const data = await response.json();
        setCardPhoto(data.urls.small);
      } catch (error) {
        console.error('Erro ao obter foto do card:', error);
      } finally {
        setTimeout(() => {
          hideLoading();
        }, 3000); // Simula o loading por 3 segundos
      }
    };

    fetchProfilePhoto();
    fetchCardPhoto();
  }, [index]);

  return (
    <>
      <Grid item xs={12} sm={3} md={3}>
        {loading ? (
          <CircularProgress color="primary" />
        ) : (
          <Card sx={{ position: 'relative', backgroundColor: '#023047' }}>
            <StyledCardMedia
              sx={{
                ...((latestPost) && {
                  pt: 'calc(100% * 4 / 3)',
                  '&:after': {
                    top: 10,
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
              <StyledCover alt={`Bilhete ${id}`} src={cardPhoto} />
              <StyledAvatar alt={`Usuário ${post.id}`} src={profilePhoto} />
            </StyledCardMedia>

            <CardContent
              sx={{
                pt: 1,
                ...((latestPost) && {
                  bottom: 2,
                  width: '100%',
                  position: 'absolute',
                }),
              }}
            >
              <Typography variant="h5" component="div">
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

              <StyledButtonsContainer>
                <Button fullWidth sx={{ mr: 1 }} variant="outlined" color="primary">
                  Visualizar
                </Button>
                <Button fullWidth variant="contained" color="primary">
                  Comprar
                </Button>
              </StyledButtonsContainer>
            </CardContent>
          </Card>
        )}
      </Grid>
    </>
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
