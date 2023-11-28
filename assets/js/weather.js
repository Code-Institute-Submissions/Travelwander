// Contents of script file
const apiKey = '2d32b95092f84b62eca3ae99ba8dfda8';


// Array of cities
const cities = ['London', 'New York', 'Tokyo', 'Sydney'];

// Fetch weather each city
cities.forEach(city => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  // Fetch weather data from the API
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Handle the data for each city here
      console.log(`Weather in ${city}:`, data);
      // You can access specific weather information from the 'data' object

      const weatherInfoContainerUSA = document.getElementById('weather-info-usa');
    const weatherInfoContainerJamaica = document.getElementById('weather-info-jamaica');
        const weatherInfoContainerPanama = document.getElementById('weather-info-panama');
    const weatherInfoContainerMexico = document.getElementById('weather-info-mexico');


        // Create HTML content with weather information
        const htmlContent = `
          <h4>${data.name}, ${data.sys.country}</h4>
          <p>Temperature: ${data.main.temp} &deg;C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;

        // Update the content of the weather info container
        weatherInfoContainer.innerHTML = htmlContent;

      // display the temperature in the #weather-info div
      //document.getElementById('weather-info').innerHTML += `<p>${city}: ${data.main.temp} K</p>`;
    })
    .catch(error => {
      console.error(`Error fetching data for ${city}:`, error);
    });
});
