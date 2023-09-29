import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WebSocketLive from './WebSocketLive'; // Importe a função WebSocketLive

function GetOddsInterval() {
    const [data, setData] = useState([]);
    const apiKey = '5f64615daab4fd10651dc6fb3bfbea223db46a9f737c40de2d7fbf8673eb70c0';
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
