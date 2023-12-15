
document.addEventListener('DOMContentLoaded', function () {
  /* Get the country parameter from the URL */
  const urlParams = new URLSearchParams(window.location.search);
  const country = urlParams.get('country');

  // Fetch hotels based on the selected country
  fetch('hotels_data.json')
    .then(response => response.json())
    .then(data => {
      const hotels = getHotelsByCountry(data, country);

      // hotels in the container
      displayHotels(hotels);
      const coordinates_split = hotels[0].coordinates.split(",");
      console.log(coordinates_split);
      // the coordiantes_split
      const [latitude,longitude] = hotels.length > 0 ? coordinates_split : null;
      
      // coordinates of the first special hotel to init it
      
      initializeMap([longitude,latitude]);
    })
    .catch(error => console.error('Error fetching hotels data:', error));
});

// Function to filter hotels by country from your JSON data
function getHotelsByCountry(data, country) {
  if (!country) {
    return data;
  }
  // Your logic to filter hotels based on the country
  // Return an array of hotels
  return data.filter(hotel => hotel.country === country);
}

// Function to display hotels in the container
function displayHotels(hotels) {
  const hotelsContainer = document.getElementById('hotelsContainer');
  hotelsContainer.classList.add('special-container');

  hotels.forEach(hotel => {
    // Create elements to display hotel information
    const hotelDiv = document.createElement('div');
    hotelDiv.classList.add('special'); // Add 'special' class
    hotelDiv.setAttribute('coor', hotel.coordinates); // Add 'coor' attribute
    hotelDiv.dataset.coordinates = hotel.coordinates;

    const spNotesDiv = document.createElement('div');
    spNotesDiv.classList.add('sp_notes');

    const moreInfoButton = document.createElement('button');
    moreInfoButton.setAttribute('type', 'button');
    moreInfoButton.setAttribute('onclick', 'showHotelDetails(this)');
    moreInfoButton.textContent = 'More Info';

    const h4Adventure = document.createElement('h4');
    h4Adventure.innerHTML = `<i class="fa-solid fa-tag" style="color: #e40754;"></i> adventure <br> price : ${hotel.price}`;

    const h4Stars = document.createElement('h4');
    h4Stars.innerHTML = '<i class="fa-solid fa-star" style="color: #fbe709;"></i>'.repeat(hotel.rating);

    const h3HotelName = document.createElement('h3');
    h3HotelName.textContent = hotel.name;

    const pLocation = document.createElement('p');
/*     pLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i>${hotel.location}<br> Flight + hotel <br> ${hotel.details.join('<br>')} <br>`;
 */    pLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i>${hotel.location}<br> Flight + hotel <br> ${hotel.details[0]} <br>`;

    /* Append elements to the spNotesDiv */
    spNotesDiv.appendChild(moreInfoButton);
    spNotesDiv.appendChild(h4Adventure);
    spNotesDiv.appendChild(h4Stars);
    spNotesDiv.appendChild(h3HotelName);
    spNotesDiv.appendChild(pLocation);

    const spImgDiv = document.createElement('div');
    spImgDiv.classList.add('sp_img');

    const imgHotel = document.createElement('img');
    imgHotel.src = hotel.imageSrc[0];
    imgHotel.alt = `${hotel.name} image`;

     /* elements to the hotelDiv */
    hotelDiv.appendChild(spNotesDiv);
    hotelDiv.appendChild(spImgDiv);
    spImgDiv.appendChild(imgHotel);

    // Append the hotelDiv to the hotelsContainer
    hotelsContainer.appendChild(hotelDiv);
  });
}


/* Map initialization function */
function initializeMap(centerCoordinates) {
  mapboxgl.accessToken = 'pk.eyJ1IjoibWFpc2FtMjAwNCIsImEiOiJjbHBsZTJrYTcwM3lmMnFsbjJlMHRnbmFxIn0.9jRwEDR0xab-xftbdq7t7Q';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', //  map style
    center: centerCoordinates || [-82.25306449222539, 9.40445610762273], // Set the center to the coordinates of the first special hotel or a default value
    zoom: 11 // set zoom level
  });

  document.querySelectorAll('.special').forEach(function (special) {
    const latitude = parseFloat(special.dataset.coordinates.split(',')[0]);
    const longitude = parseFloat(special.dataset.coordinates.split(',')[1]);

    // Create a marker
    const marker = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);

    // Create a popup
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setText(special.querySelector('h3').textContent) // Set the popup text to the h3 content
      .setMaxWidth('300px'); // Optional: Set max width of the popup

    // Add the popup to the marker
    marker.setPopup(popup);

    // Optional: Add event listener for showing the popup on marker click
    marker.getElement().addEventListener('click', function () {
      marker.togglePopup();
    });
  });
}


