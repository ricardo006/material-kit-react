import PropTypes from 'prop-types';
import { Grid, Card, CardContent, Typography, List, ListItem } from '@mui/material';
import GetLiveOddsComments from '../../../api/GetLiveOddsComments';

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function ProductList({ products, ...other }) {
  const data = GetLiveOddsComments();

  // Função para extrair o último comentário de cada partida
  const getLastComment = (subObj) => {
    const liveCommentsArray = subObj.live_comments;
    if (liveCommentsArray.length > 0) {
      return liveCommentsArray[liveCommentsArray.length - 1].text;
    }
    return 'Nenhum comentário disponível';
  };

  return (
    <Grid container spacing={2}>
      {Object.values(data).map((subObj) => (
        <Grid key={subObj.match_id} style={{ margin: '10px', padding: '10px', backgroundColor: '#183D66', borderRadius: 10 }} item xs={12} sm={12} md={12}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  {subObj.match_hometeam_name} &nbsp; {subObj.match_hometeam_score} &nbsp; x {subObj.match_awayteam_score} &nbsp; {subObj.match_awayteam_name} 
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3} spacing={2}>
                <Typography variant="h6" gutterBottom>
                  {subObj.match_time}
                </Typography>
              </Grid>
            </Grid>
            <List spacing={2}>
              <ListItem>
                Último Comentário: &nbsp;
                <Typography variant="body2" color="textSecondary">
                  {getLastComment(subObj)}
                </Typography>
              </ListItem>
            </List>
          </CardContent>
        </Grid>
      ))}
    </Grid>
  );
}
