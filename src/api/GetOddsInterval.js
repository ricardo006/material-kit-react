import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WebSocketLive from './WebSocketLive'; // Importe a função WebSocketLive

function GetOddsInterval() {
    const [data, setData] = useState([]);
    const apiKey = 'c70bc4f31d5e867eedd3c02338e22640f1e034547e42814d35851acdef493c3b';
    const apiUrl = `https://apiv3.apifootball.com/?action=get_odds&from=2023-09-30&to=2023-09-30&APIkey=${apiKey}`;

    useEffect(() => {
        const updateData = (newData) => {
            setData((prevData) => {
                const newDataArray = [...prevData];

                newData.forEach((newItem) => {
                    const existingItemIndex = newDataArray.findIndex((item) => item.match_id === newItem.match_id);
                    if (existingItemIndex !== -1) {
                        newDataArray[existingItemIndex] = newItem;
                    } else {
                        newDataArray.push(newItem);
                    }
                });

                return newDataArray;
            });
        };

        WebSocketLive(apiKey, updateData); // Inicie a conexão WebSocket

        axios
            .get(apiUrl)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Network response was not ok');
                }
            })
            .catch((error) => {
                console.error('Houve um problema com a solicitação à API:', error);
            });
    }, []);

    return data;
}

export default GetOddsInterval;
