const btn = document.querySelector('button');
const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = '66b3728e-94c3-4db0-8d56-c256b911a0dd';

const randomCatsSection = document.querySelector('#random-cats');
const favoriteCatsSection = document.querySelector('#favorite-cats');

const createArticle = options => {
  const article = document.createElement('article');
  const img = document.createElement('img');
  const btn = document.createElement('button');

  article.setAttribute('id', `${ options.id }`);
  article.setAttribute('class', `${ options.class }`);
  img.setAttribute('src', `${ options.src }`);
  btn.setAttribute('onclick', `${ options.func }`);
  btn.textContent = options.text;

  article.append(img, btn);

  return article;
}

const getRandomCats = async () => {
  const res = await fetch(`${API_URL}/images/search?limit=4`);
  const data = await res.json();

  while(randomCatsSection.firstChild.className === 'random-cat') {
    randomCatsSection.removeChild(randomCatsSection.firstChild)
  }

  const fragment = new DocumentFragment;
  data.map( cat => {
    const article = createArticle({
      id: `${ cat.id }`,
      class: 'random-cat',
      func: 'saveFavorite',
      src: `${ cat.url }`,
      text: 'Add to favorite',
    })
    fragment.appendChild(article);
  })
  randomCatsSection.prepend(fragment);
}

const getFavoriteCats = async () => {
  const res = await fetch(`${API_URL}/favourites`, {
    headers: { 'x-api-key' : API_KEY },
  });
  const data = await res.json();
  console.log(data);

//   while (randomCatsSection.lastChild.className === 'favorite-cat') {
//     randomCatsSection.removeChild(randomCatsSection.lastChild);
//   }

//   const fragment = new DocumentFragment;

//   data.map( cat => {
//     const article = createArticle({
//       id: `${ cat.id }`,
//       class: 'favorite-cat',
//       func: 'removeCat',
//       src: `${ cat.url }`,
//       text: 'Remove from favorites',
//     })
//     fragment.appendChild(article);
//   })
//   favoriteCatsSection.append(fragment);

}


btn.addEventListener('click', getRandomCats);

getRandomCats();
getFavoriteCats();