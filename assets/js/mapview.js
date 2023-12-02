
    // Get the main content , map view 
    const mainContent = document.getElementById('mainContent');
    const mapContainer = document.getElementById('mapContainer');
    const mapView = document.getElementById('mapview');
    function toggleView() {
      // Toggle visibility 
      const specialElements = document.querySelectorAll('.special');
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

