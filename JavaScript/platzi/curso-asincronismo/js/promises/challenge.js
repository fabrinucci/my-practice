import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (urlApi) => {
  return fetch(urlApi)
}

// fetchData(`${API}/products`)
//   .then( response => response.json() )
//   .then( products => console.log(products))
//   .catch( error => console.log(error))

fetchData(`${API}/products`)
  .then( response => response.json() )
  .then( products => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`)
  })
  .then( response => response.json() )
  .then( product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then( response => response.json())
  .then( category => {
    console.log(category);
  })
  .catch( error => console.log(error))
  .finally( console.log('Finally bitches'))

