const $app = document.querySelector('#app');
const API = 'https://api.escuelajs.co/api/v1/products?offset=20&limit=10';

const main = async () => {
  const res = await fetch(API)
  const data = await res.json();
  console.log(data);

  data.map( item => {
    const article = document.createElement('article');
    const title = document.createElement('h2');
    const img = document.createElement('img');
    const price = document.createElement('strong');

    article.classList.add('Card');
    title.textContent = `${item.title}`;
    price.textContent = `Precio: $${item.price}`;
    img.setAttribute('src', item.images[0]);
    
    title.append(price)

    article.append(title, img)
    $app.append(article);
  })
}

main();