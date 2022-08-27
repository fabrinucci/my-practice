const btn = document.querySelector('button');
const API_KEY = '66b3728e-94c3-4db0-8d56-c256b911a0dd';

function createArticle(options) {
  const article = document.createElement('article');
  const image = document.createElement('img');
  const button = document.createElement('button');

  article.setAttribute('id', `${options.id}`);
  article.setAttribute('class', `${options.class}`);

  image.setAttribute('src', `${options.url}`);

  button.setAttribute('onClick', `${options.func}('${options.id}')`);
  button.textContent = options.text;

  article.append(image, button);

  return article;
}

async function getRandomCats() {
  const catUrlApi = `https://api.thecatapi.com/v1/images/search?limit=4`;

  const response = await fetch(catUrlApi, {
    cache: 'no-cache',
    headers: { 'x-api-key': API_KEY },
  });
  const data = await response.json();

  const randomCatsSection = document.getElementById('random-cats');

  while (randomCatsSection.firstChild.className === 'random-cat') {
    randomCatsSection.removeChild(randomCatsSection.firstChild);
  }

  const fragment = new DocumentFragment();

  data.forEach((cat) => {
    const article = createArticle({
      id: `${cat.id}`,
      class: 'random-cat',
      url: `${cat.url}`,
      text: 'Agregar a Favoritos',
      func: 'saveCat',
    });
    fragment.append(article);
  });
  randomCatsSection.prepend(fragment);
}

async function getFavoriteCats() {
  const catUrlApi = `https://api.thecatapi.com/v1/favourites`;

  const response = await fetch(catUrlApi, { headers: {'x-api-key': API_KEY}});
  const data = await response.json();

  const randomCatsSection = document.getElementById('favorite-cats');
  
  while (randomCatsSection.lastChild.className === 'favorite-cat') {
    randomCatsSection.removeChild(randomCatsSection.lastChild);
  }
  
  const fragment = new DocumentFragment();
  data.forEach((cat) => {
    const article = createArticle({
      id: `${cat.id}`,
      class: 'favorite-cat',
      url: `${cat.image.url}`,
      text: 'Remover de Favoritos',
      func: 'removeCat',
    });
    fragment.append(article);
  });
  randomCatsSection.append(fragment);
}

const removeCat = async (favoriteID) => {
  const remove = await fetch(`https://api.thecatapi.com/v1/favourites/${favoriteID}`, {
    headers: { 'x-api-key': API_KEY },
    method: 'DELETE',
  });
  const data = await remove.json();
  if(data.message === 'SUCCESS'){
    const catPost = document.getElementById(`${favoriteID}`);
    catPost.remove();
  }
};

const saveCat = async (catID) => {
  const save = await fetch(`https://api.thecatapi.com/v1/favourites/`, {
    headers: {
      'x-api-key': API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ image_id: String(catID) }),
    method: 'POST',
  });

  const data = await save.json();
  if(data.message === 'SUCCESS'){
    const randomCatsSection = document.getElementById('favorite-cats');
    const article = createArticle({
      id: `${data.id}`,
      class: 'favorite-cat',
      url: `https://cdn2.thecatapi.com/images/${catID}.jpg`,
      text: 'Remover de Favoritos',
      func: 'removeCat',
    });
    randomCatsSection.append(article);
  }
};

btn.addEventListener('click', getRandomCats);
getRandomCats();
getFavoriteCats();