import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';

const ConfigurationsPage = () => {
    return (
        <>
            <Helmet>
                <title> Configurações | Betspace </title>
            </Helmet>

            <Container maxWidth="xl">
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Configurações
                    </Typography>
                </Stack>
            </Container>
        </>
    );
};

export default ConfigurationsPage;
