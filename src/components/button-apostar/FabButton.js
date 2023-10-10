import React, { useState, useEffect } from 'react';
import AutoAwesomeMotionTwoToneIcon from '@mui/icons-material/AutoAwesomeMotionTwoTone';
import {
    Fab,
    Grid,
} from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';

function FabButton({ eventosClicados, onNavigateClick }) {
    const [totalSelecoes, setTotalSelecoes] = useState(0);

    // Função para calcular o total de seleções
    const calcularTotalSelecoes = () => {
        return eventosClicados.length;
    };

    // UseEffect para atualizar o estado totalSelecoes sempre que o estado eventosClicados for modificado
    useEffect(() => {
        setTotalSelecoes(calcularTotalSelecoes());
    }, [eventosClicados]);

    return (
        <>
            {totalSelecoes > 0 && (
                <Grid item xs={12} md={12} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                    <Fab
                        onClick={onNavigateClick} // Chame a função onNavigateClick quando o botão for clicado
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
                        Apostar {totalSelecoes} seleções
                    </Fab>
                </Grid>
            )}
        </>
    );
}

export default FabButton;
