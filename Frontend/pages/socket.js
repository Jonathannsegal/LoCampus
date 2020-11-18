import React, { useEffect } from 'react';
import postSocket from '../src/app/util/postSocket';

const Socket = () => {
    useEffect(() => {
        postSocket().then(result => console.log(result));
    }, []);

    return (
        <div>hi</div>
    );
};

export default Socket;