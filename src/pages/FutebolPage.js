import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Container } from '@mui/material';

// sections
import {
    SoccerOptions,
    BannersEvents,
    AppChipMercados
} from '../sections/@dashboard/app';

export default function FutebolPage() {
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
