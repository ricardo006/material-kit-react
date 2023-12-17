import { useState } from 'react';
import axios from 'axios';
import { setToken } from '../api/betspace/AuthData'; // Importa apenas setToken

const useAuth = () => {
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordHelperText, setPasswordHelperText] = useState('');

    const login = async (email, password, navigate) => {
        setEmailError(false);
        setPasswordError(false);
        setPasswordHelperText('');

        if (!email || !password) {
            if (!email) {
                setEmailError(true);
            }
            if (!password) {
                setPasswordError(true);
                setPasswordHelperText('Preencha o campo de senha.');
            }
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/v1/user/login-YXBpLmJldHNwYWNl', {
                email,
                password,
            });

            if (response.data && response.data.error) {
                setPasswordError(true);
                setPasswordHelperText('Senha incorreta!');
            } else {
                const token = response.data.response?.token;

                if (token) {
                    console.log('Token:', token);
                    // Chama a função setToken diretamente de AuthData
                    setToken(token);
                    navigate('/dashboard', { replace: true });
                } else {
                    console.error('Token não encontrado na resposta.');
                }
            }
        } catch (error) {
            console.error('Erro no login:', error.message);
        }
    };

    return {
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        passwordHelperText,
        setPasswordHelperText,
        login
    };
};

export default useAuth;
