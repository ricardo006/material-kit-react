import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [errorMessage, setError] = useState({ message: '' });
    const navigate = useNavigate();

    const fetchUserData = async (token) => {
        try {
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

            const { token, error } = data.response;

            console.log('Resposta da API', data.response.message);

            if (token) {
                console.log('Token auth:', token);
                await fetchUserData(token);
                navigate('/dashboard');
                setAuthenticated(true);
            }

            if (data.response.error === 'true') {
                setAuthenticated(false);
                setError(data.response.message);
            }
        } catch (error) {
            console.error('Erro no login:', error.message);
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
