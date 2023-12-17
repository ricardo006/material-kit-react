// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import useAuthData from '../api/betspace/AuthData';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const { setToken } = useAuthData();

    const fetchUserData = async (token) => {
        try {
            const response = await fetch('http://localhost:8000/api/v1/user/get-user-auth', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Erro ao obter dados de usuário:', error.message);
        }
    };

    useEffect(() => {
        if (authToken) {
            fetchUserData(authToken);
        }
    }, [authToken]);

    return (
        <AuthContext.Provider value={{ authToken, setToken: setAuthToken, userData }}>
            {children}
        </AuthContext.Provider>
    );
};
