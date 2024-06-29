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
  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} has disconnected`);
  });
});

server.listen(PORT, () => {
  console.log(`App listen at http://localhost:${PORT}`);
});
