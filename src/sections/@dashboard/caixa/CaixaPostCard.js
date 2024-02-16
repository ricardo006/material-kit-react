import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent } from '@mui/material';

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
  height: '100%',
});

const StyledTitle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

CaixaPostCard.propTypes = {
  caixas_values: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function CaixaPostCard({ post, index }) {
  const { cover, title, view, comment, share, author, createdAt, saldo } = post;
  const latestPost = index <= post.length;

  const POST_INFO = [
    { number: comment, icon: 'eva:message-circle-fill' },
    { number: view, icon: 'eva:eye-fill' },
    { number: share, icon: 'eva:share-fill' },
  ];

  return (
    <Grid item xs={12} sm={6} md={index === 0 ? 3 : 3}>
      <Card>
        <StyledCardMedia sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <StyledCover alt={title} src={cover} />
        </StyledCardMedia>

        <CardContent
          sx={{
            pt: 4,
            ...(index <= 7 && {
              bottom: 0,
              width: '100%',
              position: 'absolute',
              cursor: 'pointer',
              color: 'white',
              padding: '16px',
            }),
          }}
        >
          <Typography gutterBottom variant="caption" sx={{ color: 'text.success', display: 'block', fontSize: 26, fontWeight: 600 }}>
            {title}
          </Typography>

          <StyledTitle
            color="inherit"
            variant="subtitle2"
            underline="hover"
            sx={{
              ...((latestPost) && {
                color: 'common.white',
              }),
            }}
          >
            {saldo}
          </StyledTitle>
        </CardContent>
      </Card>
    </Grid >
  );
}
