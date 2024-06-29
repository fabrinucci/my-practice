const socket = io();

socket.on('welcome', (data) => {
  const text = document.querySelector('#emit-text');
  text.textContent = data;
});

const emitButton = document.querySelector('#emit-button');
emitButton.addEventListener('click', () => {
  socket.emit('server', 'Hello from client 😄');
});

socket.on('everyone', (data) => {
  console.log(data);
});
