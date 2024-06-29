const socket = io({
  auth: {
    token: '123456',
  },
});

// En caso de error en el middleware
socket.on('connect_error', (err) => {
  console.log('Error de conexión 😵‍💫');
  console.log(err.message);
  console.log(err.data.details);
});
