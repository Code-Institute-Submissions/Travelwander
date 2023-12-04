//mbox
mapboxgl.accessToken = 'token.';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11', //  map style
  center: [-82.25306449222539, 9.40445610762273], // center
  zoom: 11 // set zoom level
});

document.querySelectorAll('.special').forEach(function (special) {
  const [latitude, longitude] = special.getAttribute('coor').split(',').map(Number);

  // Create a marker
  var marker = new mapboxgl.Marker()
    .setLngLat([longitude, latitude])
    .addTo(map);

  // Create a popup
  var popup = new mapboxgl.Popup({ offset: 25 })
    .setText(special.querySelector('h3').textContent) // Set the popup text to the h3 content
    .setMaxWidth('300px'); // Optional: Set max width of the popup

  // Add the popup to the marker
  marker.setPopup(popup);

  // Optional: Add event listener for showing the popup on marker click
  marker.getElement().addEventListener('click', function () {
    marker.togglePopup();
  });
});