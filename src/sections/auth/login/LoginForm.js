import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Stack, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Iconify from '../../../components/iconify';
import { Context } from '../../../context/AuthContext';

export default function LoginForm() {
  const { authenticated, handleLogin } = useContext(Context);
  console.debug('Login', authenticated);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleClickForgotPassword = () => {
    navigate('/forgotpassword', { replace: true });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmailError(value.trim() === '');
    } else if (name === 'password') {
      setPasswordError(value.trim() === '' || passwordError);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const email = event.target.email.value;
    // const password = event.target.password.value;

    // if (!email && !password) {
    //   setEmailError(true);
    //   setPasswordError(true);
    //   toast.error('Preencha o email e a senha.', { position: toast.POSITION.TOP_CENTER });
    //   return;
    // }

    // if (!email) {
    //   setEmailError(true);
    //   setPasswordError(false);
    //   toast.error('Preencha o campo de email.', { position: toast.POSITION.TOP_CENTER });
    //   return;
    // }

    // if (!password) {
    //   setEmailError(false);
    //   setPasswordError(true);
    //   toast.error('Preencha o campo de senha.', { position: toast.POSITION.TOP_CENTER });
    //   return;
    // }

    // Chama a função de login do contexto, passando email e senha
    handleLogin('rycardo.19@gmail.com', '96106aA@');
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

      <LoadingButton onClick={handleSubmit}
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
