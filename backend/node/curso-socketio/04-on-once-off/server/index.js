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

const socketsOnline = [];

io.on('connection', (socket) => {
  socketsOnline.push(socket.id);

  // Emisión a uno solo
  socket.on('last', (msg) => {
    const lastSocket = socketsOnline.at(-1);
    io.to(lastSocket).emit('greeting', msg);
  });

  //* on, once, off
  socket.emit('on', 'holi');
  socket.emit('on', 'holi');

  socket.emit('once', 'holi');
  socket.emit('once', 'holi');

  socket.emit('off', 'holi');

  setTimeout(() => {
    socket.emit('off', 'holi');
  }, 3000);
});

server.listen(PORT, () => {
  console.log(`App listen at http://localhost:${PORT}`);
});
