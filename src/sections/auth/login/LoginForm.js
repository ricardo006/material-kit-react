import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Iconify from '../../../components/iconify';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState('');
  const navigate = useNavigate();

  const handleClickForgotPassword = () => {
    navigate('/forgotpassword', { replace: true });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmailError(value.trim() === '');
    } else if (name === 'password') {
      setPasswordError(value.trim() === '' || passwordError);
      setPasswordHelperText('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (!email && !password) {
      setEmailError(true);
      setPasswordError(true);
      toast.error('Preencha o email e a senha.', { position: toast.POSITION.TOP_CENTER });
      return;
    }

    if (!email) {
      setEmailError(true);
      setPasswordError(false);
      toast.error('Preencha o campo de email.', { position: toast.POSITION.TOP_CENTER });
      return;
    }

    if (!password) {
      setEmailError(false);
      setPasswordError(true);
      toast.error('Preencha o campo de senha.', { position: toast.POSITION.TOP_CENTER });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/user/login-YXBpLmJldHNwYWNl', {
        email,
        password,
      });

      console.log(response.data);

      if (response.data && response.data.error) {
        toast.error(response.data.message || 'Erro no login. Verifique suas credenciais.', {
          position: toast.POSITION.TOP_CENTER,
        });
        setPasswordError(true);
        setPasswordHelperText('Senha incorreta!');
      } else {
        toast.success('Login realizado com sucesso!', { position: toast.POSITION.TOP_CENTER });
        console.log('Login bem-sucedido:', response.data);

        // Extrair o token
        const token = response.data.response?.token;

        // Se o token estiver presente, faça o que for necessário com ele
        if (token) {
          console.log('Token:', token);
          // Salvar o token, redirecionar, etc.
          // Exemplo: setAuthToken(token);
        } else {
          console.error('Token não encontrado na resposta.');
        }

        // Redirecionar para a página de dashboard
        navigate('/dashboard', { replace: true });
      }
    } catch (error) {
      toast.error('Erro ao realizar o login. Tente novamente mais tarde.', {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error('Erro no login:', error.message);
    }

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            helperText={passwordHelperText}
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
