import axios from 'axios';

let authToken;

const setToken = (token) => {
    authToken = token;
    console.log('Token definido:', token);
};

const getUserData = async () => {
    try {
        const response = await axios.post(
            'http://localhost:8000/api/v1/user/get-user-auth',
            {},
            {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            }
        );

        console.log(response)

        return response.data.response;
    } catch (error) {
        console.error('Erro ao obter dados de autenticação:', error.message);
        return null;
    }
};

export { setToken, getUserData };
