import React, { useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';
import axios from 'axios';

// Função para aplicar a máscara de CPF
function formatCPF(value) {
    // Remove todos os caracteres não numéricos
    const numericValue = value.replace(/\D/g, '');

    // Aplica a máscara do CPF
    return numericValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

// Função para aplicar a máscara de CEP
function formatCEP(value) {
    // Remove todos os caracteres não numéricos
    const numericValue = value.replace(/\D/g, '');

    // Aplica a máscara do CEP
    return numericValue.replace(/(\d{5})(\d{3})/, '$1-$2');
}

function RegisterForm() {
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [rg, setRg] = useState('');
    const [cep, setCep] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleNomeUsuarioChange = (event) => {
        setNomeUsuario(event.target.value);
    };

    const handleCPFChange = (event) => {
        const formattedCPF = formatCPF(event.target.value);
        setCpf(formattedCPF);
    };

    const handleRGChange = (event) => {
        const formattedRG = event.target.value;
        setRg(formattedRG);
    };

    const handleCEPChange = (event) => {
        const formattedCEP = formatCEP(event.target.value);
        setCep(formattedCEP);
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsEmailValid(validateEmail(newEmail));
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setIsPasswordValid(validatePassword(newPassword));
    };

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleCadastroClick = async () => {
        try {
            const requestData = {
                id_tipo_usuario: '1',
                nome_usuario: nomeUsuario,
                nome_completo: nome,
                link_indicacao: 'link/url',
                email,
                password,
                cpf,
                rg: 'rg',
                nacionalidade: 'brasileiro',
                cep: 'cep',
                saldo: '500',
                foto: 'c:/Users/ryck2/OneDrive/Imagens/landscape.jpg',
            };

            const requestBody = JSON.stringify(requestData);

            console.log('Dados enviados para a API:', requestBody);

            const response = await fetch('http://localhost:8000/api/v1/user/create-YXBpLmJldHNwYWNl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: requestBody,
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }

            const responseData = await response.json();

            console.log('Resposta da API:', responseData);
        } catch (error) {
            console.error('Erro:', error.message);
        }
    };

    return (
        <Stack spacing={2}>
            <TextField name="nome_completo" label="Nome Completo" value={nome} onChange={handleNomeChange} />
            <TextField name="nome_usuario" label="Usuário" value={nomeUsuario} onChange={handleNomeUsuarioChange} />
            <TextField
                name="email"
                label="Email"
                value={email}
                onChange={handleEmailChange}
                error={!isEmailValid}
                helperText={!isEmailValid ? 'E-mail inválido' : ''}
            />

            <TextField
                name="password"
                label="Senha"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                error={!isPasswordValid}
                helperText={!isPasswordValid ? 'Senha inválida (mínimo 6 caracteres)' : ''}
            />
            <TextField name="cpf" label="CPF" value={cpf} onChange={handleCPFChange} />
            <TextField name="rg" label="RG" value={rg} onChange={handleRGChange} />
            <TextField name="cep" label="CEP" value={cep} onChange={handleCEPChange} />
            <Button
                sx={{ backgroundColor: '#33FFC2', boxShadow: 0, color: '#001D3D' }}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleCadastroClick}
            >
                Cadastrar
            </Button>
        </Stack>
    );
}

export default RegisterForm;
