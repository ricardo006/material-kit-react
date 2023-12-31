import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    const [errorMessage, setError] = useState({ message: '' });
    const navigate = useNavigate();

    const fetchUserData = async (token) => {
        try {
            setLoading(true);

            const response = await axios.get("http://localhost:8000/api/v1/user/get-user-auth", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const userData = response.data.user_auth;
            setUserData(userData);
            localStorage.setItem('userData', JSON.stringify(userData));
        } catch (error) {
            console.error('Erro ao obter dados do usuário:', error.message);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 10000);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUserData = localStorage.getItem('userData');

        const initAuth = async () => {
            if (token) {
                axios.defaults.headers.Authorization = `Bearer ${token}`;

                if (storedUserData) {
                    const parsedUserData = JSON.parse(storedUserData);
                    setUserData(parsedUserData);
                } else {
                    await fetchUserData(token);
                }
                setAuthenticated(true);
                setLoading(false);
            }
        };
        initAuth();
    }, [navigate]);

    async function handleLogin(email, password) {
        try {
            const { data } = await axios.post("http://localhost:8000/api/v1/user/login-YXBpLmJldHNwYWNl", {
                email,
                password,
            });

            const { token, error, message } = data.response;

            console.log('Resposta da API', message);

            if (token) {
                console.log('Token auth:', token);
                localStorage.setItem('token', token);
                await fetchUserData(token);
                navigate('/dashboard');
                setAuthenticated(true);
            }

            if (error === 'true') {
                setAuthenticated(false);
                setError(message);
            }

            return message;
        } catch (error) {
            console.error('Erro no login:', error.message);
            return 'Erro ao realizar o login.';
        }
    }

    async function handleLogout() {
        localStorage.removeItem('token');
        delete axios.defaults.headers.Authorization;
        setAuthenticated(false);
        setUserData(null)
        navigate('/login');
    };

    return { authenticated, loading, userData, handleLogin, errorMessage, handleNavigate: navigate, handleLogout };
}
