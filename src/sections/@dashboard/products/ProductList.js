import * as React from 'react';
import FaceIcon from '@mui/icons-material/Face';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import PropTypes from 'prop-types';
import {
  Grid,
  Card,
  Avatar,
  Chip,
  Stack,
  Box,
  CardContent,
  Typography,
  List,
  ListItem,
  Container,
} from '@mui/material';
import GetLiveOddsComments from '../../../api/GetLiveOddsComments';

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function ProductList({ products, ...other }) {
  const data = GetLiveOddsComments();

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
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            key={item.match_id}
            style={{ margin: '10px', padding: '10px', backgroundColor: '#183D66', borderRadius: 10 }}
          >
            <CardContent>
              <Grid>
                <Box item xs={12} sm={12} md={12} display="flex" alignItems="center">
                  <Avatar
                    src={item.country_logo}
                    alt={item.country_name}
                    sx={{ width: 32, height: 32, marginRight: 1 }}
                  />
                  <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1, marginRight: 1 }}>
                    {item.country_name}&nbsp;|&nbsp;{item.league_name}&nbsp;
                  </Typography>
                </Box>

                <Box item xs={12} sm={12} md={12} display="flex" alignItems="center">
                  <Chip
                    id="match-status-chip"
                    icon={<AlarmOutlinedIcon />}
                    variant="outlined"
                    label={item.match_status}
                    sx={{ marginRight: '8px', transition: 'background-color 0.5s ease-in-out' }}
                  />

                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 900, mt: 1, display: 'flex', alignItems: 'center' }}
                  >
                    {item.match_hometeam_name}&nbsp;{item.match_hometeam_score}&nbsp;x&nbsp;{item.match_awayteam_score}
                    &nbsp;{item.match_awayteam_name}
                  </Typography>
                </Box>

                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="p" color="textSecondary">
                    {getLastComment(data)}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  {item.live_odds && item.live_odds.slice(0, 3).map((odd, index) => (
                    <React.Fragment key={index}>
                      <Typography variant="p" color="textSecondary">
                        Odd {index + 1}:
                        Handicap: {odd.handicap}
                        Odd Name: {odd.odd_name}
                        Suspended: {odd.suspended}
                        Type: {odd.type}
                        Updated: {odd.upd}
                        Value: {odd.value}
                      </Typography>
                    </React.Fragment>
                  ))}
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Card>
      ))}
    </Container>
  );
}
