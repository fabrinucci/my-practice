const API_URL = `https://api.thecatapi.com/v1/images/search`;

const queryParams = [
  '?',
  'limit=3',
  '&api_key=66b3728e-94c3-4db0-8d56-c256b911a0dd'
].join('');

const randomCats = async () => {
  const response = await fetch(`${API_URL}${queryParams}`);
  const data = await response.json();

  const img1 = document.querySelector('#img1');
  img1.src = data[0].url
  const img2 = document.querySelector('#img2');
  img2.src = data[1].url
  const img3 = document.querySelector('#img3');
  img3.src = data[2].url
}

randomCats();