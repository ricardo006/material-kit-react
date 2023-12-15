import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        // Verifica se o campo está preenchido e remove o HelperText se estiver preenchido
        if (name === 'email') {
            setEmailError(value.trim() === '');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        // Verifica se os campos estão vazios
        if (!email) {
            setEmailError(true);
            toast.error('Preencha o email.', {
                position: toast.POSITION.TOP_CENTER,
            });
            return;
        }

        // Faz a requisição
        try {
            const response = await fetch(`http://localhost:8000/api/v1/user/check-email/${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Adicione quaisquer outros headers necessários
                },
            });

            // Verifica o status da resposta
            if (!response.ok) {
                console.error(`Erro na requisição: ${response.status} - ${response.statusText}`);
                toast.error(`Erro na requisição: ${response.status} - ${response.statusText}`, {
                    position: toast.POSITION.TOP_CENTER,
                });
                return;
            }

            // Verifica o tipo de conteúdo da resposta
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                console.error('A resposta não é um JSON válido.');
                toast.error('A resposta não é um JSON válido.', {
                    position: toast.POSITION.TOP_CENTER,
                });
                return;
            }

            // Converte para JSON
            const responseData = await response.json();

            console.log(responseData)

            // Verifica se há um erro na resposta
            if (responseData.error === false) {
                toast.success(responseData.message, {
                    position: toast.POSITION.TOP_CENTER,
                });
            } else if (responseData.error === true) {
                toast.warning(responseData.message, {
                    position: toast.POSITION.TOP_CENTER,
                });
            } else {
                console.error('Erro na requisição: A resposta da API não contém um campo "error" válido.', responseData);
                toast.error('Erro na requisição: A resposta da API não contém um campo "error" válido.', {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
        } catch (error) {
            console.error('Erro na requisição:', error.message);
            toast.error(`Erro na requisição: ${error.message}`, {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <TextField
                        name="email"
                        label="Email"
                        sx={{ backgroundColor: 'rgba(195, 202, 241, 0.20)' }}
                        error={emailError}
                        helperText={emailError ? 'O Email é obrigatório!' : ''}
                        onChange={handleInputChange}
                    />
                </Stack>

                <LoadingButton
                    sx={{ mt: 2, backgroundColor: '#33FFC2', boxShadow: 0, color: '#001D3D' }}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                >
                    Enviar
                </LoadingButton>
            </form>
            <ToastContainer />
        </>
    );
}
