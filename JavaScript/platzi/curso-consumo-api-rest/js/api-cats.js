
// const querystrings = [
//   '?',
//   'limit=3',
//   '&order=Desc',
// ].join('');

// const API_URL = `https://api.thecatapi.com/v1/images/search${querystrings}`;

// const reload = async () => {

//   const response = await fetch(API_URL);
//   const data = await response.json();

//   const image1 = document.querySelector('#img1'); 
//   const image2 = document.querySelector('#img2'); 
//   const image3 = document.querySelector('#img3'); 
//   image1.src = data[0].url
//   image2.src = data[1].url
//   image3.src = data[2].url
// }

// reload();



//- Otro ejemplo

const btn = document.querySelector('#button');

async function reload() {
  const catUrlApi = 'https://api.thecatapi.com/v1/images/search?limit=3';

  const response = await fetch(catUrlApi);
  const data = await response.json();
  const images = document.querySelectorAll('img'); 

  const arrImages = [...images];
  arrImages.forEach((image, index) => {
    image.src = data[index].url;
  });
}

btn.addEventListener('click', reload);
window.onload = reload();


//- Clase anterior

// fetch(API_URL)
//   .then( res => res.json())
//   .then( data => {
//     const img = document.querySelector('img')
//     img.src = data[0].url
//     img.classList.add('img-style');
//   })
