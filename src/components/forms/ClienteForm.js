import React, { useState, useContext } from 'react';
import {
    FormControl,
    TextField,
    FormControlLabel,
    Checkbox,
    Switch,
    Button,
} from '@mui/material';
import { toast } from 'react-toastify';
import { submitCliente } from '../../services/submitCliente';
import { Context } from '../../context/AuthContext';

function ClienteForm({ onSubmit }) {
    const [loginEnabled, setLoginEnabled] = useState(false);
    const [statusEnabled, setStatusEnabled] = useState(true);
    const [usuario, setUsuario] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');
    const { userData, loading } = useContext(Context);

    const handleCheckboxChange = (event) => {
        setLoginEnabled(event.target.checked);
    };

    const handleSwitchChange = () => {
        setStatusEnabled(!statusEnabled);
    };

    const handleSubmit = async () => {
        const formData = {
            loginEnabled,
            statusEnabled,
            usuario,
            nomeCompleto,
        };

        try {
            const response = await submitCliente(formData, userData);
            console.log('Dados enviados com sucesso:', response);

            // Exibir mensagem de sucesso
            toast.success('Dados enviados com sucesso!', { position: toast.POSITION.TOP_CENTER });

            // Fechar o modal ou executar outras ações necessárias
            // handleCloseModal();

            // Chamar a função onSubmit se necessário
            onSubmit(formData);
        } catch (error) {
            console.error('Erro ao enviar dados para a API:', error);

            // Exibir mensagem de erro
            toast.error('Erro ao enviar dados para a API.', { position: toast.POSITION.TOP_CENTER });
        }
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
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    label="Usuário"
                    variant="outlined"
                    fullWidth
                />
            </FormControl>

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
                    value={userData?.nome_completo}
                    sx={{ color: '#fff' }}
                    label="Cambista Associado"
                    variant="outlined"
                    fullWidth
                    disabled
                />
            </FormControl>

            <Button onClick={handleSubmit} variant="contained" color="primary">
                Cadastrar
            </Button>
        </>
    );
}

export default ClienteForm;
