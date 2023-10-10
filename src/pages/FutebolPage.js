import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Stack, Typography } from '@mui/material';

// components
import Iconify from '../components/iconify';
// sections
import {
    AppTasks,
    AppNewsUpdate,
    AppOrderTimeline,
    AppCurrentVisits,
    AppWebsiteVisits,
    AppTrafficBySite,
    AppWidgetSummary,
    AppCurrentSubject,
    AppConversionRates,
    AppChipMercados,
} from '../sections/@dashboard/app';


export default function FutebolPage() {
    const theme = useTheme();

    return (
        <>
            <Helmet>
                <title> Futebol | Betspace </title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Futebol (230)
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <AppChipMercados title="Total de Vendas" color="cl_vendas" total={714000} icon={'ant-design:android-filled'} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
