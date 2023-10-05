import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetCountries() {
    const [data, setData] = useState([]);
    const apiKey = '5f64615daab4fd10651dc6fb3bfbea223db46a9f737c40de2d7fbf8673eb70c0';
    const apiUrl = `https://apiv3.apifootball.com/?action=get_countries&APIkey=${apiKey}`;

    useEffect(() => {
        // Função para buscar dados da API
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setData(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        // Chame a função para buscar dados quando o componente for montado
        fetchData();
    }, []);

    return data;
}

export default GetCountries;
