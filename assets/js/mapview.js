/* const mainContent = document.getElementById('mainContent');
const mapContainer = document.getElementById('map');
const mapView = document.getElementById('mapview');
const windowWidth = window.innerWidth;

if (windowWidth < 900) {
  mapContainer.style.display = 'none';
  console.log(window.innerWidth);
} else {
  mapContainer.style.display = 'block';
  //mapContainer.style.setProperty('display', 'block', 'important');

}

    
    
    // Get the main content , map view 

    function toggleView() {
      // Toggle visibility 
      const specialElements = document.querySelectorAll('.special-container');
      specialElements.forEach(element => {
        element.style.display = element.style.display === 'none' ? 'flex' : 'none';
        
      });

      // Show/hide the map
      //mainContent.style.display = mainContent.style.display === 'none' ? 'block' : 'none';

      mapContainer.style.display = mapContainer.style.display === 'none' ? 'block' : 'none';


      //  mapView text depends on mapContainer display 
      mapView.textContent = mapContainer.style.display === 'none' ? 'Map View' : 'List View';


    }
    mapView.addEventListener('click', toggleView);

 */
const mapContainer = document.getElementById('map');
const mapView = document.getElementById('mapview');
const windowWidth = window.innerWidth;

function updateMapDisplay() {
  if (windowWidth < 900) {
    mapContainer.style.display = 'none';
  } else {
    mapContainer.style.display = 'block';
  }
}

// Initial update
updateMapDisplay();

// Update on window resize
window.addEventListener('resize', () => {
  windowWidth = window.innerWidth;
  updateMapDisplay();
});

// Toggle view function
function toggleView() {
  const specialElements = document.querySelectorAll('.special-container');
  specialElements.forEach(element => {
    element.style.display = element.style.display === 'none' ? 'flex' : 'none';
  });

  updateMapDisplay(); // Update map display based on window width

  mapView.textContent = mapContainer.style.display === 'none' ? 'Map View' : 'List View';
}

mapView.addEventListener('click', toggleView);
