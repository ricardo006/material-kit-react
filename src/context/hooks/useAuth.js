import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            axios.defaults.headers.Authorization = `Bearer ${token}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function handleLogin(email, password) {
        try {
            const { data } = await axios.post("http://localhost:8000/api/v1/user/login-YXBpLmJldHNwYWNl", {
                email,
                password,
            });

            const { token, error } = data.response; // Ajuste aqui

            localStorage.setItem('token', JSON.stringify(token));
            axios.defaults.headers.Authorization = `Bearer ${token}`;

            console.log(token);

            if (token) {
                console.log('Token  auth:', token);
                setAuthenticated(true);
            } else {

                // Chama a função setToken diretamente de AuthData
                // navigate('/dashboard', { replace: true });
            }
        } catch (error) {
            console.error('Erro no login:', error.message);
        }
    };

    return { authenticated, loading, handleLogin }
}
