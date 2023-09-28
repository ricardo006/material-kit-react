import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetLiveOddsComments() {
    const [data, setData] = useState([]);
    const apiKey = '5f64615daab4fd10651dc6fb3bfbea223db46a9f737c40de2d7fbf8673eb70c0'; // Substitua pelo seu API key
    const apiUrl = `https://apiv3.apifootball.com/?action=get_live_odds_commnets&APIkey=${apiKey}`;
    
    // Declare a variável socket no início da função usando let
    let socket;

    useEffect(() => {
        const socketLive = () => {
            // Inicialize a variável socket
            socket = new WebSocket(`wss://wss.apifootball.com/livescore?Widgetkey=${apiKey}&timezone=+03:00`);

            console.log('Connecting...');
            socket.onopen = function (e) {
                // alert('Connected');
                console.log('Connected');
                console.log('Waiting data...');
            }
            socket.onmessage = function (e) {
                // alert(e.data);
                if (e.data) {
                    const receivedData = JSON.parse(e.data);
                    console.log(receivedData);
                    // Atualize o estado 'data' com os dados recebidos
                    setData(receivedData);
                } else {
                    console.log('No new data!');
                }
            }
            socket.onclose = function () {
                socket = null;
                setTimeout(socketLive, 5000);
            }
        };

        // Chame a função para iniciar a conexão WebSocket
        socketLive();

        // Fazer uma requisição HTTP usando Axios
        axios
            .get(apiUrl)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Network response was not ok');
                }
                // Emita os dados da API para o servidor WebSocket (se necessário)
                socket.emit('apiData', response.data);
            })
            .catch((error) => {
                console.error('Houve um problema com a solicitação à API:', error);
            });
    }, []);

    return data;
}

export default GetLiveOddsComments;
