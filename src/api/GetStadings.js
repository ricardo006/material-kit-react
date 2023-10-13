import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetStadings = ({ countryId, onDataUpdate }) => {
    const [data, setData] = useState([]);
    const apiKey = 'c70bc4f31d5e867eedd3c02338e22640f1e034547e42814d35851acdef493c3b';
    const apiUrl = `https://apiv3.apifootball.com/?action=get_standings&&league_id=${countryId}&APIkey=${apiKey}`;
    // atualizar para ser o id da liga

    useEffect(() => {
        let isMounted = true; // Variável para rastrear o estado do componente

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
    }, []);

    return data;
};

export default GetStadings;
