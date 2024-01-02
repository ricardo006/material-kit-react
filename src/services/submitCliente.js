import axios from 'axios';

const submitCliente = async (formData, userData) => {
    try {
        // Obter o token do localStorage
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error('Token não encontrado no localStorage.');
        }

        // Certifique-se de ajustar isso conforme a estrutura real do seu objeto userData
        const idUsuarioAuth = userData.id;

        const dataPost = {
            nome_usuario: formData.usuario,
            nome_completo: formData.nomeCompleto,
            cambista_id: idUsuarioAuth,
            status: formData.statusEnabled === true ? 'A' : 'I',
        };

        // Adicionar o token aos headers
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };

        // Fazer a chamada para a API
        const response = await axios.post('http://localhost:8000/api/v1/cambista/cadastrar-cliente', dataPost, {
            headers,
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao enviar dados para a API:', error);
        throw error;
    }
};

export { submitCliente };
