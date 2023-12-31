import axios from 'axios';

const meusBilhetesApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
});

meusBilhetesApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Supondo que o token está armazenado localmente
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const getMeusBilhetes = async () => {
    const response = await meusBilhetesApi.get('cambista/meus-bilhetes');
    return response.data;
};