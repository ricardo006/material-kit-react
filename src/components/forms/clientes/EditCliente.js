import React, { useState, useContext } from 'react';
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

function EditCliente({ onSubmit, onCloseDrawer }) {
    const [loginEnabled, setLoginEnabled] = useState(false);
    const [statusEnabled, setStatusEnabled] = useState(true);
    const [usuario, setUsuario] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');
    const { userData, loading } = useContext(Context);
    const navigate = useNavigate();

    const handleCheckboxChange = (event) => {
        setLoginEnabled(event.target.checked);
    };

    const handleSwitchChange = () => {
        setStatusEnabled(!statusEnabled);
    };

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
            loginEnabled,
            statusEnabled,
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
                control={<Checkbox checked={loginEnabled} onChange={handleCheckboxChange} />}
                label="Permitir que o cliente faça login"
            />

            <FormControlLabel
                control={<Switch checked={statusEnabled} onChange={handleSwitchChange} />}
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
                    value={userData?.nome_completo}
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
