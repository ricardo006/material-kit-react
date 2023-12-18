// context/AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuthData } from '../api/betspace/AuthData';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const { setToken, getUserData } = useAuthData();

    const fetchUserData = async () => {
        try {
            // Define o token antes de fazer a chamada
            setToken(authToken);
            const data = await getUserData();

            if (data) {
                setUserData(data.user_auth);
                console.log(data.user_auth);
            }
        } catch (error) {
            console.error('Erro ao obter dados de usuário:', error.message);
        }
    };

    useEffect(() => {
        if (authToken) {
            fetchUserData();
        }
    }, [authToken]);

    console.log('Dados do usuário do contexto:', userData);

    return (
        <AuthContext.Provider value={{ authToken, setToken: setAuthToken, userData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};
