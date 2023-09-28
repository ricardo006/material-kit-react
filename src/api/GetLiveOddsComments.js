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
            setTimeout(socketLive, 1000);
        }
    };

    socketLive();
}

function GetLiveOddsComments() {
    const [data, setData] = useState([]);
    const apiKey = '5f64615daab4fd10651dc6fb3bfbea223db46a9f737c40de2d7fbf8673eb70c0';
    const apiUrl = `https://apiv3.apifootball.com/?action=get_live_odds_commnets&APIkey=${apiKey}`;

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

        WebSocketLive(apiKey, updateData);

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

export default GetLiveOddsComments;
