import { useState, useEffect } from 'react';
import axios from 'axios';

function Predictions() {
    const [data, setData] = useState([]);
    const token = 'c70bc4f31d5e867eedd3c02338e22640f1e034547e42814d35851acdef493c3b'; // Substitua 'seu_token_aqui' pelo seu token real
    const baseUrl = 'https://apiv3.apifootball.com/';
    const apiUrl = `${baseUrl}?action=get_predictions&from=2023-10-02&to=2023-10-03&APIkey=${token}`;
    // passar outros parametros e comparar country_id e league_id pelos filtros em AppChipMercados

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);

                if (response.status === 200) {
                    const newData = response.data;

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
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Houve um problema com a solicitação à API:', error);
            }
        };

        fetchData();
    }, [apiUrl]);

    // Filtrar os dados em que match_status não seja "finished"
    const filteredData = data.filter((item) => item.match_status !== 'Finished');

    return filteredData;
}

export default Predictions;
