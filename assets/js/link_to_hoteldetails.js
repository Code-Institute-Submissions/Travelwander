   
   
   /*link for hotel deatils  pages generate by click button fetch local json data  */
    function showHotelDetails(button) {
        const specialDiv = button.closest('.special');

        if (specialDiv) {
            const hotelName = specialDiv.querySelector('h3').innerText;
            
            // Fetch and parse the JSON data
            fetch('hotels_data.json')
                .then(response => response.json())
                .then(data => {
                    /* Find specified name*/
                    const selectedHotel = data.find(hotel => hotel.name === hotelName);

                    if (selectedHotel) {
                        /*  hotel index in session storage */
                        sessionStorage.setItem('selectedHotelIndex', data.indexOf(selectedHotel));

                        
                        window.location.href = 'hotel_details.html'; /* Redirect  */
                    } else {
                        console.error(`Hotel with name '${hotelName}' not found in the data.`);
                    }
                })
                .catch(error => console.error('Error fetching data:', error));
        } else {
            console.error('Unable to determine the hotel name.');
        }
    }
