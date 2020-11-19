import React, { useEffect } from 'react';
import postSocket from '../src/app/util/postSocket';

var io = require('socket.io-client');
// var socket = io.connect('http://localhost:3001', { reconnect: true });

const Socket = () => {
    useEffect(() => {
        // postSocket().then(result => console.log(result));
        var socket = io.connect('http://localhost:3001', { reconnect: true });
        socket.on('message', data => {
            console.log(data);
            // return data;
        });
    }, []);




    return (
        <div>hi</div>
    );
};

export default Socket;