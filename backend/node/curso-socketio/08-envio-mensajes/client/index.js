const user = prompt('write your user');
const teachers = ['gndx', 'protsx', 'mrtruth'];
let socketNamespace, group;

const chat = document.querySelector('#chat');
const namespace = document.querySelector('#namespace');

if (teachers.includes(user)) {
  socketNamespace = io('/teachers');
  group = 'teachers';
} else {
  socketNamespace = io('/students');
  group = 'students';
}

socketNamespace.on('connect', () => {
  namespace.textContent = group;
});

// msg

const sendMessage = document.querySelector('#sendMessage');
sendMessage.addEventListener('click', () => {
  const message = prompt('Write your message');
  socketNamespace.emit('send message', {
    user,
    message,
  });
});

socketNamespace.on('message', (messageData) => {
  const { user, message } = messageData;

  const li = document.createElement('li');
  li.textContent = `${user}: ${message}`;

  chat.append(li);
});
