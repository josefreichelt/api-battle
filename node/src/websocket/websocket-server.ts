import { Server } from 'http';
import { WebSocketServer } from 'ws';

export function setupWebsocketServer(server:Server){
    const WSS = new WebSocketServer({ server });
    WSS.on('connection', (socket)=>{
        console.log('Connected');
        socket.send(JSON.stringify({ username: 'server', message: 'welcome to api battle chat room' }));
        socket.onmessage = (ev) => {
            console.log(ev.data);
            const { username, message } = JSON.parse(ev.data.toString());
            console.log(username, message);
            if (username && message){
                WSS.clients.forEach((client)=>{
                    client.send(JSON.stringify({
                        username,
                        message,
                        date: new Date().toDateString()
                    }));
                });
            }
        };

    });
}

