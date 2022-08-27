import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {

  const response = fetch(urlApi, {
    method: 'POST', //tiene que ir en mayúscula
    mode: 'cors', //cors es el permiso que va a tener, por defecto va estar siempre en cors
    credentials: 'same-origin', //es opcional
    headers:{
      'Content-Type': 'application/json' //necesario indicar que lo que se está enviando es de tipo json
    },
    body: JSON.stringify(data) 
  });
  return response;
}

function putData(urlApi, dataUpdate) {
  const response = fetch(urlApi, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataUpdate)
  });
  return response;
}

const dataPost = {
  "title": "A new clothes",
  "price": 36,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

const dataPut = {
  "title": "Nike jogging",
  "price": 80,
  "description": "I love it",
}

// postData(`${API}/products`, dataPost)
//   .then(response => response.json())
//   .then(data => console.log(data));

putData(`${API}/products/220`, dataPut)
  .then(response => response.json())
  .then(dataUpdate => console.log(dataUpdate));