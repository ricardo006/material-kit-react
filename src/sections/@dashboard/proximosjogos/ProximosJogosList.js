import * as React from 'react';
import FaceIcon from '@mui/icons-material/Face';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import PropTypes from 'prop-types';
import { Grid, Card, Avatar, Chip, Stack, Box, CardContent, Typography, List, ListItem, Container} from '@mui/material';
import GetLiveOddsComments from '../../../api/GetLiveOddsComments';

ProximosJogosList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function ProximosJogosList({ products, ...other }) {
  const data = GetLiveOddsComments();

  const getLastComment = (item) => {
    const liveCommentsArray = item.live_comments || [];
    console.log(item)
    if (liveCommentsArray.length > 0) {
      return liveCommentsArray[liveCommentsArray.length - 1].text;
    }
    return 'Nenhum comentário disponível';
  };

  return (
      <Container maxWidth="xl">
        {data.map((item) => (
          <Grid item xs={12} sm={12} md={12}key={item.match_id} style={{ margin: '10px', padding: '10px', backgroundColor: '#183D66', borderRadius: 10 }} >
            <CardContent>
              <Grid>
                <Box display="flex" alignItems="center">
                  <Avatar src={item.country_logo} alt={item.country_name} sx={{ width: 32, height: 32, marginRight: 1 }} />
                  <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1, marginRight: 1 }}>
                    {item.country_name}&nbsp;|&nbsp;{item.league_name}&nbsp;
                  </Typography>
                </Box>

                <Box item xs={12} sm={12} md={12} display="flex" alignItems="center">
                  <Chip icon={<AlarmOutlinedIcon />} variant="outlined" label={item.match_status}/>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 900, mt: 2, ml: 1 }}>
                    {item.match_hometeam_name}&nbsp;{item.match_hometeam_score}&nbsp;x&nbsp;{item.match_awayteam_score}&nbsp;{item.match_awayteam_name} 
                  </Typography>
                </Box>
                
                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="p" color="textSecondary">{getLastComment(data)}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        ))}
      </Container>
  );
}
