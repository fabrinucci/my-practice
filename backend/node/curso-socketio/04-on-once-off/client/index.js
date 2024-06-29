const socket = io();

socket.on('everyone', (message) => {
  console.log(message);
});

const emitToLast = document.querySelector('#emit-to-last');
emitToLast.addEventListener('click', () => {
  socket.emit('last', 'Hola 😄');
});

socket.on('greeting', (data) => {
  console.log(data);
});

// on, once, off
socket.on('on', () => {
  console.log('Se emite varias veces');
});

socket.once('once', () => {
  console.log('Se emite una sola vez');
});

const listener = () => {
  console.log('Se apaga el evento');
};

socket.on('off', listener);

setTimeout(() => {
  socket.off('off', listener);
}, 2000);
