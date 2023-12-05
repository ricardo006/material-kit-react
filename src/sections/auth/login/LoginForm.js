import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Iconify from '../../../components/iconify';

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // Verifica se os campos estão vazios
    if (!email && !password) {
      toast.error('Preencha o email e a senha.', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    if (!email) {
      toast.error('Preencha o campo de email.', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    if (!password) {
      toast.error('Preencha o campo de senha.', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    try {
      // Faz a solicitação de login usando o Axios
      const response = await axios.post('http://localhost:8000/api/v1/user/login-YXBpLmJldHNwYWNl', {
        email,
        password,
      });

      if (response.data && response.data.error) {
        // Se a resposta indicar erro, exibe notificação de erro
        toast.error(response.data.message || 'Erro no login. Verifique suas credenciais.', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        // Se o login for bem-sucedido, exibe notificação de sucesso e navega para a página de dashboard
        toast.success('Login realizado com sucesso!', { position: toast.POSITION.TOP_CENTER });
        console.log('Login bem-sucedido:', response.data);
        navigate('/dashboard', { replace: true });
      }
    } catch (error) {
      // Se houver um erro na requisição, exibe notificação de erro
      toast.error('Erro ao realizar o login. Tente novamente mais tarde.', {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error('Erro no login:', error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField name="email" label="Email address" sx={{ backgroundColor: 'rgba(195, 202, 241, 0.20)' }} />

          <TextField
            sx={{ backgroundColor: 'rgba(195, 202, 241, 0.20)' }}
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
