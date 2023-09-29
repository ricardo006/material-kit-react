import * as React from 'react';
import FaceIcon from '@mui/icons-material/Face';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import PropTypes from 'prop-types';
import { Avatar, Grid, Card, Chip, Stack, Box, CardContent, Typography, List, ListItem, Container } from '@mui/material';
import GetOddsInterval from '../../../api/GetOddsInterval';
import Predictions from '../../../api/Predictions'; // Importe o componente Predictions

export default function ProximosJogosList({ products, ...other }) {
  const fromDate = '2023-09-28';
  const toDate = '2023-09-29';

  // Obtém os dados da API (substitua pelo método correto para obter os dados)
  const data = GetOddsInterval();

  const getLastComment = (item) => {
    const liveCommentsArray = item.live_comments || [];
    if (liveCommentsArray.length > 0) {
      return liveCommentsArray[liveCommentsArray.length - 1].text;
    }
    return 'Nenhum comentário disponível';
  };

  // Função para buscar o match_id em predictions
  const getPredictionByMatchId = (matchId) => {
    const predictionsData = Predictions();
    return predictionsData.find((predictionItem) => predictionItem.match_id === matchId);
  };

  return (
    <Container maxWidth="xl">
      {data
        .filter((item) => item.odd_bookmakers === 'Dafabet')
        .map((item) => {
          const prediction = getPredictionByMatchId(item.match_id); // Busque a correspondência em predictions
          return (
            <Grid item xs={12} sm={12} md={12} key={item.match_id} style={{ margin: '10px', padding: '10px', backgroundColor: '#183D66', borderRadius: 10 }}>
              <CardContent>
                <Grid>
                  <Box display="flex" alignItems="center">
                    <Avatar src={item.country_logo} alt={item.country_name} sx={{ width: 32, height: 32, marginRight: 1 }} />
                    <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1, marginRight: 1 }}>
                      {item.country_name}&nbsp;|&nbsp;{item.league_name}&nbsp;
                    </Typography>
                  </Box>
                  
                  <Box display="flex" alignItems="center">
                    <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1, marginRight: 1 }}>
                      {item.match_id}
                    </Typography>
                  </Box>

                  <Grid item xs={12} sm={12} md={12}>
                    <Chip icon={<AlarmOutlinedIcon />} variant="outlined" label={item.match_status} sx={{ marginLeft: 1 }} />
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 900, mt: 2 }}>
                      {item.odd_1}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 900, mt: 2 }}>
                      {item.odd_x}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 900, mt: 2 }}>
                      {item.odd_2}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="p" color="textSecondary">{getLastComment(data)}</Typography>
                  </Grid>
                </Grid>
                {/* Renderize informações da correspondência em predictions */}
                {prediction && (
                  <div>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 900, mt: 2 }}>
                      Prediction: {prediction.predictionData} {/* Substitua pelo nome correto da propriedade em prediction */}
                    </Typography>
                    {/* Adicione outras informações de prediction conforme necessário */}
                  </div>
                )}
              </CardContent>
            </Grid>
          );
        })}
    </Container>
  );
}
