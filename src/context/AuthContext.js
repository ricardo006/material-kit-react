import React, { createContext, useContext, useState, useEffect } from 'react';
import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {

    const {
        authenticated, userData, loading, handleLogin, handleNavigate
    } = useAuth();

    return (
        <Context.Provider value={{ loading, userData, authenticated, handleLogin, handleNavigate }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };