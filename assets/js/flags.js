const asia = ['Japan', 'Thailand', 'South_Korea', 'Indonesia'];
const europe = ['France', 'Austria', 'Greece', 'Spain'];
const north_america = ['USA', 'Jamaica', 'Panama', 'Mexico'];

function createFlagContainer(country) {
    const flagContainer = document.createElement('div'); //create div
    flagContainer.className = `${country.toLowerCase()} mid_flag`; //add class name
    flagContainer.style.background = `url(/assets/images/flags/${country}.png)`; //set bg for flag container
    flagContainer.style.backgroundSize = 'cover';//set the size 
  
    /*add link */
    const link = document.createElement('a');
  link.href = `packagesall.html?country=${country}`;

  const latestContainer = document.createElement('div');
  latestContainer.className = 'latest'; // add latest div

  const weatherInfo = document.createElement('div'); /* div with id for show weather */
  weatherInfo.id = `weather-info-${country.toLowerCase()}`;

  const packagesCost = document.createElement('h5'); //add cost of a package 
  packagesCost.innerHTML = `Packages cost:<br> from $699.98`;

  latestContainer.appendChild(weatherInfo);

  latestContainer.appendChild(document.createElement('br'));

  latestContainer.appendChild(packagesCost);

  link.appendChild(latestContainer);

  flagContainer.appendChild(link);

  const flagsContainer = document.getElementById('mainContainer');/* container where you want to display the flag containers */

  

  
    return flagContainer;
  }

  function getContinentKey() {
    /* Get the current URL */
    const url = new URL(window.location.href);
  
    /* Extract the continent key from the query parameters */
    const params = url.searchParams;
    const continentKey = params.get('continent');
  
    return continentKey;
  }


  const flagsContainer = document.getElementById('mainContainer')

  const continentKey = getContinentKey(); //  previous response url

  let continentArray;
  switch (continentKey) {
    case 'asia':
      continentArray = asia;
      break;
    case 'europe':
      continentArray = europe;
      break;
    case 'north_america':
      continentArray = north_america;
      break;

    default:
        console.error('Invalid continent key');
    }
  

    continentArray.forEach(country => {
        const flagContainer = createFlagContainer(country);
        flagsContainer.appendChild(flagContainer);
      });

  /*
  crate something like this smaple
  
  <div class="jamaica mid_flag">
          <a href="packages.html?country=Jamaica">
              <div class="latest">
                  <div id="weather-info-jamaica"></div><br>
                  <h5>Packages cost:<br> from $699.98</h6>
              </div>
          </a>
      </div> 
      */