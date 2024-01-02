
//* Old Way - pre Ecmascript 6
/*-
const API_URL = 'https://jsonplaceholder.typicode.com';
const xhr = new XMLHttpRequest();


function onRequestHandler() {
  if( this.readyState === 4 && this.status === 200 ) {
    // 0: UNSET -> No se ha llamado al metodo open
    // 1: OPENED -> Se ha llamado al metodo open
    // 2: HEADERS_RECEIVED -> Se esta llamando al metodo send()
    // 3: LOADING -> Esta recibiendo la respuesta
    // 4: DONE -> Ya se ha terminado la operacion.

    const data = JSON.parse(this.response);
    const label = data.map( user => (`<li>${ user.name } - ${user.email} </li>`));

    const apiSelector = document.querySelector('#api');

    apiSelector.innerHTML = `<ul>${ label }</ul>`;
    
  }
}

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', `${API_URL}/users`);
xhr.send();
*/


//* Actual way
// const apiUrl = 'https://jsonplaceholder.typicode.com';
// const showApi = document.querySelector('#api');


// fetch(`${ apiUrl }/users`)
//   .then( res => res.json())
//   .then( data => {
//     const template = data.map( user => (
//       `<li>User: ${ user.name } -|- Mail: ${ user.email }</li>`
//     ))

//     showApi.innerHTML = `<ul>${ template }</ul>`
//   })

const apiUrl = 'https://jsonplaceholder.typicode.com';
const showApi = document.querySelector('#api');
const ul = document.createElement('ul');

fetch(`${ apiUrl }/users`)
  .then( res => res.json())
  .then( data => {
    data.forEach( user => {
      let element = document.createElement('li');
      element.appendChild(
        document.createTextNode(`${user.name} - ${user.username}`)
      );

      ul.appendChild(element);      
    })
    showApi.appendChild(ul)
  })


//* API Rest Privada 

// const options = {
//   method: 'GET', // Por defecto siempre sera get, por lo que no es necesario especificarlo
//   headers: {
//     'X-RapidAPI-Key': '047e74a508msh7482311737874eap16d8e7jsnb4570dc11246',
//     'X-RapidAPI-Host': 'gplaystore.p.rapidapi.com'
//   }
// };

// fetch('https://gplaystore.p.rapidapi.com/applicationDetails?id=net.luxteam.sacal&lang=en&country=us', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


// API Rest Axios
// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://climacell-microweather-v1.p.rapidapi.com/weather/nowcast',
//   params: {lon: '-71.2216286', lat: '42.8237618', fields: 'precipitation'},
//   headers: {
//     'X-RapidAPI-Key': '047e74a508msh7482311737874eap16d8e7jsnb4570dc11246',
//     'X-RapidAPI-Host': 'climacell-microweather-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });