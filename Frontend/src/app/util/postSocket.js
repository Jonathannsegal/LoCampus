var io = require('socket.io-client');
var socket = io.connect('http://localhost:3001', { reconnect: true });

// function postSocket() {
console.log("hello");

socket.on('connect', function (socket) {
    console.log('Connected!');
});

socket.on('message', data => {
    console.log(data);
    // return data;
});

    // const data = socket.on('message', data => {
    //     console.log(data);
    //     return data;
    // });

    // return data;
// }

// module.exports = postSocket;
