import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';

import buttonStyle from './button.module.css';
import img from './vite-logo.png';
import data from './data.json';
import sum from './sum.ts';

console.log(sum(5, 8));


const modules = import.meta.glob('./modules/*.js');

for( const modulePath in modules ) {
  modules[modulePath]().then(module => {
    module.load()
  })
}

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${img}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello World!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <pre>${JSON.stringify(data.user)}</pre>
`

document.querySelector('button').className = buttonStyle.btn;


setupCounter(document.querySelector('#counter'))
