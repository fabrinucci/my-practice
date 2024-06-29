const socket = io();

const checkSocketStatus = () => {
  console.log(`Connected: ${socket.connected}`);
};

socket.on('connect', () => {
  console.log('connected', socket.id);
  checkSocketStatus();
});

socket.on('disconnect', () => {
  console.log(`Socket ${socket.id} has disconnected`);
  checkSocketStatus();
});

socket.io.on('reconnect_attempt', () => {
  console.log('Start reconnection...');
});

socket.on('connect_error', () => {
  console.log('Could not reconnect :(');
});

socket.io.on('reconnect', () => {
  console.log('Reconnected!!');
});
