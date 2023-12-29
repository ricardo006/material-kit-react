import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);
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
                setAuthenticated(true);

                if (storedUserData) {
                    const parsedUserData = JSON.parse(storedUserData);
                    setUserData(parsedUserData);
                } else {
                    await fetchUserData(token);
                }

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

            localStorage.setItem('token', JSON.stringify(token));
            axios.defaults.headers.Authorization = `Bearer ${token}`;

            console.log(token);

            if (token) {
                console.log('Token  auth:', token);
                setAuthenticated(true);
                await fetchUserData(token);

                // Define o caminho de redirecionamento
                navigate('/dashboard');
            } else if (error) {
                // Lida com o erro de login, se necessário
            }
        } catch (error) {
            console.error('Erro no login:', error.message);
        }
    }

    // Retorne handleNavigate junto com os outros valores
    return { authenticated, loading, userData, handleLogin, handleNavigate: navigate };
}
