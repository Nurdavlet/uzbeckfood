const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const db = require('./db/db');
const url = require('url');
const busboy = require('connect-busboy');
const bodyParser = require('body-parser');
const host = "http://localhost:3000";
const iomain = require("socket.io")( {
    cors: {
        origin: '*'
    },
    path: '/api/' 
  });
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(busboy());
const ioauthors = require("socket.io")( {
    cors: {
        origin: '*',
        
    },
    path: 'api/authors'
});

iomain.on('connection', async (mysocket) => {
        
    mysocket.broadcast.emit('user connected');
        
    iomain.emit('my event',await db.db() );
});

iomain.on('connection', async (mysocket) => {
    mysocket.broadcast.emit('user connected');

    iomain.emit('authors', await db.getauth() )
});

iomain.listen(8000);
app.post('/api/auth', (req, res) => {
    console.log(req.body);
    if (req.body?.auth_email === 'nurdavlet@a.a' && req.body.auth_password === '30032003') {
      res.redirect(url.format({
        pathname:host + "/authentification",
        query: {
           "verifi": "Ok"
         }
      }));
    res.end();
    } else {
      res.redirect(url.format({
        pathname: host + "/authentification",
        query: {
          "verifi": "Bad"
        }
      }))
    }

});
app.post('/api/form', async (req, res) => {
  console.log(req.body)
  await db.dbset(req.body);
  if (req.busboy) {
    req.busboy.on("file", function(fieldName, fileStream, fileName, encoding, mimeType) {
      console.log(fileStream);
    })
  }
  res.end();
});
app.listen(3001);
