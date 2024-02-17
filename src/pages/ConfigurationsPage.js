import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, FormControlLabel, Checkbox, Grid, Button, Container, Stack, Typography } from '@mui/material';

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

                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5" gutterBottom>
                                    Configurações de conta
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Altere suas informações pessoais, senha e outras configurações de conta.
                                </Typography>
                                <Button variant="contained" color="primary">
                                    Alterar informações
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5" gutterBottom>
                                    Configurações de notificações
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Gerencie as notificações que você deseja receber.
                                </Typography>

                                <FormControlLabel
                                    control={<Checkbox color="primary" />}
                                    label="Ativar/Desativar notificações"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default ConfigurationsPage;
