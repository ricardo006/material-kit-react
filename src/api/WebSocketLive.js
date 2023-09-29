import { useEffect } from 'react';

function WebSocketLive(apiKey, updateData) {
    useEffect(() => {
        // Substitua 'wss://example.com' pelo URL WebSocket fornecido pela API
        const socket = new WebSocket(`wss://example.com?apikey=${apiKey}`);

        // Event listener para quando a conexão WebSocket é aberta
        socket.addEventListener('open', (event) => {
            console.log('WebSocket Connection Opened');
        });

        // Event listener para receber mensagens WebSocket
        socket.addEventListener('message', (event) => {
            const newData = JSON.parse(event.data);
            updateData(newData);
        });

        // Event listener para quando a conexão WebSocket é fechada
        socket.addEventListener('close', (event) => {
            console.log('WebSocket Connection Closed');
        });

        // Certifique-se de fechar a conexão WebSocket quando o componente é desmontado
        return () => {
            socket.close();
        };
    }, [apiKey, updateData]);
}

export default WebSocketLive;
