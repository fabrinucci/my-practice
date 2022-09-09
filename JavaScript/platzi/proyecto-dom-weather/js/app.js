import { API_URL, API_KEY} from './secrets.js';

const citySelector = document.querySelector('#city-container')

const createCard = (options) => {
  const cityCard = document.createElement('div');
  const cityInfo = document.createElement('div');
  const cityName = document.createElement('h3');
  const cityTemp = document.createElement('p');
  const cityDescription = document.createElement('p');
  const cityFeelsLike = document.createElement('p');
  const cityHumidity = document.createElement('p');

  cityCard.classList.add('city-card');
  cityName.classList.add('city-name');
  cityTemp.classList.add('city-temperature');
  cityDescription.classList.add('city-description');
  cityInfo.classList.add('info-temperature');

  cityName.textContent = options.name;
  cityTemp.textContent = `${options.temp}°C`;
  cityDescription.textContent = options.description;  
  cityFeelsLike.textContent = `Feels like: ${options.feels_like}°C`;
  cityHumidity.textContent = `Humidity: ${options.humidity}%`;  

  cityInfo.append(cityFeelsLike, cityHumidity)
  cityCard.append(cityName, cityTemp, cityInfo, cityDescription)
  return cityCard;  
}

const getCity = async () => {
  const res = await fetch(`${API_URL}?q=paris&units=metric&appid=${API_KEY}`)
  const data = await res.json();
  console.log(data);

  const fragment = new DocumentFragment;
    const newCard = createCard({
      name: data.name,
      temp: data.main.temp,
      description: data.weather[0].description,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
    })
    fragment.append(newCard);
  citySelector.append(fragment);

}

getCity();
















// const getLocation = async () => {
//   const res = await fetch(`${API_URL}?q=madrid&appid=${API_KEY}`)
//   const data = await res.json();
//   console.log(data);

//   const fragment = new DocumentFragment;
//   data.map( city => {
//     const newCard = createCard({
//       name: city.name,
//       temp: city.main.temp,
//       description: city.weather[0].description,
//     })
//     fragment.append(newCard);
//   })
//   citySelector.append(fragment);

// }
