import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetLiveOddsComments() {
    const [data, setData] = useState(null); // Inicialize como null
    const apiKey = '5f64615daab4fd10651dc6fb3bfbea223db46a9f737c40de2d7fbf8673eb70c0'; // Substitua pelo seu próprio API key
    const apiUrl = `https://apiv3.apifootball.com/?action=get_live_odds_commnets&APIkey=${apiKey}`;

    useEffect(() => {
        axios.get(apiUrl)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Network response was not ok');
                }
                setData(response.data);
                return console.log(response.data);
            })
            .then((apiData) => {
                setData(apiData.data); // Defina somente o objeto 'data' no estado
            })
            .catch((error) => {
                console.error('Houve um problema com a solicitação à API:', error);
            });
    }, []);

    if (data === null) {
        return <div>Carregando...</div>; // Exiba uma mensagem de carregamento enquanto os dados estão sendo buscados
    }

    // console.log(data);
    return (
        <div>
            <h1>Dados da API</h1>
            {/* <pre>{JSON.stringify(data)}</pre> */}
        </div>
    );
}

export default GetLiveOddsComments;
