const base_url = 'https://platzi-avo.vercel.app';
const selector = document.querySelector('.card-container')

const formatPrice = ( price ) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
  return newPrice;
}

const getAvo = async () => {
  const res = await fetch(`${base_url}/api/avo`);
  const result = await res.json(res);
  const avocados = result.data;

  const listAvo = [];
  
  avocados.forEach( avo => {
    const container = document.createElement('div')
    const infoContainer = document.createElement('div')
    const title = document.createElement('h3');
    const price = document.createElement('p')
    const img = document.createElement('img');
    
    container.classList.add('card')
    title.classList.add('card-title')
    price.setAttribute('class', 'card-price')

    img.src = `${base_url}/${avo.image}`
  
    title.textContent = avo.name;
    price.textContent = formatPrice(avo.price);

    infoContainer.append(title, price)
    container.append(infoContainer, img);

    listAvo.push(container);
  })

  selector.append(...listAvo);
  
}

getAvo()

