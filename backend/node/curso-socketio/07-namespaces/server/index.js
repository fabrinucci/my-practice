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

const teachers = io.of('teachers');
const students = io.of('students');

teachers.on('connection', (socket) => {
  console.log(socket.id + ' has connected to teachers room');
});

students.on('connection', (socket) => {
  console.log(socket.id + ' has connected to students room');
});

server.listen(PORT, () => {
  console.log(`App listen at http://localhost:${PORT}`);
});
