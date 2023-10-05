import * as React from 'react';
import FaceIcon from '@mui/icons-material/Face';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import PropTypes from 'prop-types';
import { Grid, Card, Avatar, Chip, Stack, Box, CardContent, Typography, List, ListItem, Container } from '@mui/material';
import Predictions from '../../../api/Predictions';
import GetCountries from 'src/api/GetCountries';

FutebolList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default function FutebolList({ products, ...other }) {
    const data = GetCountries();

    console.log(data);

    return (
        <Container maxWidth="xl">
            {data.map((item) => (
                <Grid item xs={12} sm={12} md={12} key={item.match_id} style={{ margin: '10px', padding: '10px', backgroundColor: '#183D66', borderRadius: 10 }} >
                    <CardContent>
                        <Grid>
                            <Box item xs={12} sm={12} md={12} display="flex" alignItems="center">
                                <Chip icon={<AlarmOutlinedIcon />} variant="outlined" label={item.country_logo} />
                                <Typography variant="h6" color="textSecondary" sx={{ ml: 1, mr: 1 }}>
                                    {item.country_id}&nbsp;|&nbsp;{item.country_name}&nbsp;
                                </Typography>
                            </Box>
                        </Grid>
                    </CardContent>
                </Grid>
            ))}
        </Container>
    );
}
