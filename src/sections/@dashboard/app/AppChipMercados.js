import React, { useState } from 'react';
import {
    Chip,
    Stack,
    Grid,
    Typography,
    Popover,
    MenuItem,
    IconButton,
    Button,
    Container,
    Card,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    TablePagination,
    Checkbox,
    Avatar,
} from '@mui/material';
import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';
import { fDecimal } from '../../../utils/formatNumber';

const marketsData = [
    { id: 1, label: 'Principais mercados', color: 'primary' },
    { id: 2, label: 'Resultado Final', color: 'primary' },
    { id: 3, label: 'Dupla Chance', color: 'primary' },
    { id: 4, label: 'Total de Gols mais/menos', color: 'primary' },
    { id: 5, label: 'Próximo Gol', color: 'primary' },
    { id: 6, label: 'Empate Anula', color: 'primary' },
    { id: 7, label: 'Totais de gols mais/menos 1º tempo', color: 'primary' },
    { id: 8, label: 'Escanteios Mais/Menos', color: 'primary' },
];

const rows = [
    { id: 1, tempoJogo: '15:00', timeCasa: 'Fortaleza', timeFora: 'São Paulo', placarCasa: 2, placarFora: 1, oddCasa: 2.16, oddEmpate: 3.03, oddFora: 2.5 },
    { id: 2, tempoJogo: '25:00', timeCasa: 'América MG', timeFora: 'Vasco', placarCasa: 0, placarFora: 0, oddCasa: 1.80, oddEmpate: 2.80, oddFora: 3.2 },
    { id: 3, tempoJogo: '35:00', timeCasa: 'Time da Casa 3', timeFora: 'Time de Fora 3', placarCasa: 1, placarFora: 3, oddCasa: 3.50, oddEmpate: 3.0, oddFora: 2.0 },
    { id: 4, tempoJogo: '10:00', timeCasa: 'Time da Casa 4', timeFora: 'Time de Fora 4', placarCasa: 1, placarFora: 2, oddCasa: 2.00, oddEmpate: 2.5, oddFora: 2.8 },
    { id: 5, tempoJogo: '60:00', timeCasa: 'Time da Casa 5', timeFora: 'Time de Fora 5', placarCasa: 3, placarFora: 0, oddCasa: 1.50, oddEmpate: 3.2, oddFora: 4.0 },
    { id: 6, tempoJogo: '30:00', timeCasa: 'Time da Casa 6', timeFora: 'Time de Fora 6', placarCasa: 2, placarFora: 2, oddCasa: 2.20, oddEmpate: 2.9, oddFora: 3.0 },
    { id: 7, tempoJogo: '75:00', timeCasa: 'Time da Casa 7', timeFora: 'Time de Fora 7', placarCasa: 0, placarFora: 1, oddCasa: 2.80, oddEmpate: 2.7, oddFora: 2.2 },
    { id: 8, tempoJogo: '80:00', timeCasa: 'Time da Casa 8', timeFora: 'Time de Fora 8', placarCasa: 1, placarFora: 0, oddCasa: 1.70, oddEmpate: 2.8, oddFora: 3.5 },
    { id: 9, tempoJogo: '20:00', timeCasa: 'Time da Casa 9', timeFora: 'Time de Fora 9', placarCasa: 0, placarFora: 0, oddCasa: 2.5, oddEmpate: 2.5, oddFora: 2.5 },
    { id: 10, tempoJogo: '45:00', timeCasa: 'Time da Casa 10', timeFora: 'Time de Fora 10', placarCasa: 1, placarFora: 2, oddCasa: 3.03, oddEmpate: 2.8, oddFora: 2.2 },
    { id: 11, tempoJogo: '70:00', timeCasa: 'Time da Casa 11', timeFora: 'Time de Fora 11', placarCasa: 2, placarFora: 0, oddCasa: 1.65, oddEmpate: 3.0, oddFora: 3.8 },
    { id: 12, tempoJogo: '50:00', timeCasa: 'Time da Casa 12', timeFora: 'Time de Fora 12', placarCasa: 0, placarFora: 1, oddCasa: 2.94, oddEmpate: 2.6, oddFora: 2.3 },
    { id: 13, tempoJogo: '85:00', timeCasa: 'Time da Casa 13', timeFora: 'Time de Fora 13', placarCasa: 2, placarFora: 2, oddCasa: 2.13, oddEmpate: 2.9, oddFora: 3.1 },
    { id: 14, tempoJogo: '40:00', timeCasa: 'Time da Casa 14', timeFora: 'Time de Fora 14', placarCasa: 1, placarFora: 0, oddCasa: 1.91, oddEmpate: 2.8, oddFora: 3.2 },
    { id: 15, tempoJogo: '55:00', timeCasa: 'Time da Casa 15', timeFora: 'Time de Fora 15', placarCasa: 0, placarFora: 0, oddCasa: 2.86, oddEmpate: 2.7, oddFora: 2.2 },
    { id: 16, tempoJogo: '75:00', timeCasa: 'Time da Casa 16', timeFora: 'Time de Fora 16', placarCasa: 1, placarFora: 1, oddCasa: 2.2, oddEmpate: 2.8, oddFora: 2.9 },
    { id: 17, tempoJogo: '60:00', timeCasa: 'Time da Casa 17', timeFora: 'Time de Fora 17', placarCasa: 0, placarFora: 1, oddCasa: 3.0, oddEmpate: 2.7, oddFora: 2.0 },
    { id: 18, tempoJogo: '30:00', timeCasa: 'Time da Casa 18', timeFora: 'Time de Fora 18', placarCasa: 1, placarFora: 0, oddCasa: 2.0, oddEmpate: 3.0, oddFora: 3.5 },
    { id: 19, tempoJogo: '45:00', timeCasa: 'Time da Casa 19', timeFora: 'Time de Fora 19', placarCasa: 0, placarFora: 2, oddCasa: 3.2, oddEmpate: 2.8, oddFora: 2.0 },
    { id: 20, tempoJogo: '20:00', timeCasa: 'Time da Casa 20', timeFora: 'Time de Fora 20', placarCasa: 1, placarFora: 0, oddCasa: 1.8, oddEmpate: 2.7, oddFora: 3.5 },
    { id: 21, tempoJogo: '10:00', timeCasa: 'Time da Casa 21', timeFora: 'Time de Fora 21', placarCasa: 0, placarFora: 1, oddCasa: 2.5, oddEmpate: 2.7, oddFora: 2.5 },
    { id: 22, tempoJogo: '85:00', timeCasa: 'Time da Casa 22', timeFora: 'Time de Fora 22', placarCasa: 2, placarFora: 1, oddCasa: 2.0, oddEmpate: 2.8, oddFora: 3.2 },
    { id: 23, tempoJogo: '50:00', timeCasa: 'Time da Casa 23', timeFora: 'Time de Fora 23', placarCasa: 1, placarFora: 2, oddCasa: 3.5, oddEmpate: 3.0, oddFora: 2.0 },
    { id: 24, tempoJogo: '75:00', timeCasa: 'Time da Casa 24', timeFora: 'Time de Fora 24', placarCasa: 0, placarFora: 0, oddCasa: 2.2, oddEmpate: 2.9, oddFora: 3.1 },
    { id: 25, tempoJogo: '70:00', timeCasa: 'Time da Casa 25', timeFora: 'Time de Fora 25', placarCasa: 1, placarFora: 0, oddCasa: 1.9, oddEmpate: 2.8, oddFora: 3.2 },
    { id: 26, tempoJogo: '55:00', timeCasa: 'Time da Casa 26', timeFora: 'Time de Fora 26', placarCasa: 1, placarFora: 1, oddCasa: 2.0, oddEmpate: 3.0, oddFora: 3.5 },
    { id: 27, tempoJogo: '40:00', timeCasa: 'Time da Casa 27', timeFora: 'Time de Fora 27', placarCasa: 0, placarFora: 1, oddCasa: 2.5, oddEmpate: 2.5, oddFora: 2.5 },
    { id: 28, tempoJogo: '65:00', timeCasa: 'Time da Casa 28', timeFora: 'Time de Fora 28', placarCasa: 1, placarFora: 2, oddCasa: 3.0, oddEmpate: 2.8, oddFora: 2.2 },
    { id: 29, tempoJogo: '80:00', timeCasa: 'Time da Casa 29', timeFora: 'Time de Fora 29', placarCasa: 0, placarFora: 0, oddCasa: 2.8, oddEmpate: 2.7, oddFora: 2.2 },
    { id: 30, tempoJogo: '60:00', timeCasa: 'Time da Casa 30', timeFora: 'Time de Fora 30', placarCasa: 1, placarFora: 2, oddCasa: 2.0, oddEmpate: 2.9, oddFora: 3.0 },
    { id: 31, tempoJogo: '25:00', timeCasa: 'Time da Casa 31', timeFora: 'Time de Fora 31', placarCasa: 0, placarFora: 0, oddCasa: 2.8, oddEmpate: 2.7, oddFora: 2.2 },
    { id: 32, tempoJogo: '45:00', timeCasa: 'Time da Casa 32', timeFora: 'Time de Fora 32', placarCasa: 1, placarFora: 1, oddCasa: 2.2, oddEmpate: 2.8, oddFora: 2.9 },
    { id: 33, tempoJogo: '85:00', timeCasa: 'Time da Casa 33', timeFora: 'Time de Fora 33', placarCasa: 0, placarFora: 2, oddCasa: 3.0, oddEmpate: 2.7, oddFora: 2.0 },
    { id: 34, tempoJogo: '30:00', timeCasa: 'Time da Casa 34', timeFora: 'Time de Fora 34', placarCasa: 2, placarFora: 0, oddCasa: 1.6, oddEmpate: 3.0, oddFora: 3.8 },
    { id: 35, tempoJogo: '55:00', timeCasa: 'Time da Casa 35', timeFora: 'Time de Fora 35', placarCasa: 0, placarFora: 1, oddCasa: 2.9, oddEmpate: 2.6, oddFora: 2.3 },
    { id: 36, tempoJogo: '70:00', timeCasa: 'Time da Casa 36', timeFora: 'Time de Fora 36', placarCasa: 2, placarFora: 1, oddCasa: 2.1, oddEmpate: 2.9, oddFora: 3.1 },
    { id: 37, tempoJogo: '40:00', timeCasa: 'Time da Casa 37', timeFora: 'Time de Fora 37', placarCasa: 1, placarFora: 0, oddCasa: 1.9, oddEmpate: 2.8, oddFora: 3.2 },
    { id: 38, tempoJogo: '25:00', timeCasa: 'Time da Casa 38', timeFora: 'Time de Fora 38', placarCasa: 0, placarFora: 0, oddCasa: 2.8, oddEmpate: 2.7, oddFora: 2.2 },
    { id: 39, tempoJogo: '65:00', timeCasa: 'Time da Casa 39', timeFora: 'Time de Fora 39', placarCasa: 1, placarFora: 0, oddCasa: 2.0, oddEmpate: 3.0, oddFora: 3.5 },
    { id: 40, tempoJogo: '50:00', timeCasa: 'Time da Casa 40', timeFora: 'Time de Fora 40', placarCasa: 0, placarFora: 2, oddCasa: 3.2, oddEmpate: 2.8, oddFora: 2.0 },
    { id: 41, tempoJogo: '15:00', timeCasa: 'Time da Casa 41', timeFora: 'Time de Fora 41', placarCasa: 2, placarFora: 1, oddCasa: 2.1, oddEmpate: 3.0, oddFora: 2.5 },
    { id: 42, tempoJogo: '60:00', timeCasa: 'Time da Casa 42', timeFora: 'Time de Fora 42', placarCasa: 3, placarFora: 0, oddCasa: 1.5, oddEmpate: 3.2, oddFora: 4.0 },
    { id: 43, tempoJogo: '30:00', timeCasa: 'Time da Casa 43', timeFora: 'Time de Fora 43', placarCasa: 2, placarFora: 2, oddCasa: 2.2, oddEmpate: 2.9, oddFora: 3.0 },
    { id: 44, tempoJogo: '75:00', timeCasa: 'Time da Casa 44', timeFora: 'Time de Fora 44', placarCasa: 0, placarFora: 1, oddCasa: 2.8, oddEmpate: 2.7, oddFora: 2.2 },
    { id: 45, tempoJogo: '80:00', timeCasa: 'Time da Casa 45', timeFora: 'Time de Fora 45', placarCasa: 1, placarFora: 0, oddCasa: 1.7, oddEmpate: 2.8, oddFora: 3.5 },
    { id: 46, tempoJogo: '20:00', timeCasa: 'Time da Casa 46', timeFora: 'Time de Fora 46', placarCasa: 0, placarFora: 0, oddCasa: 2.5, oddEmpate: 2.5, oddFora: 2.5 },
    { id: 47, tempoJogo: '45:00', timeCasa: 'Time da Casa 47', timeFora: 'Time de Fora 47', placarCasa: 1, placarFora: 2, oddCasa: 3.0, oddEmpate: 2.8, oddFora: 2.2 },
    { id: 48, tempoJogo: '70:00', timeCasa: 'Time da Casa 48', timeFora: 'Time de Fora 48', placarCasa: 2, placarFora: 0, oddCasa: 1.6, oddEmpate: 3.0, oddFora: 3.8 },
    { id: 49, tempoJogo: '50:00', timeCasa: 'Time da Casa 49', timeFora: 'Time de Fora 49', placarCasa: 0, placarFora: 1, oddCasa: 2.9, oddEmpate: 2.6, oddFora: 2.3 },
    { id: 50, tempoJogo: '85:00', timeCasa: 'Time da Casa 50', timeFora: 'Time de Fora 50', placarCasa: 2, placarFora: 2, oddCasa: 2.1, oddEmpate: 2.9, oddFora: 3.1 },
];


const TABLE_HEAD = [
    { id: 'name', label: 'Usuário', alignRight: false },
    { id: 'company', label: '', alignRight: false },
    { id: 'role', label: '', alignRight: false },
    { id: 'isVerified', label: '', alignRight: false },
    { id: 'status', label: 'Resultado Final', alignRight: false },
    { id: '' },
    { id: '' },
    { id: '' },
];

export default function UserPage() {
    const [open, setOpen] = useState(null);
    const [selected, setSelected] = useState([]);
    const [activeMarket, setActiveMarket] = useState(null);

    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleMarketClick = (marketId) => {
        setActiveMarket(marketId);
    };

    const handleButtonClick = () => {
        // Coloque o código que você deseja executar quando o botão for clicado aqui
        alert('Botão clicado!');
    };

    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}> {/* Chips */}
                        <Stack direction="row" spacing={1} sx={{ mt: 5, mb: 5 }}>
                            {marketsData.map((market) => (
                                <Chip
                                    key={market.id}
                                    label={market.label}
                                    color={market.color}
                                    sx={{ cursor: 'pointer' }}
                                    onClick={() => handleMarketClick(market.id)}
                                />
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Card>
                            <Scrollbar>
                                <TableContainer sx={{ minWidth: 800, border: 0 }}>
                                    <Table sx={{ borderCollapse: 'collapse' }}>
                                        <TableHead>
                                            <TableRow>
                                                {TABLE_HEAD.map((column) => (
                                                    <TableCell  key={column.id} style={{ textAlign: 'left' }}>
                                                        {column.label}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>

                                        <TableBody sx={{ border: 0 }}>
                                            {activeMarket !== null ? (
                                                rows.map((row) => {
                                                    const { id, tempoJogo, timeCasa, timeFora, placarCasa, placarFora, oddCasa, oddEmpate, oddFora } = row;
                                                    const selectedUser = selected.indexOf(id) !== -1;

                                                    return (
                                                        <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                                                            <TableCell padding="checkbox" sx={{ textAlign: 'center' }}>
                                                                <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, id)} />
                                                            </TableCell>

                                                            <TableCell component="th" scope="row" padding="none" sx={{
                                                                width: { xs: '50px', md: '100px' }, // Ajuste as larguras conforme necessário
                                                                textAlign: 'center',
                                                            }}>
                                                                <Chip label={tempoJogo} onClick={handleClick} sx={{ backgroundColor: '#183D66' }} />
                                                            </TableCell>

                                                            <TableCell align="left" sx={{ width: { xs: 240, md: 200 } }}>
                                                                <Typography variant="subtitle2" noWrap>
                                                                    {timeCasa}
                                                                </Typography>
                                                                <Typography variant="subtitle2" noWrap>
                                                                    {timeFora}
                                                                </Typography>
                                                            </TableCell>

                                                            <TableCell align="left" sx={{ backgroundColor: '#023047', textAlign: 'center', p: 2 }}>
                                                                <Typography variant="body2" noWrap sx={{ color: '#33FFC2', fontSize: 16, fontWeight: 'bold' }}>
                                                                    {placarCasa}
                                                                </Typography>
                                                                <Typography variant="body2" noWrap sx={{ color: '#33FFC2', fontSize: 16, fontWeight: 'bold' }}>
                                                                    {placarFora}
                                                                </Typography>
                                                            </TableCell>

                                                            <TableCell align="center" sx={{ color: '#33FFC2', textAlign: 'center' }}>
                                                                <Chip label={fDecimal(oddCasa)} />
                                                            </TableCell>

                                                            <TableCell align="center" sx={{ color: '#33FFC2', textAlign: 'center' }}>
                                                                <Chip label={fDecimal(oddEmpate)} />
                                                            </TableCell>

                                                            <TableCell align="center" sx={{ color: '#33FFC2', textAlign: 'center' }}>
                                                                <Chip label={fDecimal(oddFora)} />
                                                            </TableCell>

                                                            <TableCell align="center">+233</TableCell>
                                                        </TableRow>
                                                    );
                                                })
                                            ) : (
                                                <TableRow style={{ height: 53 }}>
                                                    <TableCell colSpan={7}>
                                                        <Typography variant="subtitle1">Clique em um mercado para exibir a tabela correspondente.</Typography>
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Scrollbar>

                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={5}
                                page={0}
                            // onPageChange={handleChangePage}
                            // onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Card>
                    </Grid>
                </Grid>

            </Container>

            {/* Popover aqui */}
        </>
    );
}
