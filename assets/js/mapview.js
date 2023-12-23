
    const mainContent = document.getElementById('mainContent');
    const mapContainer = document.getElementById('map');
    const mapView = document.getElementById('mapview');
    const windowWidth = window.innerWidth;
    
    // Initial state based on window width
    if (windowWidth < 900) {
      mapContainer.style.display = 'none';
    } else {
      mapContainer.style.display = 'block';
    }
    
    // Get the main content, map view
    function toggleView() {
      // Toggle visibility
      const specialElements = document.querySelectorAll('.special-container');
      specialElements.forEach(element => {
        element.style.display = element.style.display === 'none' ? 'flex' : 'none';
      });
    
      // Show/hide the map
      mapContainer.style.display = mapContainer.style.display === 'none' ? 'block' : 'none';
    
      // Map view text depends on mapContainer display
      mapView.innerHTML = mapContainer.style.display === 'none' ? 'Map View <br> <i class="fa-solid fa-map-location-dot"></i>' : 'List View <br> <i class="fa-solid fa-list"></i>';
    }
    
    mapView.addEventListener('click', toggleView);
    