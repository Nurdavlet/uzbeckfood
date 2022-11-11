const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const db = require('./db/db');
const iomain = require("socket.io")( {
    cors: {
        origin: '*'
    },
    path: '/api/' 
  });






    iomain.on('connection', async (mysocket) => {
        
        mysocket.broadcast.emit('user connected');
        
        iomain.emit('my event',await db.db() );
    });
    

iomain.listen(8000);
app.listen(3001);