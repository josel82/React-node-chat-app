// Third party Libraries
const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
//****************************************************
const publicPath = path.join(__dirname, '../public'); //Public path for development mode
const buildPath = path.join(__dirname, '../build');   //Public path for production mode
const env = process.env.NODE_ENV || 'development';    //Environment mode
const port = process.env.PORT || 3000;                //Port number
const app = express();                                //Express instance

const server = http.createServer(app);
const io = socketIO(server);

// Determining environment mode
if(env === 'development'){        
    app.use(express.static(publicPath));
}else if(env === 'production'){
    app.use(express.static(buildPath));
}




io.on('connection', (socket)=>{
    console.log('User connected');

    socket.on('disconnect', ()=>{
        console.log('User disconnected');
    });
});


server.listen(port, ()=>{
    console.log('Server up and running on port 3000');
});