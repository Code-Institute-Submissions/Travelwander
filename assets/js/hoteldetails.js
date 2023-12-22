document.addEventListener('DOMContentLoaded', function () {
  const all_icons = [
    "fas fa-hotel",
    "fas fa-bed",
    "fas fa-suitcase",
    "fas fa-briefcase",
    "fas fa-swimmer",
    "fas fa-sun",
    "fas fa-beach-ball",
    "fas fa-cocktail",
    "fas fa-palm-tree",
    "fas fa-umbrella-beach",
    "fas fa-ship",
    "fas fa-plane",
    "fas fa-train",
    "fas fa-car",
    "fas fa-bicycle",
    "fas fa-hiking",
    "fas fa-camera",
    "fas fa-utensils",
    "fas fa-coffee",
    "fas fa-ice-cream",
    "fa-solid fa-sleigh",
    "fa-solid fa-champagne-glasses",
    "fa-solid fa-plane-arrival",
    "fa-solid fa-suitcase-rolling",
    "fa-solid fa-table-tennis-paddle-ball",
    "fa-solid fa-place-of-worship"

  ]

  const selectedHotelIndex = sessionStorage.getItem('selectedHotelIndex'); /* Retrieve index from session storage */
  let first_coord =[]
  if (selectedHotelIndex !== null) {

    fetch('hotels_data.json') /* Fetch and parse the JSON data */
      .then(response => response.json())
      .then(data => {
        /*  selected hotel data */
        const selectedHotel = data[selectedHotelIndex];
        //document.getElementsByClassName('big_img').innerHTML=`<img src="${selectedHotel.imageSrc[0]}"`
        document.getElementById('big_img').innerHTML = `<img alt="${selectedHotel.imageSrc[0]}" class="bigger" id="mainImg" src="${selectedHotel.imageSrc[0]}">`;
         document.getElementById('small_img').innerHTML = `<img alt="${selectedHotel.imageSrc[1]}" class="smaller"  id="notMainImg" src="${selectedHotel.imageSrc[1]}"><p class="price_tag">${selectedHotel.price}<span>per person</span></p>`; 


         document.getElementById('hotelName').innerText = selectedHotel.name; /*Update HTML elements */

        document.getElementById('hotelRating').innerText = `Rating: ${selectedHotel.rating}`;

        document.getElementById('hotelLocation').innerText = `Location: ${selectedHotel.location}, ${selectedHotel.country}`;
        
        document.getElementById('hotelDescription').innerText = selectedHotel.description; 
        //document.getElementById('hotelDetails').innerText = `${selectedHotel.details.join('')}`;

        document.getElementById('hotelDetails').innerHTML = `${selectedHotel.details.join('<br>')}`;
        /* but for icons we use try to get hotel Icons id */
        const iconsContainer = document.getElementById('hotelIcons');
        selectedHotel.details.forEach(detail => {
          const icon = document.createElement('span');
          const randomIcon = all_icons[Math.floor(Math.random() * all_icons.length)];
          icon.className = randomIcon;
          iconsContainer.appendChild(icon);
        });
        /* price */
        /* document.getElementById('hotelPrice').innerText = `Price: ${selectedHotel.price}`; */
        //document.getElementById('hotelPrice2').innerText = `Price: ${selectedHotel.price}
        /* reserve button */
        firstcoord=selectedHotel.coordinates.split(',')

        const [longitude, latitude] = firstcoord;
        console.log(firstcoord);
        initializeMap([latitude,longitude]);

      })
      .catch(error => console.error('Error fetching data:', error));
  } else {
    console.error('No hotel selected.');
  }
/* */

function initializeMap(coordinates) {
  mapboxgl.accessToken ='pk.eyJ1IjoibWFpc2FtMjAwNCIsImEiOiJjbHFmODUyNjUwczViMmpvNnhlcW4zdnVrIn0.LzVDk1jlIltB2nH6Py8l'; 

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: coordinates,
    zoom: 15,
  });

  // Add a marker
  new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
}
 

   
});