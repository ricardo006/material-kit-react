import React, { useState } from 'react';
import { Stack, TextField, FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';

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
    const [rg, setRg] = useState('');
    const [cep, setCep] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true); // Estado para controlar a validade do e-mail

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
        setIsEmailValid(isEmailValid(newEmail));
    };

    const handleSenhaChange = (event) => {
        console.log(event)
    }

    const handleCadastroClick = () => {
        // Implemente a lógica de cadastro aqui
    };

    return (
        <Stack spacing={2}>
            <TextField
                name="nome_completo"
                label="Nome Completo"
            />

            <TextField
                name="nome_usuario"
                label="Usuário"
            />

            <TextField
                name="email"
                label="Email"
                value={email}
                onChange={handleEmailChange}
                error={!isEmailValid} // Aplicar estilo de erro se o e-mail não for válido
                helperText={!isEmailValid ? 'E-mail inválido' : ''}
            />

            <TextField
                name="senha"
                label="Senha"
                value={email}
                onChange={handleSenhaChange}
                error={!isEmailValid} // Aplicar estilo de erro se o e-mail não for válido
                helperText={!isEmailValid ? 'E-mail inválido' : ''}
            />

            <TextField
                name="cpf"
                label="CPF"
                value={cpf}
                onChange={handleCPFChange}
            />

            <TextField
                name="rg"
                label="RG"
                value={rg}
                onChange={handleRGChange}
            />

            <TextField
                name="cep"
                label="CEP"
                value={cep}
                onChange={handleCEPChange}
            />

            <Button sx={{ backgroundColor: '#33FFC2', boxShadow: 0, color: '#001D3D' }} fullWidth size="large" type="submit" variant="contained" color="primary" onClick={handleCadastroClick}>
                Cadastrar
            </Button>

            {/* <LoadingButton sx={{ backgroundColor: '#33FFC2', boxShadow: 0, color: '#001D3D' }} fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
                Cadastrar
            </LoadingButton> */}
        </Stack>
    );
}

export default RegisterForm;
