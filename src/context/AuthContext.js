import React, { createContext, useContext, useState, useEffect } from 'react';
import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {

    const {
        authenticated, userData, loading, handleLogin, errorMessage, handleNavigate
    } = useAuth();

    return (
        <Context.Provider value={{ authenticated, userData, loading, handleLogin, errorMessage, handleNavigate }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };