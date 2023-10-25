import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Stack, Typography } from '@mui/material';

// components
import Iconify from '../components/iconify';
// sections
import {
    SoccerOptions,
    BannersEvents,
    AppChipMercados
} from '../sections/@dashboard/app';

export default function FutebolPage() {
    const theme = useTheme();

    return (
        <>
            <Helmet>
                <title> Futebol | Betspace </title>
            </Helmet>

            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <SoccerOptions />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <BannersEvents />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <AppChipMercados />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
