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
import { useLoading } from '../../../context/LoadingContext';

function EditAdmin({ clienteData, onLoginCheckboxChange, onStatusCheckboxChange, onCloseDrawer }) {
    const [usuario, setUsuario] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [status, setStatus] = useState(false);
    const { userData } = useContext(Context);
    const { loading, showLoading, hideLoading } = useLoading();
    const navigate = useNavigate();

    useEffect(() => {
        if (!clienteData) {
            showLoading();
        } else {
            setUsuario(clienteData.nome_usuario);
            setNomeCompleto(clienteData.nome_completo);
            setStatus(clienteData.status === 'A');
            hideLoading();
        }
    }, [clienteData, showLoading, hideLoading]);

    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: '#33ffc2',
        color: '#263238',
        '&:hover': {
            backgroundColor: '#023047',
            color: '#33ffc2',
        },
    }));

    const handleSubmitEdit = async () => {
        const formData = {
            loginEnabled: clienteData.loginEnabled,
            status: status ? 'A' : 'I',
            usuario,
            nomeCompleto,
        };

        try {
            showLoading();
            const response = await clienteService.editCliente(formData, userData, clienteData.id);

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
        } finally {
            hideLoading();
            navigate('/dashboard/clientes');
            window.location.reload(false); // não quero usar, mas ainda vou ver outra forma de fazer 
        }
    };

    return (
        <>
            {loading ? (
                // Mostrar indicador de carregamento enquanto a requisição está em andamento
                <div>Carregando...</div>
            ) : (
                // Renderizar o formulário apenas se não estiver carregando
                clienteData && (
                    <>
                        <FormControlLabel
                            control={<Checkbox checked={clienteData.loginEnabled} onChange={onLoginCheckboxChange} />}
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
                            <CustomButton onClick={handleSubmitEdit}>Salvar alterações</CustomButton>
                        </DialogActions>
                    </>
                )
            )}
            <ToastContainer />
        </>
    );
}

export default EditAdmin;
