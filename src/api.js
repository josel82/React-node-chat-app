import openSocket from 'socket.io-client';

const port = process.env.PORT || 3000;
const socket = openSocket(`http://localhost:${port}`);


socket.on('connect', ()=>{
    console.log('Connected to the server');
});

socket.on('disconnect', ()=>{
    console.log('Disconnected from server');
});