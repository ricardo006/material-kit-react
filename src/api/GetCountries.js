import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MOCK_COUTRIES = [
    {
        country_id: 1,
        country_name: 'Brasil',
        country_logo: 'link_para_logo_brasil.png',
    },
    {
        country_id: 2,
        country_name: 'Estados Unidos',
        country_logo: 'link_para_logo_eua.png',
    },
    {
        country_id: 3,
        country_name: 'China',
        country_logo: 'link_para_logo_china.png',
    },
];

function GetCountries() {
    const [data, setData] = useState([]);

    const apiKey = 'c70bc4f31d5e867eedd3c02338e22640f1e034547e42814d35851acdef493c3b';

    const apiUrl = `https://apiv3.apifootball.com/?action=get_countries&APIkey=${apiKey}`;

    useEffect(() => {
        // Função para buscar dados de Países da API
        const fetchData = async () => {
            try {
                // const response = await axios.get(apiUrl);
                setData(MOCK_COUTRIES);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        // Verificamos se já temos os dados de países antes de fazer uma nova requisição
        if (data.length === 0) {
            // Chame a função para buscar dados apenas se ainda não os tivermos
            fetchData();
        }
    }, [data, apiUrl]);

    return data;
}

export default GetCountries;
