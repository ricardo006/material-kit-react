import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Competitions = ({ countryId, onDataUpdate }) => {
    const [data, setData] = useState([]);
    const apiKey = '5f64615daab4fd10651dc6fb3bfbea223db46a9f737c40de2d7fbf8673eb70c0';
    const apiUrl = `https://apiv3.apifootball.com/?action=get_leagues&country_id=${countryId}&APIkey=${apiKey}`;
    // ao selecionar um país passar para listar as ligas deste país

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                if (isMounted) {
                    onDataUpdate(response.data);
                }
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData(); // Chamada à API quando o componente é montado

        return () => {
            isMounted = false; // Define a variável para false quando o componente é desmontado
        };
    }, [countryId, onDataUpdate, apiUrl]);

    return data;
};

export default Competitions;
