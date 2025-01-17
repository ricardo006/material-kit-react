import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { toast, ToastContainer } from 'react-toastify';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
// @mui
import {
    Box,
    Card,
    Table,
    Stack,
    Paper,
    Avatar,
    Button,
    Popover,
    Checkbox,
    TableRow,
    MenuItem,
    TableBody,
    TableCell,
    Container,
    Typography,
    IconButton,
    TableContainer,
    TablePagination,
} from '@mui/material';
// components
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
import ClienteDrawer from '../components/drawercliente/DrawerCliente';
import EditClienteDrawer from '../components/drawercliente/DrawerEditCliente';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// data
import clienteService from '../services/clienteService';
import { useLoading } from '../context/LoadingContext';

const TABLE_HEAD = [
    { id: 'nome_completo', label: 'Nome', alignRight: false },
    { id: 'nome_usuario', label: 'Usuário', alignRight: false },
    { id: 'login', label: 'Permissão de login?' },
    { id: 'created_at', label: 'Data de Criação' },
    { id: 'status', label: 'Status' },
    { id: 'actions', label: 'Ações' },
];

const styles = {
    editButton: {
        backgroundColor: '#156064',
        borderRadius: 2,
        '&:hover': {
            backgroundColor: '#156064',
            color: '#156064',
        },
    },
    deleteButton: {
        backgroundColor: '#d81159',
        borderRadius: 2,
        p: 1,
        '&:hover': {
            backgroundColor: '#d81159',
            color: '#156064',
        },
    },
    moreButton: {
        size: 'large',
        color: 'inherit',
    },
};

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });

    const filteredArray = stabilizedThis.map((el) => el[0]);

    if (query) {
        return filter(filteredArray, (_user) =>
            _user.nome_usuario.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
    }

    return filteredArray;
}

export default function ClientesPage() {
    const [open, setOpen] = useState(null);
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('nome_usuario');
    const [filterName, setFilterName] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openDrawerEdit, setOpenDrawerEdit] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(null);
    const [dataBet, setDataBet] = useState([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [clientes, setClientes] = useState([]);
    const [selectedClientId, setSelectedClientId] = useState(null);
    const { loading, showLoading, hideLoading } = useLoading();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            showLoading(); // Mostrar loading antes da requisição
            const response = await clienteService.getClientes();

            // Aguarda 1 segundos para simular o carregamento 
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Verifica se a resposta é válida antes de marcar como carregado
            if (response && Array.isArray(response.clientes)) {
                setClientes(response.clientes);
                setDataLoaded(true);
            } else {
                console.warn('Resposta inválida ou nenhum cliente encontrado.');
            }
        } catch (error) {
            console.error('Erro ao carregar clientes:', error);
        } finally {
            hideLoading();
        }
    };

    const handleDelete = async (clienteId) => {
        try {
            const response = await clienteService.deleteCliente(clienteId);
            toast.success(response.message, { position: toast.POSITION.TOP_CENTER });

            // Após excluir, carrega os dados atualizados
            fetchData();
        } catch (error) {
            // Exibe um toast de erro
            toast.error('Erro ao excluir cliente.', { position: toast.POSITION.TOP_CENTER });
            console.error('Erro ao excluir cliente:', error);
        }
    };

    const handleEdit = (clienteId) => {
        showLoading();
        setOpenDrawerEdit(true);
        setSelectedClientId(clienteId);
        fetchData();
        hideLoading();
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = clientes.map((cliente) => cliente.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    };

    const handleFilterByName = (event) => {
        setPage(0);
        setFilterName(event.target.value);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const handleDrawerCloseEdit = () => {
        setOpenDrawerEdit(false);
    };

    const handleClickOpenModal = () => {
        const newData = ['Item 1', 'Item 2', 'Item 3'];
        setDataBet(newData);
        setIsModalOpen(true);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - clientes.length) : 0;
    const filteredUsers = applySortFilter(clientes, getComparator(order, orderBy), filterName);
    const isNotFound = !filteredUsers.length && !!filterName;

    return (
        <>
            <ToastContainer />

            <Helmet>
                <title> Clientes | Betspace </title>
            </Helmet>

            <Container maxWidth="xl" >
                {dataLoaded ? (
                    <>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                            <Typography variant="h4" gutterBottom>
                                Clientes
                            </Typography>
                            <Button variant="contained" onClick={handleClickOpenModal} startIcon={<Iconify icon="eva:plus-fill" />}>
                                Cadastrar Cliente
                            </Button>
                        </Stack>

                        <ClienteDrawer
                            data={dataBet}
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                        />

                        <EditClienteDrawer
                            isOpen={openDrawerEdit}
                            clientId={selectedClientId}
                            onClose={handleDrawerCloseEdit}
                        />

                        <Card>
                            <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
                            <Scrollbar>
                                <TableContainer sx={{ minWidth: 800 }}>
                                    <Table>
                                        <UserListHead
                                            order={order}
                                            orderBy={orderBy}
                                            headLabel={TABLE_HEAD}
                                            rowCount={clientes.length}
                                            numSelected={selected.length}
                                            onRequestSort={handleRequestSort}
                                            onSelectAllClick={handleSelectAllClick}
                                        />
                                        <TableBody>
                                            {clientes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((cliente) => {
                                                const { id } = cliente;
                                                const selectedUser = selected.indexOf(cliente.id) !== -1;

                                                return (
                                                    <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                                                        <TableCell padding="checkbox">
                                                            <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, cliente.id)} />
                                                        </TableCell>

                                                        <TableCell component="th" scope="row" padding="none">
                                                            <Stack direction="row" alignItems="center" spacing={2}>
                                                                <Avatar alt={cliente.nome_completo} src='' />
                                                                <Typography variant="subtitle2" noWrap>
                                                                    {cliente.nome_completo}
                                                                </Typography>
                                                            </Stack>
                                                        </TableCell>

                                                        <TableCell align="left">{cliente.nome_usuario}</TableCell>

                                                        <TableCell align="left">{cliente.cambistaId}</TableCell>

                                                        <TableCell align="left">{cliente.created_at}</TableCell>

                                                        <TableCell align="left">
                                                            <Label color={cliente.status === 'A' ? 'success' : 'error'}>
                                                                {cliente.status === 'A' ? 'Ativo' : 'Inativo'}
                                                            </Label>
                                                        </TableCell>

                                                        <TableCell align="left">
                                                            <Stack direction="row" spacing={1}>
                                                                <IconButton sx={styles.editButton} size="medium" onClick={() => handleEdit(cliente.id)}>
                                                                    <EditIcon sx={{ fontSize: 20, color: '#fafafa' }} />
                                                                </IconButton>

                                                                <IconButton sx={styles.deleteButton} size="medium" onClick={() => handleDelete(cliente.id)}>
                                                                    <Iconify sx={{ color: '#fafafa' }} icon={'eva:trash-outline'} />
                                                                </IconButton>

                                                                <IconButton sx={styles.moreButton}>
                                                                    <Iconify icon={'eva:more-vertical-fill'} />
                                                                </IconButton>
                                                            </Stack>
                                                        </TableCell>
                                                        {console.log(openDrawerEdit)}

                                                    </TableRow>
                                                );
                                            })}
                                            {emptyRows > 0 && (
                                                <TableRow style={{ height: 53 * emptyRows }}>
                                                    <TableCell colSpan={6} />
                                                </TableRow>
                                            )}
                                        </TableBody>

                                        {isNotFound && (
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                                        <Paper
                                                            sx={{
                                                                textAlign: 'center',
                                                            }}
                                                        >
                                                            <Typography variant="h6" paragraph>
                                                                Nada encontrado
                                                            </Typography>

                                                            <Typography variant="body2">
                                                                Não foram encontrados resultados para &nbsp;
                                                                <strong>&quot;{filterName}&quot;</strong>.
                                                                <br /> Tente verificar erros de digitação ou usar palavras completas.
                                                            </Typography>
                                                        </Paper>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        )}
                                    </Table>
                                </TableContainer>
                            </Scrollbar>

                            <TablePagination
                                rowsPerPageOptions={[10, 20, 30, 50, 100, 1000]}
                                component="div"
                                count={clientes.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Card>
                        <ClienteDrawer open={openDrawer} onClose={handleDrawerClose} />
                    </>
                ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <CircularProgress />
                    </Box>
                )}
            </Container>

            <Popover
                open={Boolean(popoverOpen)}
                anchorEl={popoverOpen}
                onClose={handleCloseMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 1,
                        width: 140,
                        '& .MuiMenuItem-root': {
                            px: 1,
                            typography: 'body2',
                            borderRadius: 0.75,
                        },
                    },
                }}
            >
                <MenuItem>
                    <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
                    Editar
                </MenuItem>

                <MenuItem sx={{ color: 'error.main' }}>
                    <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
                    Excluir
                </MenuItem>
            </Popover>

        </>
    );
}
