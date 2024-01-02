
const cardSelector = document.querySelector('.card-container');
const btnAddSelector = document.querySelector('#btn-add');
const API_URL = 'https://randomfox.ca/floof/'


// const minimum = 1;
// const maximum = 123;

// const random = Math.floor(Math.random() * (maximum - minimum)) + minimum;



// const createContainer = (imageUrl) => {
//   const cardContainer = document.createElement('div');
//   const imgCard = document.createElement('img');

//   cardContainer.classList.add('card');
//   imgCard.src = `${imageUrl}`;
  
//   cardContainer.append(imgCard)
//   return cardContainer;
// }


// Lazy Loading


const isIntersecting = (entry) => { 
  return entry.isIntersecting // true dentro de la pantalla
}

const loadImg = (entry) => { 
  const container = entry.target // nodo en el que se accede en ese momento
  const image = container.firstChild;
  const url = image.dataset.src;
  image.src = url
  
  // Dejar de observar
  observer.unobserve(container);
}

// const observer = new IntersectionObserver((entries) => {
//   entries.filter(isIntersecting).forEach(action)
// });

const observer = new IntersectionObserver((entries) => {
  const entry = entries[0];
  if (entry.isIntersecting) loadImg(entry);
})


const registerImg = (image) => {
  observer.observe(image)
} 


// Image

const getApi = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  const randomImage = (data.image);

  const cardContainer = document.createElement('div');
  const imgCard = document.createElement('img');

  cardContainer.classList.add('card');
  imgCard.dataset.src = `${randomImage}`;
  
  cardContainer.append(imgCard);
  const newImg = cardContainer
  
  cardSelector.append(newImg);
  registerImg(newImg)

}

btnAddSelector.addEventListener('click', getApi);

