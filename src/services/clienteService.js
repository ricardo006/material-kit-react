import axios from 'axios';

const token = localStorage.getItem('token');

export const API_BASE_URL = 'http://localhost:8000/api/v1/cambista/';

const clienteService = {
    getClientes: async () => {
        axios.interceptors.request.use(
            (config) => {
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        try {
            const response = await axios.get(`${API_BASE_URL}clientes`);
            return response.data;
        } catch (error) {
            console.error('Erro ao obter clientes:', error.message);
            throw error;
        }
    },
    deleteCliente: async (clienteId) => {
        try {
            if (!token) {
                throw new Error('Token não encontrado no localStorage.');
            }

            const response = await axios.delete(`${API_BASE_URL}excluir-cliente/${clienteId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                return response.data;
            }

            if (response.status === 401) {
                console.error('Acesso não autorizado. O token pode ter expirado.');
                // Lidar com acesso não autorizado, por exemplo, realizar logout ou renovar o token
            }

            console.error(`Erro ao excluir cliente com ID ${clienteId}. Código de status: ${response.status}`);
            throw new Error(`Erro ao excluir cliente com ID ${clienteId}.`);
        } catch (error) {
            console.error(`Erro ao excluir cliente com ID ${clienteId}:`, error.message);
            throw error;
        }
    },
    createCliente: async (formData, userData) => {
        try {
            if (!token) {
                throw new Error('Token não encontrado no localStorage.');
            }

            const idUsuarioAuth = userData.id;

            const dataPost = {
                nome_usuario: formData.usuario,
                nome_completo: formData.nomeCompleto,
                cambista_id: idUsuarioAuth,
                status: formData.statusEnabled === true ? 'A' : 'I',
            };

            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            };

            const response = await axios.post(`${API_BASE_URL}cadastrar-cliente`, dataPost, {
                headers,
            });

            if (response.status === 200) {
                return response.data;
            }

            if (response.status === 401) {
                console.error('Acesso não autorizado. O token pode ter expirado.');
                // Lidar com acesso não autorizado, por exemplo, realizar logout ou renovar o token
            }

            console.error('Erro ao enviar dados para a API:', response.data);
            throw new Error('Erro ao enviar dados para a API.');
        } catch (error) {
            console.error('Erro ao enviar dados para a API:', error.message);
            throw error;
        }
    }
};

export default clienteService;
