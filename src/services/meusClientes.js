import axios from 'axios';

const meusClientesApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
});

meusClientesApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const getMeusClientes = async () => {
    const response = await meusClientesApi.get('cambista/clientes');
    return response.data;
};
