import React, { useState, useEffect } from 'react';

import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';
import AutoAwesomeMotionTwoToneIcon from '@mui/icons-material/AutoAwesomeMotionTwoTone';
import SportsSoccerTwoToneIcon from '@mui/icons-material/SportsSoccerTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import StarOutlineTwoToneIcon from '@mui/icons-material/StarOutlineTwoTone';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import PublicIcon from '@mui/icons-material/Public';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

import {
    Box,
    CardHeader,
    Tabs,
    Tab,
    CardContent,
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
    List,
    ListItem,
    ListItemText,
    Drawer,
    TextField,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import FabButton from '../../../components/button-apostar/FabButton';
import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';
import ModalConfirmBet from '../../../components/modal/ModalConfirmBet';
import { fDecimal, fCurrency } from '../../../utils/formatNumber';
import GetCountries from '../../../api/GetCountries';
import GetStadings from '../../../api/GetStadings';
import Competitions from '../../../api/Competitions';
import CustomAlert from '../../../components/alert';

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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.16,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.16,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.16,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.16,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.16,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.16,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.16,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.16,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.16,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.16,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.16,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.16,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.16,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
    },
    {
        id: 42,
        tempoJogo: '60',
        timeCasa: 'Time da Casa 42',
        timeFora: 'Time de Fora 42',
        placarCasa: 3,
        placarFora: 0,
        oddCasa: 2.1,
        oddEmpate: 3.0,
        oddFora: 2.5,
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
    },
    {
        id: 43,
        tempoJogo: '30',
        timeCasa: 'Time da Casa 43',
        timeFora: 'Time de Fora 43',
        placarCasa: 2,
        placarFora: 2,
        oddCasa: 2.1,
        oddEmpate: 3.0,
        oddFora: 2.5,
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
    },
    {
        id: 44,
        tempoJogo: '75',
        timeCasa: 'Time da Casa 44',
        timeFora: 'Time de Fora 44',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.1,
        oddEmpate: 3.0,
        oddFora: 2.5,
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
    },
    {
        id: 45,
        tempoJogo: '80',
        timeCasa: 'Time da Casa 45',
        timeFora: 'Time de Fora 45',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 2.1,
        oddEmpate: 3.0,
        oddFora: 2.5,
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
    },
    {
        id: 46,
        tempoJogo: '20',
        timeCasa: 'Time da Casa 46',
        timeFora: 'Time de Fora 46',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.1,
        oddEmpate: 3.0,
        oddFora: 2.5,
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
    },
    {
        id: 47,
        tempoJogo: '45',
        timeCasa: 'Time da Casa 47',
        timeFora: 'Time de Fora 47',
        placarCasa: 1,
        placarFora: 2,
        oddCasa: 2.1,
        oddEmpate: 3.0,
        oddFora: 2.5,
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
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
        odd1x: 3.16,
        odd12: 4.16,
        odd2x: 1.23,
    },
];

export default function UserPage() {
    const theme = useTheme();
    const [selected, setSelected] = useState([]);
    const [activeMarket, setActiveMarket] = useState(null);
    const [concatenatedText, setConcatenatedText] = useState('');
    const [iconTypes, setIconTypes] = useState(rows.map(() => 'star'));
    const [eventosClicados, setEventosClicados] = useState([]);
    const [clicadas, setClicadas] = useState([]);
    const [totalSelecoes, setTotalSelecoes] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [valorAposta, setValorAposta] = useState(0);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const anchor = isMobile ? 'bottom' : 'right';
    const drawerWidth = 400;
    const [stadingsData, setStadingsData] = useState([]);
    const [data, setData] = useState([]);
    const [selectedCountryId, setSelectedCountryId] = useState(null);
    const [competitionsData, setCompetitionsData] = useState([]);
    const [countryId, setCountryId] = useState(152);
    const [dataBet, setDataBet] = useState([]); // Inicialize o array de dados como vazio
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedChips, setSelectedChips] = useState([]);
    const [erro, setErro] = useState(null);

    // alert mensagem de erro 
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const countriesData = GetCountries();
    // useEffect para fazer requisição só quando a página for carregada
    useEffect(() => {
        if (countriesData.length > 0) {
            console.log(countriesData);
        }
    }, [countriesData]);

    const handleOpenAlert = (message) => {
        setAlertMessage(message);
        setAlertOpen(true);
    };

    const handleCloseAlert = () => {
        setAlertOpen(false);
    };

    // Função para alternar entre as guias
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleClickOpenModal = () => {
        const newData = ['Item 1', 'Item 2', 'Item 3'];
        setDataBet(newData);
        setIsModalOpen(true);
    };

    const openDrawer = () => {
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
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

        updatedIconTypes[id - 1] = updatedIconTypes[id - 1] === 'star' ? 'grade' : 'star';
        setIconTypes(updatedIconTypes);
    };

    const calcularTotalSelecoes = () => {
        return eventosClicados.length;
    };

    useEffect(() => {
        setTotalSelecoes(calcularTotalSelecoes());
    }, [eventosClicados]);

    const handleClickEvent = (rowId, evento, timeCasa, timeFora, oddCasa, oddEmpate, oddFora, odd1x, odd12, odd2x) => {
        const eventoExistente = eventosClicados.find(
            (event) => event.rowId === rowId && event.evento === evento
        );

        const mesmoIdEventoExistente = eventosClicados.find(
            (event) => event.rowId === rowId && event.evento !== evento
        );

        if (eventoExistente) {
            setEventosClicados((prevEventos) =>
                prevEventos.filter(
                    (event) => !(event.rowId === rowId && event.evento === evento)
                )
            );

            setClicadas((prevClicadas) =>
                prevClicadas.filter((id) => id !== `${rowId}-${evento}`)
            );
        } else if (mesmoIdEventoExistente) {
            handleOpenAlert("Não foi possível adicionar, já existe escolha neste evento.")
        } else {
            setEventosClicados((prevEventos) => [
                ...prevEventos,
                {
                    rowId,
                    evento,
                    oddCasa,
                    oddEmpate,
                    oddFora,
                    timeCasa,
                    timeFora,
                    odd1x,
                    odd12,
                    odd2x
                },
            ]);

            setClicadas((prevClicadas) => [...prevClicadas, `${rowId}-${evento}`]);
        }
    };

    const calcularOddsTotais = () => {
        const oddsTotais = eventosClicados.reduce((acc, evento) => {
            const { evento: tipoEvento } = evento; // Obtém o tipo de evento (Casa, Empate, Fora, etc.)

            let oddKey;

            switch (tipoEvento) {
                case 'Casa':
                    oddKey = 'oddCasa';
                    break;
                case 'Empate':
                    oddKey = 'oddEmpate';
                    break;
                case 'Fora':
                    oddKey = 'oddFora';
                    break;
                case 'Casa ou Empate':
                    oddKey = 'odd1x';
                    break;
                case 'Casa ou Fora':
                    oddKey = 'odd12';
                    break;
                case 'Fora ou Empate':
                    oddKey = 'odd2x';
                    break;
                default:
                    // Trate qualquer outro tipo de evento ou erro aqui
                    break;
            }

            const odd = evento[oddKey];

            if (typeof odd === 'number' && !Number.isNaN(odd) && odd > 0.0001) {
                return acc * odd;
            }
            return acc;
        }, 1);
        console.log(oddsTotais)
        // corrigir esse retorno de 1
        return oddsTotais;
    };


    const calcularPossiveisRetornos = () => {
        const oddsTotais = calcularOddsTotais();
        const possiveisRetornos = valorAposta * oddsTotais;
        return possiveisRetornos;
    };

    const onDataUpdate = (fetchedData) => {
        setData(fetchedData);
    };

    const onDataUpdateCompetitions = (data) => {
        setCompetitionsData(data);
    };

    const selectCountry = (countryId) => {
        setSelectedCountryId(countryId);
    };

    useEffect(() => {

        if (selectedCountryId) {
            // Verifique se os dados das competições ainda não foram carregados
            if (!competitionsData) {
                // Se ainda não foram carregados, faça a solicitação
                const fetchData = async () => {
                    try {
                        const response = await Competitions(selectedCountryId);
                        setCompetitionsData(response);
                    } catch (error) {
                        console.error('Erro ao buscar dados da API de competições:', error);
                    }
                };

                fetchData();
            }
        }
    }, [selectedCountryId, competitionsData]);

    const handleMarketClick = (market, idChip) => {
        if (selectedChips.includes(idChip)) {
            // O Chip já está selecionado, portanto, desmarque-o
            setSelectedChips([]);
            setActiveMarket('');
            setConcatenatedText('');
        } else {
            // O Chip não está selecionado, então defina-o como selecionado e atualize o activeMarket como uma string
            setSelectedChips([idChip]);
            setActiveMarket(market.toString());

            const newLabel = `Brasil - Campeonato Brasileiro Série A (${market})`;
            setConcatenatedText(newLabel);
        }
    };

    const handleRemoveEvento = (rowId, evento) => {
        const eventoExistente = eventosClicados.find(
            (event) => event.rowId === rowId && event.evento === evento
        );

        if (eventoExistente) {
            setEventosClicados((prevEventos) =>
                prevEventos.filter(
                    (event) => !(event.rowId === rowId && event.evento === evento)
                )
            );

            setClicadas((prevClicadas) =>
                prevClicadas.filter((id) => id !== `${rowId}-${evento}`)
            );
        }

        // Use a função filter para criar um novo array sem o evento correspondente ao rowId
        const novoEventosClicados = eventosClicados.filter((evento) => evento.rowId !== rowId);

        // Atualize o estado com o novo array de eventos
        setEventosClicados(novoEventosClicados);

        // Remova o item do array clicadas
        setClicadas((prevClicadas) =>
            prevClicadas.filter((id) => id !== `${rowId}-${evento}`)
        );
    };

    return (
        <>
            <Container maxWidth="xl">
                <CustomAlert open={alertOpen} message={alertMessage} onClose={handleCloseAlert} />
                <Card sx={{ backgroundColor: '#001D3D', marginTop: { xs: 2, md: 2 } }}>
                    <Typography variant="h6" sx={{ textAlign: 'left', pr: 2, ml: 3, mt: 2, fontSixe: 12, color: '#33FFC2' }}>Filtros</Typography>
                    <CardHeader
                        action={
                            <Tabs value={selectedTab} onChange={handleTabChange}
                                sx={{
                                    width: { xs: '100%', sm: 'auto' },
                                }}>
                                <Tab
                                    label={
                                        <Box display="flex" alignItems="center">
                                            <PublicIcon />
                                            &nbsp; Por País
                                        </Box>
                                    }
                                />
                                <Tab
                                    label={
                                        <Box display="flex" alignItems="center">
                                            <SportsSoccerIcon />
                                            &nbsp; Por Liga
                                        </Box>
                                    }
                                />
                                {/* <Tab
                                    icon={
                                        <Box display="flex" alignItems="center">
                                            <AutoAwesomeMotionTwoToneIcon />
                                            &nbsp; Minhas Apostas
                                        </Box>
                                    }
                                /> */}
                            </Tabs>
                        }
                    />

                    <CardContent>
                        {selectedTab === 0 &&
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={12}>
                                    <Typography variant="body2" sx={{ textAlign: 'left', color: '#33FFC2', fontWeight: 600 }}>
                                        Filtrar por país ({countriesData ? countriesData.length : 0})
                                    </Typography>

                                    <Scrollbar>
                                        <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 2 }}>
                                            {countriesData ? (
                                                countriesData.map((country) => (
                                                    <Chip
                                                        avatar={<Avatar alt="Countries" src={country.country_logo} />}
                                                        key={country.country_id}
                                                        label={country.country_name == null ? '' : country.country_name}
                                                        sx={{ cursor: 'pointer', fontWeight: 'bold', backgroundColor: '#023047', color: '#B6F4E2' }}
                                                        onClick={() => selectCountry(country.country_id)}
                                                    />
                                                ))
                                            ) : (
                                                <p>Carregando dados...</p>
                                            )}
                                        </Stack>
                                    </Scrollbar>
                                </Grid>
                            </Grid>
                        }

                        {selectedTab === 1 &&
                            <Grid spacing={3} sx={{ mt: 2 }}>
                                <Grid item xs={12} md={12}>
                                    <Typography variant="body2" sx={{ textAlign: 'left', color: '#33FFC2', fontWeight: 600 }}>
                                        Filtrar por liga ({competitionsData.length})
                                    </Typography>
                                    <Competitions
                                        countryId={selectedCountryId}
                                        onDataUpdateCompetitions={onDataUpdateCompetitions}
                                    />
                                    <Scrollbar>
                                        <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 2 }}>
                                            {competitionsData !== null ? (
                                                competitionsData.map((league) => (
                                                    <Chip
                                                        avatar={
                                                            league.country_logo
                                                                ? <Avatar sx={{ color: '#B6F4E2' }} alt="Leagues" src={league.country_logo} />
                                                                : <Avatar sx={{ color: '#B6F4E2' }} alt="Leagues">{league.league_name[0]}</Avatar>
                                                        }
                                                        key={league.league_id}
                                                        label={league.league_name}
                                                        sx={{ cursor: 'pointer', fontWeight: 'bold', backgroundColor: '#023047', color: '#B6F4E2' }}
                                                    />
                                                ))
                                            ) : (
                                                <p>Carregando dados...</p>
                                            )}
                                        </Stack>
                                    </Scrollbar>
                                </Grid>
                            </Grid>}
                        {selectedTab === 2 && <Typography>Minhas Apostas</Typography>}
                    </CardContent>
                </Card>

                <Grid container>
                    <Grid item xs={12} md={12} sx={{ mt: 4, backgroundColor: '#023047', boxShadow: '0px 5px 15px 0px rgba(0, 0, 0, 0.15)', borderRadius: 3 }}>
                        <Scrollbar>
                            <Scrollbar>
                                <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 2, p: 2 }}>
                                    {marketsData.map((market) => (
                                        <Chip
                                            key={market.id}
                                            label={market.label}
                                            color={market.color}
                                            variant={selectedChips.includes(market.id) ? 'outlined' : 'filled'}
                                            sx={{
                                                cursor: 'pointer',
                                                fontWeight: 'bold',
                                                backgroundColor: selectedChips.includes(market.id) ? '#023047' : '#023047',
                                                color: selectedChips.includes(market.id) ? '#33FFC2' : '#B6F4E2',
                                                '&:hover': {
                                                    backgroundColor: '#023047',
                                                    color: '#B6F4E2',
                                                },
                                            }}
                                            onClick={() => handleMarketClick(market.label, market.id)}
                                        />
                                    ))}
                                </Stack>
                            </Scrollbar>

                            <TableContainer sx={{ minWidth: 900, p: 0 }}>
                                <Table sx={{ borderCollapse: 'collapse' }}>
                                    <TableRow style={{ height: 53 }}>
                                        <TableCell colSpan={12} sx={{ backgroundColor: '#023047', color: '#33FFC2', fontWeight: 'bold' }}>
                                            <Typography variant="subtitle">{concatenatedText || 'Campeonato'}</Typography>
                                        </TableCell>
                                    </TableRow>

                                    <TableBody sx={{ border: 0 }}>
                                        {activeMarket !== null ? (
                                            rows.map((row, index) => {
                                                const { tempoJogo, timeCasa, timeFora, placarCasa, placarFora, oddCasa, oddEmpate, oddFora, odd1x, odd12, odd2x }
                                                    = row;
                                                const id = index + 1;
                                                const selectedUser = selected.indexOf(id) !== -1;
                                                const iconType = iconTypes[id - 1];

                                                return (
                                                    <TableRow hover key={id} tabIndex={-1} role="checkbox" sx={{ backgroundColor: '#001D3D', m: 0 }}>
                                                        <TableCell padding="checkbox" sx={{ textAlign: 'center', cursor: 'pointer', color: iconType !== 'star' ? '#33FFC2' : '#6FA9EB', backgroundColor: iconType !== 'star' ? '#001D3D' : '#001D3D' }}>
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
                                                                icon={<AlarmOutlinedIcon />}
                                                                onClick={handleClick}
                                                                sx={{ backgroundColor: '#183D66', color: '#33FFC2', fontWeight: 600 }}
                                                            />
                                                        </TableCell>

                                                        <TableCell align="left" sx={{ width: { xs: 200, md: 400 }, fontWeight: 'bold' }}>
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

                                                        {activeMarket.toString() === 'Principais mercados' && Array.isArray(selectedChips) && selectedChips.length === 1 && selectedChips[0] === 1 ?
                                                            <>
                                                                <TableCell
                                                                    sx={{
                                                                        textAlign: 'center',
                                                                        cursor: 'pointer',
                                                                        backgroundColor: clicadas.includes(`${id}-${'Casa'}`) ? '#023047' : 'transparent',
                                                                        color: clicadas.includes(`${id}-${'Casa'}`) ? '#B6F4E2' : '#6FA9EB',
                                                                        width: { xs: 40, md: 200 },
                                                                    }}
                                                                    onClick={() =>
                                                                        handleClickEvent(
                                                                            id,
                                                                            'Casa',
                                                                            timeCasa,
                                                                            timeFora,
                                                                            oddCasa,
                                                                            oddEmpate,
                                                                            oddFora
                                                                        )
                                                                    }
                                                                >
                                                                    <Grid container justifyContent="space-between" alignItems="center" sx={{ borderRadius: 10 }}>
                                                                        <Grid item>{timeCasa}</Grid>
                                                                        <Grid item>
                                                                            <Chip
                                                                                sx={{
                                                                                    display: 'flex',
                                                                                    justifyContent: 'space-between',
                                                                                    alignItems: 'center',
                                                                                    backgroundColor: clicadas.includes(`${id}-${'Casa'}`)
                                                                                        ? '#33FFC2'
                                                                                        : '#023047',
                                                                                    color: clicadas.includes(`${id}-${'Casa'}`)
                                                                                        ? '#023047'
                                                                                        : '#33FFC2',
                                                                                    fontWeight: 'bold',
                                                                                }}
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
                                                                        color: clicadas.includes(`${id}-${'Empate'}`) ? '#B6F4E2' : '#6FA9EB',
                                                                        width: { xs: 40, md: 200 },
                                                                    }}
                                                                    onClick={() =>
                                                                        handleClickEvent(
                                                                            id,
                                                                            'Empate',
                                                                            timeCasa,
                                                                            timeFora,
                                                                            oddCasa,
                                                                            oddEmpate,
                                                                            oddFora
                                                                        )
                                                                    }
                                                                >
                                                                    <Grid container justifyContent="space-between" alignItems="center" sx={{ borderRadius: 10 }}>
                                                                        <Grid item>
                                                                            <Typography variant="body2">Empate</Typography>
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <Chip
                                                                                sx={{
                                                                                    display: 'flex',
                                                                                    justifyContent: 'space-between',
                                                                                    alignItems: 'center',
                                                                                    backgroundColor: clicadas.includes(`${id}-${'Empate'}`)
                                                                                        ? '#33FFC2'
                                                                                        : '#023047',
                                                                                    color: clicadas.includes(`${id}-${'Empate'}`)
                                                                                        ? '#023047'
                                                                                        : '#33FFC2',
                                                                                    fontWeight: 'bold',
                                                                                }}
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
                                                                        color: clicadas.includes(`${id}-${'Fora'}`) ? '#B6F4E2' : '#6FA9EB',
                                                                        width: { xs: 40, md: 200 },
                                                                    }}
                                                                    onClick={() =>
                                                                        handleClickEvent(
                                                                            id,
                                                                            'Fora',
                                                                            timeCasa,
                                                                            timeFora,
                                                                            oddCasa,
                                                                            oddEmpate,
                                                                            oddFora
                                                                        )
                                                                    }
                                                                >
                                                                    <Grid container justifyContent="space-between" alignItems="center" sx={{ borderRadius: 10 }}>
                                                                        <Grid item>{timeFora}</Grid>
                                                                        <Grid item>
                                                                            <Chip
                                                                                sx={{
                                                                                    display: 'flex',
                                                                                    justifyContent: 'space-between',
                                                                                    alignItems: 'center',
                                                                                    backgroundColor: clicadas.includes(`${id}-${'Fora'}`)
                                                                                        ? '#33FFC2'
                                                                                        : '#023047',
                                                                                    color: clicadas.includes(`${id}-${'Fora'}`)
                                                                                        ? '#023047'
                                                                                        : '#33FFC2',
                                                                                    fontWeight: 'bold',
                                                                                }}
                                                                                label={`${fDecimal(oddFora)}`}
                                                                            />
                                                                        </Grid>
                                                                    </Grid>
                                                                </TableCell>
                                                            </>
                                                            : activeMarket.toString() === 'Resultado Final' && Array.isArray(selectedChips) && selectedChips.length === 1 && selectedChips[0] === 2 ?
                                                                <>
                                                                    <TableCell
                                                                        sx={{
                                                                            textAlign: 'center',
                                                                            cursor: 'pointer',
                                                                            backgroundColor: clicadas.includes(`${id}-${'Casa'}`) ? '#023047' : 'transparent',
                                                                            color: clicadas.includes(`${id}-${'Casa'}`) ? '#B6F4E2' : '#6FA9EB',
                                                                            width: { xs: 40, md: 200 },
                                                                        }}
                                                                        onClick={() =>
                                                                            handleClickEvent(
                                                                                id,
                                                                                'Casa',
                                                                                timeCasa,
                                                                                timeFora,
                                                                                oddCasa,
                                                                                oddEmpate,
                                                                                oddFora
                                                                            )
                                                                        }
                                                                    >
                                                                        <Grid container justifyContent="space-between" alignItems="center" sx={{ borderRadius: 10 }}>
                                                                            <Grid item>{timeCasa}</Grid>
                                                                            <Grid item>
                                                                                <Chip
                                                                                    sx={{
                                                                                        display: 'flex',
                                                                                        justifyContent: 'space-between',
                                                                                        alignItems: 'center',
                                                                                        backgroundColor: clicadas.includes(`${id}-${'Casa'}`)
                                                                                            ? '#33FFC2'
                                                                                            : '#023047',
                                                                                        color: clicadas.includes(`${id}-${'Casa'}`)
                                                                                            ? '#023047'
                                                                                            : '#33FFC2',
                                                                                        fontWeight: 'bold',
                                                                                    }}
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
                                                                            color: clicadas.includes(`${id}-${'Empate'}`) ? '#B6F4E2' : '#6FA9EB',
                                                                            width: { xs: 40, md: 200 },
                                                                        }}
                                                                        onClick={() =>
                                                                            handleClickEvent(
                                                                                id,
                                                                                'Empate',
                                                                                timeCasa,
                                                                                timeFora,
                                                                                oddCasa,
                                                                                oddEmpate,
                                                                                oddFora
                                                                            )
                                                                        }
                                                                    >
                                                                        <Grid container justifyContent="space-between" alignItems="center" sx={{ borderRadius: 10 }}>
                                                                            <Grid item>
                                                                                <Typography variant="body2">Empate</Typography>
                                                                            </Grid>
                                                                            <Grid item>
                                                                                <Chip
                                                                                    sx={{
                                                                                        display: 'flex',
                                                                                        justifyContent: 'space-between',
                                                                                        alignItems: 'center',
                                                                                        backgroundColor: clicadas.includes(`${id}-${'Empate'}`)
                                                                                            ? '#33FFC2'
                                                                                            : '#023047',
                                                                                        color: clicadas.includes(`${id}-${'Empate'}`)
                                                                                            ? '#023047'
                                                                                            : '#33FFC2',
                                                                                        fontWeight: 'bold',
                                                                                    }}
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
                                                                            color: clicadas.includes(`${id}-${'Fora'}`) ? '#B6F4E2' : '#6FA9EB',
                                                                            width: { xs: 40, md: 200 },
                                                                        }}
                                                                        onClick={() =>
                                                                            handleClickEvent(
                                                                                id,
                                                                                'Fora',
                                                                                timeCasa,
                                                                                timeFora,
                                                                                oddCasa,
                                                                                oddEmpate,
                                                                                oddFora
                                                                            )
                                                                        }
                                                                    >
                                                                        <Grid container justifyContent="space-between" alignItems="center" sx={{ borderRadius: 10 }}>
                                                                            <Grid item>{timeFora}</Grid>
                                                                            <Grid item>
                                                                                <Chip
                                                                                    sx={{
                                                                                        display: 'flex',
                                                                                        justifyContent: 'space-between',
                                                                                        alignItems: 'center',
                                                                                        backgroundColor: clicadas.includes(`${id}-${'Fora'}`)
                                                                                            ? '#33FFC2'
                                                                                            : '#023047',
                                                                                        color: clicadas.includes(`${id}-${'Fora'}`)
                                                                                            ? '#023047'
                                                                                            : '#33FFC2',
                                                                                        fontWeight: 'bold',
                                                                                    }}
                                                                                    label={`${fDecimal(oddFora)}`}
                                                                                />
                                                                            </Grid>
                                                                        </Grid>
                                                                    </TableCell>
                                                                </>
                                                                : activeMarket.toString() === 'Dupla Chance' && Array.isArray(selectedChips) && selectedChips.length === 1 && selectedChips[0] === 3 ?
                                                                    <>
                                                                        <TableCell
                                                                            sx={{
                                                                                textAlign: 'center',
                                                                                cursor: 'pointer',
                                                                                backgroundColor: clicadas.includes(`${id}-${'Casa ou Empate'}`) ? '#023047' : 'transparent',
                                                                                color: clicadas.includes(`${id}-${'Casa ou Empate'}`) ? '#B6F4E2' : '#6FA9EB',
                                                                                width: { xs: 40, md: 200 },
                                                                            }}
                                                                            onClick={() =>
                                                                                handleClickEvent(
                                                                                    id,
                                                                                    'Casa ou Empate',
                                                                                    timeCasa,
                                                                                    timeFora,
                                                                                    oddCasa,
                                                                                    oddEmpate,
                                                                                    oddFora,
                                                                                    odd1x,
                                                                                    odd12,
                                                                                    odd2x
                                                                                )
                                                                            }
                                                                        >
                                                                            <Grid container justifyContent="space-between" alignItems="center" sx={{ borderRadius: 10 }}>
                                                                                <Grid item>{`${timeCasa} ou Empate`}</Grid>
                                                                                <Grid item>
                                                                                    <Chip
                                                                                        sx={{
                                                                                            display: 'flex',
                                                                                            justifyContent: 'space-between',
                                                                                            alignItems: 'center',
                                                                                            backgroundColor: clicadas.includes(`${id}-${'Casa ou Empate'}`)
                                                                                                ? '#33FFC2'
                                                                                                : '#023047',
                                                                                            color: clicadas.includes(`${id}-${'Casa ou Empate'}`)
                                                                                                ? '#023047'
                                                                                                : '#33FFC2',
                                                                                            fontWeight: 'bold',
                                                                                        }}
                                                                                        label={`${fDecimal(odd1x)}`}
                                                                                    />
                                                                                </Grid>
                                                                            </Grid>
                                                                        </TableCell>

                                                                        <TableCell
                                                                            sx={{
                                                                                textAlign: 'center',
                                                                                cursor: 'pointer',
                                                                                backgroundColor: clicadas.includes(`${id}-${'Casa ou Fora'}`) ? '#023047' : 'transparent',
                                                                                color: clicadas.includes(`${id}-${'Casa ou Fora'}`) ? '#B6F4E2' : '#6FA9EB',
                                                                                width: { xs: 40, md: 200 },
                                                                            }}
                                                                            onClick={() =>
                                                                                handleClickEvent(
                                                                                    id,
                                                                                    'Casa ou Fora',
                                                                                    timeCasa,
                                                                                    timeFora,
                                                                                    oddCasa,
                                                                                    oddEmpate,
                                                                                    oddFora,
                                                                                    odd1x,
                                                                                    odd12,
                                                                                    odd2x
                                                                                )
                                                                            }
                                                                        >
                                                                            <Grid container justifyContent="space-between" alignItems="center" sx={{ borderRadius: 10 }}>
                                                                                <Grid item>
                                                                                    <Grid item>{`${timeCasa} ou ${timeFora}`}</Grid>

                                                                                </Grid>
                                                                                <Grid item>
                                                                                    <Chip
                                                                                        sx={{
                                                                                            display: 'flex',
                                                                                            justifyContent: 'space-between',
                                                                                            alignItems: 'center',
                                                                                            backgroundColor: clicadas.includes(`${id}-${'Casa ou Fora'}`)
                                                                                                ? '#33FFC2'
                                                                                                : '#023047',
                                                                                            color: clicadas.includes(`${id}-${'Casa ou Fora'}`)
                                                                                                ? '#023047'
                                                                                                : '#33FFC2',
                                                                                            fontWeight: 'bold',
                                                                                        }}
                                                                                        label={`${fDecimal(odd12)}`}
                                                                                    />
                                                                                </Grid>
                                                                            </Grid>
                                                                        </TableCell>

                                                                        <TableCell
                                                                            sx={{
                                                                                textAlign: 'center',
                                                                                cursor: 'pointer',
                                                                                backgroundColor: clicadas.includes(`${id}-${'Fora ou Empate'}`) ? '#023047' : 'transparent',
                                                                                color: clicadas.includes(`${id}-${'Fora ou Empate'}`) ? '#B6F4E2' : '#6FA9EB',
                                                                                width: { xs: 40, md: 200 },
                                                                            }}
                                                                            onClick={() =>
                                                                                handleClickEvent(
                                                                                    id,
                                                                                    'Fora ou Empate',
                                                                                    timeCasa,
                                                                                    timeFora,
                                                                                    oddCasa,
                                                                                    oddEmpate,
                                                                                    oddFora,
                                                                                    odd1x,
                                                                                    odd12,
                                                                                    odd2x
                                                                                )
                                                                            }
                                                                        >
                                                                            <Grid container justifyContent="space-between" alignItems="center" sx={{ borderRadius: 10 }}>
                                                                                <Grid item>{`${timeFora} ou Empate`}</Grid>
                                                                                <Grid item>
                                                                                    <Chip
                                                                                        sx={{
                                                                                            display: 'flex',
                                                                                            justifyContent: 'space-between',
                                                                                            alignItems: 'center',
                                                                                            backgroundColor: clicadas.includes(`${id}-${'Fora ou Empate'}`)
                                                                                                ? '#33FFC2'
                                                                                                : '#023047',
                                                                                            color: clicadas.includes(`${id}-${'Fora ou Empate'}`)
                                                                                                ? '#023047'
                                                                                                : '#33FFC2',
                                                                                            fontWeight: 'bold',
                                                                                        }}
                                                                                        label={`${fDecimal(odd2x)}`}
                                                                                    />
                                                                                </Grid>
                                                                            </Grid>
                                                                        </TableCell>
                                                                    </>
                                                                    : ''
                                                        }

                                                        <TableCell align="center" >
                                                            {selectedChips}
                                                            <p>{`market: ${activeMarket}`}</p>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })
                                        ) : (
                                            <TableRow style={{ height: 53 }}>
                                                <TableCell colSpan={12}>
                                                    <Typography variant="subtitle1">
                                                        Nenhuma opção disponível
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
                    </Grid>
                </Grid>

                <FabButton eventosClicados={eventosClicados} onNavigateClick={openDrawer} />

                <Drawer
                    anchor={anchor}
                    open={isDrawerOpen}
                    onClose={closeDrawer}
                    sx={{
                        width: isMobile ? '100%' : drawerWidth, // Largura total em dispositivos móveis, largura definida em desktop
                        overflowY: 'auto', height: '100%',
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: isMobile ? '100%' : drawerWidth, // Largura total em dispositivos móveis, largura definida em desktop
                            overflowY: 'auto', height: '100%',
                        },
                    }}
                >

                    <Grid container sx={{ backgroundColor: '#023047', p: 3, mb: 2, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                        <Grid item xs={8}>
                            <Typography
                                variant="h6"
                                sx={{
                                    textAlign: 'left',
                                    display: 'flex',
                                    color: '#33FFC2',
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                    py: 1,
                                }}
                            >
                                Cupom de Aposta{''}
                            </Typography>

                            <Typography variant="body2" sx={{ color: '#B6F4E2' }}>
                                {totalSelecoes > 1
                                    ? `Múltipla: ${totalSelecoes} seleções`
                                    : totalSelecoes === 1
                                        ? 'Simples: 1 seleção'
                                        : ''}
                            </Typography>
                        </Grid>

                        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Button
                                sx={{
                                    backgroundColor: '#073b4c',
                                    color: '#33FFC2',
                                    textTransform: 'none', // Para manter o texto "Fechar" em letras 
                                    p: 1
                                }}
                                onClick={closeDrawer} // Substitua 'closeDrawer' pela função que fecha o Drawer
                            >
                                <HighlightOffTwoToneIcon />
                                <Typography variant="body2" sx={{ ml: 1, fontWeight: 600 }}>
                                    Fechar
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Scrollbar sx={{ overflowY: 'auto', height: '100%' }}>
                        <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {eventosClicados.map((evento, index) => (
                                <ListItem
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        p: 2,
                                        width: '92%',
                                        border: '.5px solid rgba(0, 0, 0, 0.2)',
                                        mb: 2,
                                        borderRadius: 3,
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                                    }}
                                    key={index}
                                >
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item xs={1}>
                                            <SportsSoccerTwoToneIcon />
                                        </Grid>

                                        <Grid item xs={9}>
                                            <Typography variant="body1" sx={{ mb: 1, fontSize: 15, fontWeight: 600 }}>
                                                {evento.timeCasa} X {evento.timeFora}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={2} key={evento.rowId}>
                                            <IconButton
                                                className="lixeira-button"
                                                sx={{
                                                    mr: 1,
                                                    mb: 2,
                                                    textAlign: 'center',
                                                    color: '#FF99AC'
                                                }}
                                                onClick={() => handleRemoveEvento(evento.rowId, evento.evento)}
                                            >
                                                <DeleteTwoToneIcon />
                                            </IconButton>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant="subtitle" sx={{
                                                fontSize: 14,
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                color: '#6FA9EB'
                                            }}>
                                                {
                                                    evento.evento === 'Casa' ? `Vencedor da partida: ${evento.timeCasa}`
                                                        : evento.evento === 'Empate' ? `Vencedor da partida: ${evento.evento}`
                                                            : evento.evento === 'Fora' ? `Vencedor da partida: ${evento.timeFora}`
                                                                : evento.evento === 'Casa ou Fora' ? `Dupla Chance: ${evento.timeCasa} ou ${evento.timeFora}`
                                                                    : evento.evento === 'Casa ou Empate' ? `Dupla Chance: ${evento.timeCasa} ou Empate`
                                                                        : evento.evento === 'Fora ou Empate' ? `Dupla Chance: ${evento.timeFora} ou Empate` : ''
                                                }
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant="subtitle" sx={{
                                                fontSize: 14,
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                color: '#6FA9EB'
                                            }}>
                                                {
                                                    evento.evento === 'Casa' ? `Odd: ${fDecimal(evento.oddCasa)}`
                                                        : evento.evento === 'Empate' ? `Odd: ${fDecimal(evento.oddEmpate)}`
                                                            : evento.evento === 'Fora' ? `Odd: ${fDecimal(evento.oddFora)}`
                                                                : evento.evento === 'Casa ou Fora' ? `Odd: ${evento.odd12}`
                                                                    : evento.evento === 'Casa ou Empate' ? `Odd: ${evento.odd1x}`
                                                                        : evento.evento === 'Fora ou Empate' ? `Odd: ${evento.odd2x}` : ''
                                                }
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            ))
                            }
                        </List>
                    </Scrollbar>

                    <ListItem>
                        <ListItemText
                            primary={
                                <TextField sx={{ mt: 2 }}
                                    label="Valor da Aposta"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    value={valorAposta}
                                    onChange={(e) => setValorAposta(parseFloat(e.target.value))}
                                />
                            }
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText
                            primary={`Odds Totais: ${calcularOddsTotais().toFixed(2)}`}
                        />
                    </ListItem>

                    <ListItem sx={{ mb: 2 }}>
                        <ListItemText
                            primary={`Possíveis Retornos: R$ ${fCurrency(Number.isNaN(calcularPossiveisRetornos())) ? '' : calcularPossiveisRetornos().toFixed(2)}`}
                        />
                    </ListItem>

                    <div>
                        <Button
                            onClick={handleClickOpenModal}
                            variant="contained"
                            fullWidth
                            sx={{
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 0,
                                height: 80,
                                fontSize: 16
                            }}
                        >
                            Confirmar Aposta
                        </Button>

                        <ModalConfirmBet
                            data={dataBet}
                            isOpen={isModalOpen} // Passe o estado para controlar a abertura do modal
                            onClose={() => setIsModalOpen(false)} // Passe a função para fechar o modal
                        />
                    </div>
                </Drawer>
            </Container >
        </>
    );
}