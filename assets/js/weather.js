
import { asia, europe, northAmerica } from './flags.js';

// Contents of script file
const apiKey = '2d32b95092f84b62eca3ae99ba8dfd';


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

function getContinentKey() {
  /* Get the current URL */
  const url = new URL(window.location.href);

  /* Extract the continent key from the query parameters */
  const params = url.searchParams;
  const continentKey = params.get('continent');

  return continentKey;
}

const continenValue = getContinentKey();

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
const countriesInContinent = getCountriesForContinent(continenValue);


const countriesForWeather = countriesInContinent.reduce((acc, country) => {
  acc[country] = countries[country];
  return acc;
}, {});

console.log(countriesForWeather);



function fetchWeather() {
  for (const country in countriesForWeather) {
    
  /* for that counry in link */
    const city = countriesForWeather[country];

    

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
        const temperature = (data.main.temp).toString().slice(0,2);
        
        const htmlContent = `
          <h4>${data.name}, ${data.sys.country}</h4>
          <img class="wicon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
          <p>Temp: ${temperature} &deg;C</p>
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

