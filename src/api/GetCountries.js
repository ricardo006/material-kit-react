import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetCountries() {
    const [data, setData] = useState([]);
    const apiKey = 'c70bc4f31d5e867eedd3c02338e22640f1e034547e42814d35851acdef493c3b';
    const apiUrl = `https://apiv3.apifootball.com/?action=get_countries&APIkey=${apiKey}`;

    useEffect(() => {
        // Verificamos se já temos os dados de países antes de fazer uma nova requisição
        if (data.length === 0) {
            // Função para buscar dados de Países da API
            const fetchData = async () => {
                try {
                    const response = await axios.get(apiUrl);
                    setData(response.data);
                } catch (error) {
                    console.error('Erro ao buscar dados da API:', error);
                }
            };

            // Chame a função para buscar dados apenas se ainda não os tivermos
            fetchData();
        }
    }, [data, apiUrl]);

    return data;
}

export default GetCountries;
