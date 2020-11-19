var io = require('socket.io-client');
var socket = io.connect('http://localhost:3001', { reconnect: true });

async function postSocket() {
    socket.on('connect', function (socket) {
        console.log('Connected!');
    });

    const data = socket.on('message', data => {
        return data;
    });

    return data;
}

module.exports = postSocket;
