const socket = io();

const connectRoom1 = document.querySelector('#connectRoom1');
const connectRoom2 = document.querySelector('#connectRoom2');
const connectRoom3 = document.querySelector('#connectRoom3');

connectRoom1.addEventListener('click', () => {
  socket.emit('connect to room', 'room1');
});

connectRoom2.addEventListener('click', () => {
  socket.emit('connect to room', 'room2');
});

connectRoom3.addEventListener('click', () => {
  socket.emit('connect to room', 'room3');
});

const messageButton = document.querySelector('#sendMessage');

messageButton.addEventListener('click', () => {
  const message = prompt('Write your message');
  socket.emit('message', message);
});

socket.on('send message', ({ room, message }) => {
  const li = document.createElement('li');
  li.textContent = message;

  document.querySelector(`#${room}`).append(li);
});
