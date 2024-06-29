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

io.use((socket, next) => {
  const token = socket.handshake.auth.token;

  if (token == '123456') {
    next();
  } else {
    const err = new Error('No puedes pasar >:c');
    err.data = {
      details: 'No pudiste ser autenticado',
    };

    next(err);
  }
});

io.on('connection', (socket) => {
  console.log(socket.id);
});

server.listen(PORT, () => {
  console.log(`App listen at http://localhost:${PORT}`);
});
