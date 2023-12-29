import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Stack, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Iconify from '../../../components/iconify';
import { Context } from '../../../context/AuthContext';

export default function LoginForm() {
  const { userData, authenticated, handleLogin, errorMessage, handleNavigate } = useContext(Context);
  console.log('Login', authenticated);
  alert('Message', errorMessage);

  useEffect(() => {
    // Exibir o erro do contexto se houver
    if (errorMessage) {
      toast.error(errorMessage, { position: toast.POSITION.TOP_CENTER });
    }
  }, [errorMessage]);


  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleClickForgotPassword = () => {
    navigate('/forgotpassword', { replace: true });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);

      if (value.trim() === '') {
        toast.error('O Email não pode ser vazio.', { position: toast.POSITION.TOP_CENTER });
      }
      setEmailError(value.trim() === '');
    }

    if (name === 'password') {
      setPassword(value);

      if (value.trim() === '') {
        toast.error('A Senha não pode ser vazio.', { position: toast.POSITION.TOP_CENTER });
      }
      setPasswordError(value.trim() === '');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    handleLogin(email, password);

  };

  return (
    <>
      <Stack spacing={4}>
        <TextField
          name="email"
          label="Email"
          error={emailError}
          helperText={emailError ? 'O Email é obrigatório!' : ''}
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
          error={passwordError}
          onChange={handleInputChange}
        />
      </Stack>

      <Stack direction="row" alignItems="right" justifyContent="space-between" sx={{ my: 2, cursor: 'pointer', textAlign: 'right' }}>
        <Link variant="subtitle2" underline="hover" onClick={handleClickForgotPassword}>
          Esqueci minha senha
        </Link>
      </Stack>

      <LoadingButton
        onClick={handleSubmit}
        sx={{ backgroundColor: '#33FFC2', boxShadow: 0, color: '#001D3D' }}
        fullWidth
        size="large"
        type="button"
        variant="contained"
      >
        Entrar
      </LoadingButton>

      <ToastContainer />
    </>
  );
}
