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
