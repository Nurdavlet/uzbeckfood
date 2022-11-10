const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const iomain = require("socket.io")( {
    cors: {
        origin: '*'
    },
    path: '/api/' 
  });






    iomain.on('connection', (mysocket) => {
        
        mysocket.broadcast.emit('user connected');
        
        iomain.emit('my event', [{messg: 'Hello'},{messg: 'Hello'},{messg: 'Hello'},{messg: 'Hello'}]);
    });
    

iomain.listen(8000);
app.listen(3001);