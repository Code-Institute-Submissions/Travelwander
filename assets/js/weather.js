
import { asia, europe, northAmerica } from './flags.js';


function getContinentKey() {
  /* Get the current URL */
  const url = new URL(window.location.href);

  /* Extract the continent key from the query parameters */
  const params = url.searchParams;
  const continentKey = params.get('continent');

  return continentKey;
}

continenValue = getContinentKey();

function getCountriesForContinent(continent) {
  switch (continent) {
    case 'asia':
      return asia;
    case 'europe':
      return europe;
    case 'north_america':
      return northAmerica;
    // Add more cases for other continents as needed

    default:
      console.error('Invalid continent key');
      return [];
  }
}








// Contents of script file
const apiKey = '2d32b95092f84b62eca3ae99ba8dfda8';


 /* Array of cities citis chosen base on json file  */
const countries = {
  Japan: 'Tokyo',

  Thailand: 'Phuket',
  South_Korea: 'Seoul',
  Indonesia: 'Ubud',
  France: 'Paris',
  Austria: 'Vienna',

  Greece: 'Athens',
  Spain: 'Valencia',
  USA: 'Miami',
  Jamaica: 'Kingston',
  Panama: 'Panama',
  Mexico: 'Papanoa',
};


function fetchWeather() {
  for (const country in countries) {
    
  /* for that counry in link */
    const city = countries[country];

    if (!city) {
      console.error('Invalid country key');
      return;
    }


    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const weatherInfoContainer = document.getElementById(`weather-info-${country.toLowerCase()}`);

        const htmlContent = `
          <h4>${data.name}, ${data.sys.country}</h4>
          <img class="wicon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
          <p>Temp: ${data.main.temp} &deg;C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
        weatherInfoContainer.innerHTML = htmlContent;
      })
      .catch(error => {
        console.error(`Error fetching data for ${city} (${country}):`, error);
      });
    
  }
}

// when the page loads
document.addEventListener('DOMContentLoaded', fetchWeather);

