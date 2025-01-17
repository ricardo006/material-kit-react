import * as React from 'react';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import { Grid, Card, Avatar, Chip, Box, CardContent, Typography, Container } from '@mui/material';
import Predictions from '../../../api/Predictions';

export default function ProximosJogosList() {
  const data = Predictions();

  const getLastComment = (item) => {
    const liveCommentsArray = item.live_comments || [];
    console.log(item);
    if (liveCommentsArray.length > 0) {
      return liveCommentsArray[liveCommentsArray.length - 1].text;
    }
    return 'Nenhum comentário disponível';
  };

  const handleCardClick = (item) => {
    alert(item)
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
          onClick={() => handleCardClick(item.match_id)}
        >
          <Grid item xs={12} sm={12} md={12} key={item.match_id} style={{ margin: '10px', padding: '10px', backgroundColor: '#183D66', borderRadius: 10 }} >
            <CardContent>
              <Grid>
                <Box item xs={12} sm={12} md={12} display="flex" alignItems="center">
                  <Chip icon={<AlarmOutlinedIcon />} variant="outlined" label={item.match_time} />
                  <Typography variant="h6" color="textSecondary" sx={{ ml: 1, mr: 1 }}>
                    {item.country_name}&nbsp;|&nbsp;{item.league_name}&nbsp;
                  </Typography>
                </Box>

                <Box item xs={12} sm={12} md={12} display="flex" alignItems="center" sx={{ mt: 2 }}>
                  <Avatar src={item.country_logo} alt={item.country_name} sx={{ width: 32, height: 32, marginRight: 1 }} />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 900, mt: 1 }}>
                    {item.match_hometeam_name}&nbsp;{item.match_hometeam_score}&nbsp;x&nbsp;{item.match_awayteam_score}&nbsp;{item.match_awayteam_name}
                  </Typography>
                </Box>

                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="p" color="textSecondary">{getLastComment(data)}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Card>
      ))}
    </Container>
  );
}
