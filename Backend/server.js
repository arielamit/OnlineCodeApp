const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const codeBlocks = require('./codeBlocks');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('lobby', { codeBlocks });
});

app.get('/codeblock/:id', (req, res) => {
  const codeBlock = codeBlocks[req.params.id];
  res.render('codeblock', { codeBlock, id: req.params.id });
});

let mentorSocket = null;
io.on('connection', (socket) => {
  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    if (!mentorSocket) {
      mentorSocket = socket;
      socket.emit('role', 'mentor');
    } else {
      socket.emit('role', 'student');
      socket.to(roomId).emit('studentJoined', socket.id);
    }
  });

  socket.on('codeUpdate', (data) => {
    socket.to(data.roomId).emit('codeUpdate', data.code);
  });

  socket.on('disconnect', () => {
    if (socket === mentorSocket) {
      mentorSocket = null;
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
