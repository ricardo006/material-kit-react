import React, { useState, useEffect } from 'react';
import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';
import NavigationIcon from '@mui/icons-material/Navigation';
import StarOutlineTwoToneIcon from '@mui/icons-material/StarOutlineTwoTone';
import {
    Chip,
    Fab,
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
    {
        id: 1,
        tempoJogo: '15',
        timeCasa: 'Fortaleza',
        timeFora: 'São Paulo',
        placarCasa: 2,
        placarFora: 1,
        oddCasa: 2.16,
        oddEmpate: 3.03,
        oddFora: 2.5,
    },
    {
        id: 2,
        tempoJogo: '25',
        timeCasa: 'América MG',
        timeFora: 'Vasco',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 1.8,
        oddEmpate: 2.8,
        oddFora: 3.2,
    },
    {
        id: 3,
        tempoJogo: '35',
        timeCasa: 'Time da Casa 3',
        timeFora: 'Time de Fora 3',
        placarCasa: 1,
        placarFora: 3,
        oddCasa: 3.5,
        oddEmpate: 3.0,
        oddFora: 2.0,
    },
    {
        id: 4,
        tempoJogo: '10',
        timeCasa: 'Time da Casa 4',
        timeFora: 'Time de Fora 4',
        placarCasa: 1,
        placarFora: 2,
        oddCasa: 2.0,
        oddEmpate: 2.5,
        oddFora: 2.8,
    },
    {
        id: 5,
        tempoJogo: '60',
        timeCasa: 'Time da Casa 5',
        timeFora: 'Time de Fora 5',
        placarCasa: 3,
        placarFora: 0,
        oddCasa: 1.5,
        oddEmpate: 3.2,
        oddFora: 4.0,
    },
    {
        id: 6,
        tempoJogo: '30',
        timeCasa: 'Time da Casa 6',
        timeFora: 'Time de Fora 6',
        placarCasa: 2,
        placarFora: 2,
        oddCasa: 2.2,
        oddEmpate: 2.9,
        oddFora: 3.0,
    },
    {
        id: 7,
        tempoJogo: '75',
        timeCasa: 'Time da Casa 7',
        timeFora: 'Time de Fora 7',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.8,
        oddEmpate: 2.7,
        oddFora: 2.2,
    },
    {
        id: 8,
        tempoJogo: '80',
        timeCasa: 'Time da Casa 8',
        timeFora: 'Time de Fora 8',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 1.7,
        oddEmpate: 2.8,
        oddFora: 3.5,
    },
    {
        id: 9,
        tempoJogo: '20',
        timeCasa: 'Time da Casa 9',
        timeFora: 'Time de Fora 9',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.5,
        oddEmpate: 2.5,
        oddFora: 2.5,
    },
    {
        id: 10,
        tempoJogo: '45',
        timeCasa: 'Time da Casa 10',
        timeFora: 'Time de Fora 10',
        placarCasa: 1,
        placarFora: 2,
        oddCasa: 3.03,
        oddEmpate: 2.8,
        oddFora: 2.2,
    },
    {
        id: 11,
        tempoJogo: '70',
        timeCasa: 'Time da Casa 11',
        timeFora: 'Time de Fora 11',
        placarCasa: 2,
        placarFora: 0,
        oddCasa: 1.65,
        oddEmpate: 3.0,
        oddFora: 3.8,
    },
    {
        id: 12,
        tempoJogo: '50',
        timeCasa: 'Time da Casa 12',
        timeFora: 'Time de Fora 12',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.94,
        oddEmpate: 2.6,
        oddFora: 2.3,
    },
    {
        id: 13,
        tempoJogo: '85',
        timeCasa: 'Time da Casa 13',
        timeFora: 'Time de Fora 13',
        placarCasa: 2,
        placarFora: 2,
        oddCasa: 2.13,
        oddEmpate: 2.9,
        oddFora: 3.1,
    },
    {
        id: 14,
        tempoJogo: '40',
        timeCasa: 'Time da Casa 14',
        timeFora: 'Time de Fora 14',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 1.91,
        oddEmpate: 2.8,
        oddFora: 3.2,
    },
    {
        id: 15,
        tempoJogo: '55',
        timeCasa: 'Time da Casa 15',
        timeFora: 'Time de Fora 15',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.86,
        oddEmpate: 2.7,
        oddFora: 2.2,
    },
    {
        id: 16,
        tempoJogo: '75',
        timeCasa: 'Time da Casa 16',
        timeFora: 'Time de Fora 16',
        placarCasa: 1,
        placarFora: 1,
        oddCasa: 2.2,
        oddEmpate: 2.8,
        oddFora: 2.9,
    },
    {
        id: 17,
        tempoJogo: '60',
        timeCasa: 'Time da Casa 17',
        timeFora: 'Time de Fora 17',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 3.0,
        oddEmpate: 2.7,
        oddFora: 2.0,
    },
    {
        id: 18,
        tempoJogo: '30',
        timeCasa: 'Time da Casa 18',
        timeFora: 'Time de Fora 18',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 2.0,
        oddEmpate: 3.0,
        oddFora: 3.5,
    },
    {
        id: 19,
        tempoJogo: '45',
        timeCasa: 'Time da Casa 19',
        timeFora: 'Time de Fora 19',
        placarCasa: 0,
        placarFora: 2,
        oddCasa: 3.2,
        oddEmpate: 2.8,
        oddFora: 2.0,
    },
    {
        id: 20,
        tempoJogo: '20',
        timeCasa: 'Time da Casa 20',
        timeFora: 'Time de Fora 20',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 1.8,
        oddEmpate: 2.7,
        oddFora: 3.5,
    },
    {
        id: 21,
        tempoJogo: '10',
        timeCasa: 'Time da Casa 21',
        timeFora: 'Time de Fora 21',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.5,
        oddEmpate: 2.7,
        oddFora: 2.5,
    },
    {
        id: 22,
        tempoJogo: '85',
        timeCasa: 'Time da Casa 22',
        timeFora: 'Time de Fora 22',
        placarCasa: 2,
        placarFora: 1,
        oddCasa: 2.0,
        oddEmpate: 2.8,
        oddFora: 3.2,
    },
    {
        id: 23,
        tempoJogo: '50',
        timeCasa: 'Time da Casa 23',
        timeFora: 'Time de Fora 23',
        placarCasa: 1,
        placarFora: 2,
        oddCasa: 3.5,
        oddEmpate: 3.0,
        oddFora: 2.0,
    },
    {
        id: 24,
        tempoJogo: '75',
        timeCasa: 'Time da Casa 24',
        timeFora: 'Time de Fora 24',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.2,
        oddEmpate: 2.9,
        oddFora: 3.1,
    },
    {
        id: 25,
        tempoJogo: '70',
        timeCasa: 'Time da Casa 25',
        timeFora: 'Time de Fora 25',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 1.9,
        oddEmpate: 2.8,
        oddFora: 3.2,
    },
    {
        id: 26,
        tempoJogo: '55',
        timeCasa: 'Time da Casa 26',
        timeFora: 'Time de Fora 26',
        placarCasa: 1,
        placarFora: 1,
        oddCasa: 2.0,
        oddEmpate: 3.0,
        oddFora: 3.5,
    },
    {
        id: 27,
        tempoJogo: '40',
        timeCasa: 'Time da Casa 27',
        timeFora: 'Time de Fora 27',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.5,
        oddEmpate: 2.5,
        oddFora: 2.5,
    },
    {
        id: 28,
        tempoJogo: '65',
        timeCasa: 'Time da Casa 28',
        timeFora: 'Time de Fora 28',
        placarCasa: 1,
        placarFora: 2,
        oddCasa: 3.0,
        oddEmpate: 2.8,
        oddFora: 2.2,
    },
    {
        id: 29,
        tempoJogo: '80',
        timeCasa: 'Time da Casa 29',
        timeFora: 'Time de Fora 29',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.8,
        oddEmpate: 2.7,
        oddFora: 2.2,
    },
    {
        id: 30,
        tempoJogo: '60',
        timeCasa: 'Time da Casa 30',
        timeFora: 'Time de Fora 30',
        placarCasa: 1,
        placarFora: 2,
        oddCasa: 2.0,
        oddEmpate: 2.9,
        oddFora: 3.0,
    },
    {
        id: 31,
        tempoJogo: '25',
        timeCasa: 'Time da Casa 31',
        timeFora: 'Time de Fora 31',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.8,
        oddEmpate: 2.7,
        oddFora: 2.2,
    },
    {
        id: 32,
        tempoJogo: '45',
        timeCasa: 'Time da Casa 32',
        timeFora: 'Time de Fora 32',
        placarCasa: 1,
        placarFora: 1,
        oddCasa: 2.2,
        oddEmpate: 2.8,
        oddFora: 2.9,
    },
    {
        id: 33,
        tempoJogo: '85',
        timeCasa: 'Time da Casa 33',
        timeFora: 'Time de Fora 33',
        placarCasa: 0,
        placarFora: 2,
        oddCasa: 3.0,
        oddEmpate: 2.7,
        oddFora: 2.0,
    },
    {
        id: 34,
        tempoJogo: '30',
        timeCasa: 'Time da Casa 34',
        timeFora: 'Time de Fora 34',
        placarCasa: 2,
        placarFora: 0,
        oddCasa: 1.6,
        oddEmpate: 3.0,
        oddFora: 3.8,
    },
    {
        id: 35,
        tempoJogo: '55',
        timeCasa: 'Time da Casa 35',
        timeFora: 'Time de Fora 35',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.9,
        oddEmpate: 2.6,
        oddFora: 2.3,
    },
    {
        id: 36,
        tempoJogo: '70',
        timeCasa: 'Time da Casa 36',
        timeFora: 'Time de Fora 36',
        placarCasa: 2,
        placarFora: 1,
        oddCasa: 2.1,
        oddEmpate: 2.9,
        oddFora: 3.1,
    },
    {
        id: 37,
        tempoJogo: '40',
        timeCasa: 'Time da Casa 37',
        timeFora: 'Time de Fora 37',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 1.9,
        oddEmpate: 2.8,
        oddFora: 3.2,
    },
    {
        id: 38,
        tempoJogo: '25',
        timeCasa: 'Time da Casa 38',
        timeFora: 'Time de Fora 38',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.8,
        oddEmpate: 2.7,
        oddFora: 2.2,
    },
    {
        id: 39,
        tempoJogo: '65',
        timeCasa: 'Time da Casa 39',
        timeFora: 'Time de Fora 39',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 2.0,
        oddEmpate: 3.0,
        oddFora: 3.5,
    },
    {
        id: 40,
        tempoJogo: '50',
        timeCasa: 'Time da Casa 40',
        timeFora: 'Time de Fora 40',
        placarCasa: 0,
        placarFora: 2,
        oddCasa: 3.2,
        oddEmpate: 2.8,
        oddFora: 2.0,
    },
    {
        id: 41,
        tempoJogo: '15',
        timeCasa: 'Time da Casa 41',
        timeFora: 'Time de Fora 41',
        placarCasa: 2,
        placarFora: 1,
        oddCasa: 2.1,
        oddEmpate: 3.0,
        oddFora: 2.5,
    },
    {
        id: 42,
        tempoJogo: '60',
        timeCasa: 'Time da Casa 42',
        timeFora: 'Time de Fora 42',
        placarCasa: 3,
        placarFora: 0,
        oddCasa: 1.5,
        oddEmpate: 3.2,
        oddFora: 4.0,
    },
    {
        id: 43,
        tempoJogo: '30',
        timeCasa: 'Time da Casa 43',
        timeFora: 'Time de Fora 43',
        placarCasa: 2,
        placarFora: 2,
        oddCasa: 2.2,
        oddEmpate: 2.9,
        oddFora: 3.0,
    },
    {
        id: 44,
        tempoJogo: '75',
        timeCasa: 'Time da Casa 44',
        timeFora: 'Time de Fora 44',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.8,
        oddEmpate: 2.7,
        oddFora: 2.2,
    },
    {
        id: 45,
        tempoJogo: '80',
        timeCasa: 'Time da Casa 45',
        timeFora: 'Time de Fora 45',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 1.7,
        oddEmpate: 2.8,
        oddFora: 3.5,
    },
    {
        id: 46,
        tempoJogo: '20',
        timeCasa: 'Time da Casa 46',
        timeFora: 'Time de Fora 46',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.5,
        oddEmpate: 2.5,
        oddFora: 2.5,
    },
    {
        id: 47,
        tempoJogo: '45',
        timeCasa: 'Time da Casa 47',
        timeFora: 'Time de Fora 47',
        placarCasa: 1,
        placarFora: 2,
        oddCasa: 3.0,
        oddEmpate: 2.8,
        oddFora: 2.2,
    },
    {
        id: 48,
        tempoJogo: '70',
        timeCasa: 'Time da Casa 48',
        timeFora: 'Time de Fora 48',
        placarCasa: 2,
        placarFora: 0,
        oddCasa: 1.6,
        oddEmpate: 3.0,
        oddFora: 3.8,
    },
    {
        id: 49,
        tempoJogo: '50',
        timeCasa: 'Time da Casa 49',
        timeFora: 'Time de Fora 49',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.9,
        oddEmpate: 2.6,
        oddFora: 2.3,
    },
    {
        id: 50,
        tempoJogo: '85',
        timeCasa: 'Time da Casa 50',
        timeFora: 'Time de Fora 50',
        placarCasa: 2,
        placarFora: 2,
        oddCasa: 2.1,
        oddEmpate: 2.9,
        oddFora: 3.1,
    },
];

const TABLE_HEAD = [
    { id: 'name', label: 'Brasil - Campeonato Brasileiro Série A', alignRight: false },
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
    const [concatenatedText, setConcatenatedText] = useState('');
    const [iconTypes, setIconTypes] = useState(rows.map(() => 'star'));
    const [selectedCells, setSelectedCells] = useState([]);
    const [eventosClicados, setEventosClicados] = useState([]);
    const [clicadas, setClicadas] = useState([]);
    const [totalSelecoes, setTotalSelecoes] = useState(0);

    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };

    const handleMarketClick = (market) => {
        setActiveMarket(market);

        // Defina o rótulo concatenado aqui com base no marketId ou em outra lógica desejada
        const newLabel = `Brasil - Campeonato Brasileiro Série A (${market})`;
        setConcatenatedText(newLabel);
    };

    const handleButtonClick = () => {
        // Coloque o código que você deseja executar quando o botão for clicado aqui
        alert('Botão clicado!');
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        const updatedIconTypes = [...iconTypes];
        let newSelected;

        if (selectedIndex === -1) {
            newSelected = [...selected, id];
        } else {
            newSelected = selected.filter((item) => item !== id);
        }

        setSelected(newSelected);

        // Altere o tipo de ícone apenas para a linha clicada
        updatedIconTypes[id - 1] = updatedIconTypes[id - 1] === 'star' ? 'grade' : 'star';
        setIconTypes(updatedIconTypes);
    };

    const calcularTotalSelecoes = () => {
        return eventosClicados.length;
    };


    // Atualize o texto do botão quando o estado eventosClicados for modificado
    useEffect(() => {
        // Use a função setTotalSelecoes para atualizar o estado totalSelecoes
        setTotalSelecoes(calcularTotalSelecoes());
    }, [eventosClicados]);

    const handleClickEvent = (rowId, evento, oddCasa, oddEmpate, oddFora) => {
        const eventoExistente = eventosClicados.find(
            (event) => event.rowId === rowId && event.evento === evento
        );

        const mesmoIdEventoExistente = eventosClicados.find(
            (event) => event.rowId === rowId && event.evento !== evento
        );

        if (eventoExistente) {
            // Remova o evento da lista de eventos clicados
            setEventosClicados((prevEventos) =>
                prevEventos.filter(
                    (event) => !(event.rowId === rowId && event.evento === evento)
                )
            );

            // Remova o ID da célula clicada do estado clicadas
            setClicadas((prevClicadas) =>
                prevClicadas.filter((id) => id !== `${rowId}-${evento}`)
            );
        } else if (mesmoIdEventoExistente) {
            alert("Você não pode escolher dois eventos de categorias diferentes na mesma aposta.");
        } else {
            // Adicione o novo evento à lista de eventos clicados
            setEventosClicados((prevEventos) => [
                ...prevEventos,
                {
                    rowId,
                    evento,
                    oddCasa,
                    oddEmpate,
                    oddFora,
                },
            ]);

            // Adicione o ID da célula clicada ao estado clicadas
            setClicadas((prevClicadas) => [...prevClicadas, `${rowId}-${evento}`]);
        }
    };

    // Em outro lugar do seu código, onde você deseja verificar os eventos clicados:
    alert(eventosClicados.map((evento) => evento.evento).join(', '));
    console.log(eventosClicados);

    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Scrollbar>
                            <Stack direction="row" spacing={1} sx={{ mt: 5, mb: 5 }}>
                                {marketsData.map((market) => (
                                    <Chip
                                        key={market.id}
                                        label={market.label}
                                        color={market.color}
                                        sx={{ cursor: 'pointer', fontWeight: 'bold' }}
                                        onClick={() => handleMarketClick(market.label)}
                                    />
                                ))}
                            </Stack>
                        </Scrollbar>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Card>
                            <Scrollbar>
                                <TableContainer sx={{ minWidth: 800, border: 0 }}>
                                    <Table sx={{ borderCollapse: 'collapse' }}>
                                        <TableRow style={{ height: 53 }}>
                                            <TableCell colSpan={12} sx={{ backgroundColor: '#023047' }}>
                                                <Typography variant="subtitle">{concatenatedText || 'Campeonato'}</Typography>
                                            </TableCell>
                                        </TableRow>

                                        <TableBody sx={{ border: 0 }}>
                                            {activeMarket !== null ? (
                                                rows.map((row, index) => {
                                                    const { tempoJogo, timeCasa, timeFora, placarCasa, placarFora, oddCasa, oddEmpate, oddFora } =
                                                        row;
                                                    const id = index + 1;
                                                    const selectedUser = selected.indexOf(id) !== -1;
                                                    const iconType = iconTypes[id - 1];

                                                    return (
                                                        <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                                                            <TableCell padding="checkbox" sx={{ textAlign: 'center', cursor: 'pointer' }}>
                                                                {iconType === 'star' ? (
                                                                    <StarOutlineTwoToneIcon
                                                                        checked={selectedUser}
                                                                        onClick={(event) => handleClick(event, id)}
                                                                    />
                                                                ) : (
                                                                    <GradeTwoToneIcon
                                                                        sx={{ color: '#33FFC2' }}
                                                                        checked={selectedUser}
                                                                        onClick={(event) => handleClick(event, id)}
                                                                    />
                                                                )}
                                                            </TableCell>

                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                                padding="none"
                                                                sx={{
                                                                    width: { xs: '60px', md: '100px' },
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                <Chip
                                                                    label={`${tempoJogo} '`}
                                                                    onClick={handleClick}
                                                                    sx={{ backgroundColor: '#183D66', color: '#33FFC2' }}
                                                                />
                                                            </TableCell>

                                                            <TableCell align="left" sx={{ width: { xs: 20, md: 200 }, fontWeight: 'bold' }}>
                                                                <Typography variant="subtitle2" noWrap>
                                                                    {timeCasa}
                                                                </Typography>
                                                                <Typography variant="subtitle2" noWrap>
                                                                    {timeFora}
                                                                </Typography>
                                                            </TableCell>

                                                            <TableCell
                                                                align="left"
                                                                sx={{ backgroundColor: '#001D3D', textAlign: 'center', p: 2, minWidth: 70 }}
                                                            >
                                                                <Typography
                                                                    variant="body2"
                                                                    noWrap
                                                                    sx={{ color: '#33FFC2', fontSize: 16, fontWeight: 'bold' }}
                                                                >
                                                                    {placarCasa}
                                                                </Typography>
                                                                <Typography
                                                                    variant="body2"
                                                                    noWrap
                                                                    sx={{ color: '#33FFC2', fontSize: 16, fontWeight: 'bold' }}
                                                                >
                                                                    {placarFora}
                                                                </Typography>
                                                            </TableCell>

                                                            <TableCell
                                                                sx={{
                                                                    textAlign: 'center',
                                                                    cursor: 'pointer',
                                                                    backgroundColor: clicadas.includes(`${id}-${'Casa'}`) ? '#023047' : 'transparent',
                                                                }}
                                                                onClick={() => handleClickEvent(id, 'Casa', oddCasa, oddEmpate, oddFora)}
                                                            >
                                                                <Grid container justifyContent="space-between" alignItems="center" sx={{ borderRadius: 10 }}>
                                                                    <Grid item>{timeCasa}</Grid>
                                                                    <Grid item>
                                                                        <Chip
                                                                            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#33FFC2', fontWeight: 'bold' }}
                                                                            label={`${fDecimal(oddCasa)}`}
                                                                        />
                                                                    </Grid>
                                                                </Grid>
                                                            </TableCell>

                                                            <TableCell
                                                                sx={{
                                                                    textAlign: 'center',
                                                                    cursor: 'pointer',
                                                                    backgroundColor: clicadas.includes(`${id}-${'Empate'}`) ? '#023047' : 'transparent',
                                                                }}
                                                                onClick={() => handleClickEvent(id, 'Empate', oddCasa, oddEmpate, oddFora)}
                                                            >
                                                                <Grid container justifyContent="space-between" alignItems="center" sx={{ borderRadius: 10 }}>
                                                                    <Grid item>
                                                                        <Typography variant="body2">Empate</Typography>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Chip
                                                                            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#33FFC2', fontWeight: 'bold' }}
                                                                            label={`${fDecimal(oddEmpate)}`}
                                                                        />
                                                                    </Grid>
                                                                </Grid>
                                                            </TableCell>

                                                            <TableCell
                                                                sx={{
                                                                    textAlign: 'center',
                                                                    cursor: 'pointer',
                                                                    backgroundColor: clicadas.includes(`${id}-${'Fora'}`) ? '#023047' : 'transparent',
                                                                }}
                                                                onClick={() => handleClickEvent(id, 'Fora', oddCasa, oddEmpate, oddFora)}
                                                            >
                                                                <Grid container justifyContent="space-between" alignItems="center" sx={{ borderRadius: 10 }}>
                                                                    <Grid item>{timeFora}</Grid>
                                                                    <Grid item>
                                                                        <Chip
                                                                            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#33FFC2', fontWeight: 'bold' }}
                                                                            label={`${fDecimal(oddFora)}`}
                                                                        />
                                                                    </Grid>
                                                                </Grid>
                                                            </TableCell>

                                                            <TableCell align="center">+233</TableCell>
                                                        </TableRow>
                                                    );
                                                })
                                            ) : (
                                                <TableRow style={{ height: 53 }}>
                                                    <TableCell colSpan={12}>
                                                        <Typography variant="subtitle1">
                                                            Clique em um mercado para exibir a tabela correspondente.
                                                        </Typography>
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

                    <Grid item xs={12} md={12} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                        <Fab hover variant="extended">
                            <NavigationIcon sx={{ mr: 1 }} />
                            Apostar ({totalSelecoes} seleções) {/* Texto do botão com o total de seleções */}
                        </Fab>
                    </Grid>

                </Grid>
            </Container>

            {/* Popover aqui */}
        </>
    );
}
