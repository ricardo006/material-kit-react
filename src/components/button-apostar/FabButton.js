import React, { useState, useEffect } from 'react';
import AutoAwesomeMotionTwoToneIcon from '@mui/icons-material/AutoAwesomeMotionTwoTone';
import {
    Fab,
    Grid,
    Typography,
} from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';

function FabButton({ eventosClicados, onNavigateClick }) {
    const [totalSelecoes, setTotalSelecoes] = useState(0);

    const calcularTotalSelecoes = () => {
        return eventosClicados.length;
    };

    useEffect(() => {
        setTotalSelecoes(calcularTotalSelecoes());
    }, [eventosClicados]);

    return (
        <>
            {totalSelecoes > 0 && (
                <Grid item xs={12} md={12} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                    <Fab
                        onClick={onNavigateClick}
                        variant="extended"
                        sx={{
                            backgroundColor: '#33FFC2',
                            '&:hover': {
                                backgroundColor: '#023047',
                                color: '#33FFC2',
                            },
                            color: '#023047',
                        }}
                    >
                        <AutoAwesomeMotionTwoToneIcon sx={{ mr: 1 }} />
                        <Typography sx={{ fontWeight: 600 }}>
                            Apostar {' '}
                            {totalSelecoes > 1
                                ? `${totalSelecoes} seleções`
                                : totalSelecoes === 1
                                    ? '1 seleção'
                                    : ''}
                        </Typography>
                    </Fab>
                </Grid>
            )}
        </>
    );
}

export default FabButton;
