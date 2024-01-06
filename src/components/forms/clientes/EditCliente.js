import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FormControl,
    styled,
    TextField,
    FormControlLabel,
    DialogActions,
    Checkbox,
    Switch,
    Button,
} from '@mui/material';

import { toast, ToastContainer } from 'react-toastify';
import clienteService from '../../../services/clienteService';
import { Context } from '../../../context/AuthContext';

function EditCliente({ clienteData, onLoginCheckboxChange, onStatusCheckboxChange, onCloseDrawer }) {
    const [usuario, setUsuario] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [status, setStatus] = useState(false); // Adicionando estado para o Switch
    const { userData, loading } = useContext(Context);
    const navigate = useNavigate();

    // Use useEffect para carregar dados do cliente quando clienteData for alterado
    useEffect(() => {
        console.log(clienteData);
        if (clienteData) {
            setUsuario(clienteData.nome_usuario);
            setNomeCompleto(clienteData.nome_completo);
            setStatus(clienteData.status === 'A');
        }
    }, [clienteData]);

    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: '#33ffc2',
        color: '#263238',
        '&:hover': {
            backgroundColor: '#023047',
            color: '#33ffc2',
        },
    }));

    const handleSubmit = async () => {
        const formData = {
            loginEnabled: clienteData.loginEnabled,
            statusEnabled: status,
            usuario,
            nomeCompleto,
        };

        try {
            const response = await clienteService.createCliente(formData, userData);
            console.log('Dados enviados com sucesso:', response);

            // Exibir mensagem de sucesso
            await new Promise((resolve) => {
                onCloseDrawer();
                toast.success(response.message, {
                    position: toast.POSITION.TOP_CENTER,
                    onClose: resolve,
                });
            });
        } catch (error) {
            console.error('Erro ao enviar dados para a API:', error);
            toast.error('Erro ao enviar dados para a API.', { position: toast.POSITION.TOP_CENTER });
        }
        window.location.reload();
    };

    return (
        <>
            <FormControlLabel
                control={<Checkbox checked={clienteData?.loginEnabled} onChange={onLoginCheckboxChange} />}
                label="Permitir que o cliente faça login"
            />

            <FormControlLabel
                control={<Switch checked={status} onChange={() => setStatus(!status)} />}
                label="Status do Cliente"
            />

            <FormControl fullWidth margin="normal">
                <TextField
                    value={nomeCompleto}
                    onChange={(e) => setNomeCompleto(e.target.value)}
                    label="Nome Completo"
                    variant="outlined"
                    fullWidth
                />
            </FormControl>

            <FormControl fullWidth margin="normal">
                <TextField
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    label="Usuário"
                    variant="outlined"
                    fullWidth
                />
            </FormControl>

            <FormControl fullWidth margin="normal">
                <TextField
                    value={userData?.nome_completo || ''}
                    sx={{ color: '#fff' }}
                    label="Cambista Associado"
                    variant="outlined"
                    fullWidth
                    disabled
                />
            </FormControl>

            <DialogActions>
                <CustomButton onClick={handleSubmit}>Salvar alterações</CustomButton>
            </DialogActions>
            <ToastContainer />
        </>
    );
}

export default EditCliente;