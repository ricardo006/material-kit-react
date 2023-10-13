import { useEffect, useState } from 'react';
import axios from 'axios';
import WebSocketLive from './WebSocketLive';

function GetLiveOddsComments() {
    const [data, setData] = useState([]); // Initialize data state with an empty array
    const apiKey = 'c70bc4f31d5e867eedd3c02338e22640f1e034547e42814d35851acdef493c3b';
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
                    throw new Error('Resposta da rede não estava ok');
                }

                // Registre a resposta inteira da API
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Houve um problema com a solicitação à API:', error);
            });
    }, []);

    console.log(data.live_odds);

    return data;
}

export default GetLiveOddsComments;
