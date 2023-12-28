import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuthData } from '../api/betspace/AuthData';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const { setToken, getUserData } = useAuthData();

    const fetchUserData = async () => {
        try {
            if (authToken) {
                setToken(authToken);
                const data = await getUserData();

                if (data) {
                    setUserData(data.user_auth);
                }
            }
        } catch (error) {
            console.error('Erro ao obter dados de usuário:', error.message);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [authToken]);

    const login = (token) => {
        setAuthToken(token);
        setToken(token);
    };

    const logout = () => {
        setAuthToken(null);
        setUserData(null);
        setToken(null);
        localStorage.removeItem('authToken');
    };

    return (
        <AuthContext.Provider value={{ authToken, userData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};
