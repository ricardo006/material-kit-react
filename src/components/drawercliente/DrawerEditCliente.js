import React, { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';
import {
    styled,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditCliente from '../forms/clientes/EditCliente';
import clienteService from '../../services/clienteService';

// Estilize o componente de diálogo
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        width: '100%',
        maxWidth: '900px',
        p: 4
    }
}));

function DrawerEditCliente({ isOpen, clientId, onClose }) {
    const [clienteData, setClienteData] = useState(null);
    const [loginEnabled, setLoginEnabled] = useState(false);
    const [statusEnabled, setStatusEnabled] = useState(false);

    // Efeito useEffect para buscar dados do cliente ao abrir o Drawer
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await clienteService.listarClientePorId(clientId);
                console.log('Dados do cliente:', response.cliente);
                setClienteData(response.cliente);
            } catch (error) {
                console.error('Erro ao obter dados do cliente:', error);
            }
        };

        // Chama a função de busca quando o Drawer é aberto
        if (isOpen) {
            fetchData();
        }
    }, [isOpen, clientId]);

    // Função para lidar com o fechamento do Drawer
    const handleClose = () => {
        setClienteData(null);
        setLoginEnabled(false);
        setStatusEnabled(false);
        onClose();
    };

    // Função para lidar com mudanças nos checkboxes
    const handleCheckboxChange = (event, setterFunction) => {
        setterFunction(event.target.checked);
    };

    return (
        <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen}>
            <DialogTitle sx={{ m: 0, p: 2, border: 0, fontSize: 14, color: '#33ffc2', backgroundColor: '#023047', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} id="customized-dialog-title">
                Editar Cliente
            </DialogTitle>

            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 2,
                    top: 8,
                    color: '#33ffc2'
                }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent>
                {clienteData && (
                    <EditCliente
                        clienteData={clienteData}
                        loginEnabled={loginEnabled}
                        statusEnabled={statusEnabled}
                        onLoginCheckboxChange={(event) => handleCheckboxChange(event, setLoginEnabled)}
                        onStatusCheckboxChange={(event) => handleCheckboxChange(event, setStatusEnabled)}
                        onCloseDrawer={onClose}
                    />
                )}
            </DialogContent>
        </BootstrapDialog>
    );
}

export default DrawerEditCliente;
