import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';

const marketsData = [
    { id: 1, label: 'Principais mercados', color: 'primary' },
    { id: 2, label: 'Resultado Final', color: 'primary' },
    { id: 3, label: 'Dupla Chance', color: 'success' },
    { id: 4, label: 'Total de Gols mais/menos', color: 'primary' },
    { id: 5, label: 'Próximo Gol', color: 'success' },
    { id: 6, label: 'Empate Anula', color: 'success' },
    { id: 7, label: 'Totais de gols mais/menos 1º tempo', color: 'success' },
    { id: 8, label: 'Escanteios Mais/Menos', color: 'success' },
];

const rows = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 28 },
    { id: 3, name: 'Bob Johnson', age: 35 },
    // Adicione mais dados aqui
];

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'age', headerName: 'Age', width: 100 },
    // Adicione mais colunas aqui
];

export default function AppChipMercados() {
    const [selectedChip, setSelectedChip] = useState(null);

    const handleChipClick = (id) => {
        setSelectedChip(id === selectedChip ? null : id);
    };

    return (
        <div>
            <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                <Stack direction="row" spacing={1} sx={{ m: 5 }}>
                    {marketsData.map((market) => (
                        <Chip
                            key={market.id}
                            label={market.label}
                            color={market.color}
                            variant={selectedChip === market.id ? 'filled' : 'outlined'}
                            sx={{ cursor: 'pointer' }}
                            onClick={() => handleChipClick(market.id)}
                        />
                    ))}
                </Stack>
            </div>
            {selectedChip !== null && (
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                    />
                </div>
            )}
        </div>
    );
}
