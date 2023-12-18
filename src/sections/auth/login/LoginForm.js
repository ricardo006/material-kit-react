import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Stack, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Iconify from '../../../components/iconify';

import useAuth from '../../../hooks/useAuth';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    emailError: authEmailError,
    passwordError: authPasswordError,
    passwordHelperText: authPasswordHelperText,
    setEmailError: authSetEmailError,
    setPasswordError: authSetPasswordError,
    setPasswordHelperText: authSetPasswordHelperText,
    login,
  } = useAuth();

  const handleClickForgotPassword = () => {
    navigate('/forgotpassword', { replace: true });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      authSetEmailError(value.trim() === '');
    } else if (name === 'password') {
      authSetPasswordError(value.trim() === '' || authPasswordError);
      authSetPasswordHelperText('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (!email && !password) {
      authSetEmailError(true);
      authSetPasswordError(true);
      toast.error('Preencha o email e a senha.', { position: toast.POSITION.TOP_CENTER });
      return;
    }

    if (!email) {
      authSetEmailError(true);
      authSetPasswordError(false);
      toast.error('Preencha o campo de email.', { position: toast.POSITION.TOP_CENTER });
      return;
    }

    if (!password) {
      authSetEmailError(false);
      authSetPasswordError(true);
      toast.error('Preencha o campo de senha.', { position: toast.POSITION.TOP_CENTER });
      return;
    }

    // Chamar a função de login do hook useAuth
    login(email, password, navigate);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <TextField
            name="email"
            label="Email"
            error={authEmailError}
            helperText={authEmailError ? 'O Email é obrigatório!' : ''}
            onChange={handleInputChange}
          />

          <TextField
            name="password"
            label="Senha"
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
            error={authPasswordError}
            helperText={authPasswordHelperText}
            onChange={handleInputChange}
          />
        </Stack>

        <Stack direction="row" alignItems="right" justifyContent="space-between" sx={{ my: 2, cursor: 'pointer', textAlign: 'right' }}>
          {/* <Checkbox name="remember" label="Remember me" /> */}
          <Link variant="subtitle2" underline="hover" onClick={handleClickForgotPassword}>
            Esqueci minha senha
          </Link>
        </Stack>

        <LoadingButton
          sx={{ backgroundColor: '#33FFC2', boxShadow: 0, color: '#001D3D' }}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Entrar
        </LoadingButton>
      </form>
      <ToastContainer />
    </>
  );
}
