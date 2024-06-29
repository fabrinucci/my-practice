import { createServer } from 'node:http';
import path from 'node:path';

import express from 'express';
import { Server } from 'socket.io';

const PORT = 3000;
const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(path.join(process.cwd(), 'client')));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/client/index.html');
});

io.on('connection', (socket) => {
  socket.connectedRoom = '';

  socket.on('connect to room', (room) => {
    socket.leave(socket.connectedRoom);
    switch (room) {
      case 'room1':
        socket.join('room1');
        socket.connectedRoom = 'room1';
        break;

      case 'room2':
        socket.join('room2');
        socket.connectedRoom = 'room2';
        break;

      case 'room3':
        socket.join('room3');
        socket.connectedRoom = 'room3';
        break;
    }
  });

  socket.on('message', (message) => {
    const room = socket.connectedRoom;
    io.to(room).emit('send message', {
      room,
      message,
    });
  });
});

server.listen(PORT, () => {
  console.log(`App listen at http://localhost:${PORT}`);
});
