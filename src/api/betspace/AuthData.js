import axios from 'axios';

let authToken;

const setToken = (token) => {
    authToken = token;
    console.log('Token AuthData:', authToken);

    // Chame getUserData automaticamente ao definir o token
    getUserData().then((userData) => {
        if (userData) {
            console.log('Dados do usuário:', userData);
        } else {
            console.log('Não foi possível obter os dados do usuário.');
        }
    }).catch((error) => {
        console.error('Erro ao obter dados de autenticação:', error.message);
    });
};

const getUserData = async () => {
    try {
        if (!authToken) {
            throw new Error('Token não definido');
        }

        const response = await axios.get(
            'http://localhost:8000/api/v1/user/get-user-auth',
            {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            }
        );

        console.log('Response AuthData:', response.data);

        if (response.data && response.data.user_auth) {
            return response.data.user_auth;
        }

        throw new Error('Dados do usuário não encontrados na resposta');
    } catch (error) {
        console.error('Erro ao obter dados de autenticação:', error.message);
        return null;
    }
};

// Configuração do token inicial (substitua pelo token real conforme necessário)
setToken(authToken);

const useAuthData = () => ({
    setToken,
    getUserData,
});

export { setToken, getUserData, useAuthData };
