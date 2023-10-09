import * as React from 'react';
import FaceIcon from '@mui/icons-material/Face';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import PropTypes from 'prop-types';
import { Grid, Card, Chip, Avatar, Stack, Box, CardContent, Typography, List, ListItem, Container } from '@mui/material';
import GetLiveOddsComments from '../../../api/GetLiveOddsComments';

export default function JogosList({ products, ...other }) {
  const data = GetLiveOddsComments();

  const getLastComment = (item) => {
    const liveCommentsArray = item.live_comments || [];
    if (liveCommentsArray.length > 0) {
      return liveCommentsArray[liveCommentsArray.length - 1].text;
    }
    return 'Nenhum comentário disponível';
  };

  
  const handleCardClick = (matchId) => {
    alert(matchId)
    setSelectedMatchId(matchId);
  };

  return (
    <Container maxWidth="xl">
      {data.map((item) => (
        <Card
          key={item.match_id}
          style={{
            margin: '10px',
            padding: '10px',
            backgroundColor: '#183D66',
            borderRadius: 10,
            cursor: 'pointer',
          }}
          onClick={() => handleCardClick(item.match_id)} // Adiciona o evento onClick
        >
          <Grid key={item.match_id} style={{ margin: '10px', padding: '10px', backgroundColor: '#183D66', borderRadius: 10 }} item xs={12} sm={12} md={12}>
            <CardContent >
              <Grid>
                <Box display="flex" alignItems="center">
                  <Chip icon={<AlarmOutlinedIcon />} variant="outlined" label={item.match_status} />
                  <Avatar src={item.country_logo} alt={item.country_name} sx={{ width: 42, height: 42, marginRight: 1 }} />
                  <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1, marginRight: 1 }}>
                    {item.country_name}&nbsp;|&nbsp;{item.league_name}&nbsp;
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center">
                  <Chip icon={<AlarmOutlinedIcon />} variant="outlined" label={item.match_status} />
                  <Avatar src={item.country_logo} alt={item.country_name} sx={{ width: 42, height: 42, marginRight: 1 }} />
                  <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1, marginRight: 1 }}>
                    {item.country_name}&nbsp;|&nbsp;{item.league_name}&nbsp;
                  </Typography>
                </Box>

                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 900, mt: 2 }}>
                    {item.match_hometeam_name}&nbsp;{item.match_hometeam_score}&nbsp;x&nbsp;{item.match_awayteam_score}&nbsp;{item.match_awayteam_name}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="p" color="textSecondary">{item.country_name}&nbsp;{item.league_name}&nbsp;</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Card>
      ))}
    </Container>
  );
}
