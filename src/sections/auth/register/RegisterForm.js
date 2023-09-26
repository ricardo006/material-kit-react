import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

export default function RegisterForm() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
        navigate('/dashboard', { replace: true });
    };

    return (
        <>
            <Stack spacing={2}>
                <TextField 
                    name="name" 
                    label="Nome Completo" 
                    sx={{ backgroundColor: 'rgba(195, 202, 241, 0.20)', borderRadius: '10px' }} 
                />

                <TextField 
                    name="cpf" 
                    label="CPF" 
                    sx={{ backgroundColor: 'rgba(195, 202, 241, 0.20)', borderRadius: '10px' }} 
                />

                <TextField 
                    name="user" 
                    label="Usuário" 
                    sx={{ backgroundColor: 'rgba(195, 202, 241, 0.20)', borderRadius: '10px' }} 
                />

                <TextField 
                    name="email" 
                    label="Email" 
                    sx={{ backgroundColor: 'rgba(195, 202, 241, 0.20)', borderRadius: '10px' }} 
                />

                <TextField sx={{ backgroundColor: 'rgba(195, 202, 241, 0.20)' }}
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                <Checkbox name="remember" label="Remember me" />
                <Link variant="subtitle2" underline="hover">
                    Esqueceu sua senha?
                </Link>
            </Stack>

            <LoadingButton sx={{ backgroundColor: '#33FFC2', boxShadow: 0, color: '#001D3D' }} fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
                Cadastrar
            </LoadingButton>
        </>
    );
}
