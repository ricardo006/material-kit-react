import React, { useEffect } from 'react';
import axios from 'axios';

function Competitions({ countryId, onDataUpdateCompetitions }) {
    const apiKey = 'c70bc4f31d5e867eedd3c02338e22640f1e034547e42814d35851acdef493c3b';
    const apiUrl = `https://apiv3.apifootball.com/?action=get_leagues&country_id=${countryId}&APIkey=${apiKey}`;

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                if (isMounted) {
                    onDataUpdateCompetitions(response.data);
                }
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData(); // Chamada à API quando o componente é montado

        return () => {
            isMounted = false; // Define a variável para false quando o componente é desmontado
        };
    }, [countryId, onDataUpdateCompetitions]);

    return null; // Não retorna nada, pois esta função é usada para buscar e atualizar os dados no componente pai
};

export default Competitions;
