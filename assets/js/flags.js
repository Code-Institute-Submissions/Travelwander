const asia = ['Japan', 'Thailand', 'South Korea', 'Indonesia'];
const europe = ['France', 'Austria', 'Greece', 'Spain'];
const North_america = ['USA', 'Jamaica', 'Panama', 'Mexico'];

function createFlagContainer(country) {
    const flagContainer = document.createElement('div'); //create div
    flagContainer.className = `${country.toLowerCase()} mid_flag`; //add class name
    flagContainer.style.background = `url(/assets/images/flags/${country}.png)`; //set bg for flag container
    flagContainer.style.backgroundSize = 'cover';//set the size 
  
    /*add link */
    const link = document.createElement('a');
  link.href = `packages.html?country=${country}`;

  const weatherInfo = document.createElement('div'); /* div with id for show weather */
  weatherInfo.id = `weather-info-${country.toLowerCase()}`;

  
    return flagContainer;
  }