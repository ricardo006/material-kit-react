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

export default WebSocketLive;
