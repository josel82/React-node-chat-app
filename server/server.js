// Third party Libraries
const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
//****************************************************
const dateMagager = require('./utilities/date.manager');
//*****************************************************
const env = process.env.NODE_ENV;
const buildPath = path.join(__dirname, '../build');   //Public path for production mode
const port = process.env.PORT || 8080;                //Port number
const app = express();                                //Express instance

const server = http.createServer(app);
const io = socketIO(server);
const date = dateMagager();

if(env && env === 'production'){
    app.use(express.static(buildPath));
}

io.on('connection', (socket)=>{
    console.log('User connected');

    socket.emit('newMessage',{
        from: 'Server',
        msg: 'Welcome to the Chat App',
        createdAt: date.getTimestamp()
    });

    socket.on('disconnect', ()=>{
        console.log('User disconnected');
    });
});


server.listen(port, ()=>{
    console.log('Server up and running on port 3000');
});