import axios from 'axios';

const baseURL = 'http://localhost:8000/api/v1/cambista/';

const clienteService = {
    deleteCliente: async (clienteId) => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                throw new Error('Token não encontrado no localStorage.');
            }

            const response = await axios.delete(`${baseURL}excluir-cliente/${clienteId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        } catch (error) {
            console.error(`Erro ao excluir cliente com ID ${clienteId}:`, error);
            throw error;
        }
    },
};

export default clienteService;
