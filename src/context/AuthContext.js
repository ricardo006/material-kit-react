import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const Context = createContext();

function AuthProvider({ children }) {
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

    const handleLogin = async (email, password) => {
        try {
            const { data } = await axios.post("http://localhost:8000/api/v1/user/login-YXBpLmJldHNwYWNl", {
                email,
                password,
            });

            const { token, error } = data.response; // Ajuste aqui

            localStorage.setItem('token', JSON.stringify(token));
            axios.defaults.headers.Authorization = `Bearer ${token}`;

            console.log(token);

            if (error) {
                console.log('Senha incorreta!');
            } else {
                console.log('Token:', token);
                setAuthenticated(true);
                // Chama a função setToken diretamente de AuthData
                // navigate('/dashboard', { replace: true });
            }
        } catch (error) {
            console.error('Erro no login:', error.message);
        }
    };

    return (
        <Context.Provider value={{ loading, authenticated, handleLogin }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };
