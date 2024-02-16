import React, { useState } from 'react';
import { FormControl, InputLabel, TextField, Button, MenuItem, Select, Grid, DialogActions, styled } from '@mui/material';
import { fCpf } from '../../../utils/formatNumber';

function AdminForm() {
    const [form, setForm] = useState({
        id_tipo_usuario: '',
        nome_usuario: '',
        nome_completo: '',
        link_indicacao: '',
        email: '',
        password: '',
        cpf: '',
        rg: '',
        nacionalidade: '',
        cep: '',
        saldo: '',
        foto: null,
        situacao: '',
    });

    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: '#33ffc2',
        color: '#263238',
        '&:hover': {
            backgroundColor: '#023047',
            color: '#33ffc2',
        },
    }));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode lidar com a submissão do formulário
        console.log(form);
    };

    const isFormValid = () => {
        // Verifica se todos os campos obrigatórios estão preenchidos
        return (
            form.id_tipo_usuario &&
            form.nome_usuario &&
            form.nome_completo &&
            form.email &&
            form.password &&
            form.cpf &&
            form.rg &&
            form.nacionalidade &&
            form.cep &&
            form.saldo &&
            form.situacao
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl sx={{ mx: 'auto', ml: 0, width: '48%' }} margin="normal">
                        <InputLabel shrink={!!form.cpf} htmlFor="cpf">
                            CPF
                        </InputLabel>
                        <TextField
                            label="CPF"
                            id="cpf"
                            name="cpf"
                            onChange={handleChange}
                            value={fCpf(form.cpf)}
                            required
                        />
                    </FormControl>
                    <FormControl sx={{ mx: 'auto', ml: 2.5, width: '48%' }} margin="normal">
                        <InputLabel shrink={!!form.rg}>RG</InputLabel>
                        <TextField
                            label="RG"
                            id='rg'
                            name="rg"
                            onChange={handleChange}
                            value={form.rg}
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel shrink={!!form.id_tipo_usuario} disabled>Tipo de Usuário</InputLabel>
                        <TextField
                            label="Tipo de Usuário"
                            id='id_tipo_usuario'
                            name="id_tipo_usuario"
                            onChange={handleChange}
                            value={form.id_tipo_usuario}
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel shrink={!!form.nome_usuario}>Nome de Usuário</InputLabel>
                        <TextField
                            label="Nome de Usuário"
                            id='nome_usuario'
                            name="nome_usuario"
                            onChange={handleChange}
                            value={form.nome_usuario}
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel shrink={!!form.nome_completo}>Nome Completo</InputLabel>
                        <TextField
                            label="Nome Completo"
                            id='nome_completo'
                            name="nome_completo"
                            onChange={handleChange}
                            value={form.nome_completo}
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel shrink={!!form.link_indicacao}>Link de Indicação</InputLabel>
                        <TextField
                            label="Link de Indicação"
                            id='link_indicacao'
                            name="link_indicacao"
                            onChange={handleChange}
                            value={form.link_indicacao}
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel shrink={!!form.email}>Email</InputLabel>
                        <TextField
                            label="Email"
                            id='email'
                            name="email"
                            onChange={handleChange}
                            value={form.email}
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel shrink={!!form.password}>Senha</InputLabel>
                        <TextField
                            label="Senha"
                            id="password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                            value={form.password}
                            required
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel shrink={!!form.nacionalidade}>Nacionalidade</InputLabel>
                        <TextField
                            label="Nacionalidade"
                            id='nacionalidade'
                            name="nacionalidade"
                            onChange={handleChange}
                            value={form.nacionalidade}
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel shrink={!!form.cep}>CEP</InputLabel>
                        <TextField
                            label="CEP"
                            id='cep'
                            name="cep"
                            onChange={handleChange}
                            value={form.cep}
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel shrink={!!form.saldo}>Saldo</InputLabel>
                        <TextField
                            label="Saldo"
                            id='saldo'
                            name="saldo"
                            onChange={handleChange}
                            value={form.saldo}
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel shrink={!!form.foto}>Foto</InputLabel>
                        <TextField
                            label="Foto"
                            id='foto'
                            name="foto"
                            type="file"
                            onChange={handleChange}
                            value={form.foto}
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel shrink={!!form.situacao} id="situacao-label">Situação</InputLabel>
                        <Select
                            label="Situação"
                            id="situacao"
                            name="situacao"
                            value={form.situacao}
                            onChange={handleChange}
                            required
                        >
                            <MenuItem value="ativo">Ativo</MenuItem>
                            <MenuItem value="inativo">Inativo</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <DialogActions>
                <CustomButton onClick={handleSubmit}>Cadastrar</CustomButton>
            </DialogActions>
        </form>
    );
}


export default AdminForm;