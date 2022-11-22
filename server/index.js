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
// const ioauthors = require("socket.io")( {
//     cors: {
//         origin: '*',
        
//     },
//     path: 'api/authors'
// });

iomain.on('connection', async (mysocket) => {
        
    mysocket.broadcast.emit('user connected');
        
    iomain.emit('my event',await db.db() );
});

iomain.on('connection', async (mysocket) => {
    mysocket.broadcast.emit('user connected');

    iomain.emit('authors', await db.getauth() )
});

iomain.listen(8000);
app.listen(3001);
