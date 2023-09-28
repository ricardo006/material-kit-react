import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WebSocketLive(apiKey, updateData) {
    let socket = null;

    const socketLive = () => {
        socket = new WebSocket(`wss://wss.apifootball.com/livescore?Widgetkey=${apiKey}&timezone=+03:00`);

        socket.onopen = function (e) {
            console.log('Connected');
            console.log('Waiting data...');
        }

        socket.onmessage = function (e) {
            if (e.data) {
                const receivedData = JSON.parse(e.data);
                console.log(receivedData);
                updateData(receivedData);
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
}

function GetLiveOddsComments() {
    const [data, setData] = useState([]);
    const apiKey = '5f64615daab4fd10651dc6fb3bfbea223db46a9f737c40de2d7fbf8673eb70c0'; // Substitua pelo seu API key
    const apiUrl = `https://apiv3.apifootball.com/?action=get_live_odds_commnets&APIkey=${apiKey}`;

    useEffect(() => {
        // Função para atualizar os dados no estado 'data'
        const updateData = (newData) => {
            setData((prevData) => {
                const newDataArray = [...prevData];

                // Atualize ou adicione registros correspondentes ao 'match_id'
                newData.forEach((newItem) => {
                    const existingItemIndex = newDataArray.findIndex((item) => item.match_id === newItem.match_id);
                    if (existingItemIndex !== -1) {
                        // Se o registro já existir, atualize-o
                        newDataArray[existingItemIndex] = newItem;
                    } else {
                        // Se o registro não existir, adicione-o
                        newDataArray.push(newItem);
                    }
                });

                return newDataArray;
            });
        };

        WebSocketLive(apiKey, updateData);

        // Fazer uma requisição HTTP usando Axios
        axios
            .get(apiUrl)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Network response was not ok');
                }
                // Emita os dados da API para o servidor WebSocket (se necessário)
                // socket.emit('apiData', response.data);
            })
            .catch((error) => {
                console.error('Houve um problema com a solicitação à API:', error);
            });
    }, []);

    return data;
}

export default GetLiveOddsComments;
