
document.addEventListener('DOMContentLoaded', function () {
  const reserveBtn = document.getElementById('reserveBtn');
  const reservationModal = document.getElementById('reservationModal');
  const reservationForm = document.getElementById('reservationForm');
  const confirmationIcon = document.getElementById('confirmationIcon');
  const confirmationMessage = document.getElementById('confirmationMessage');
  const reservationNumberSpan = document.getElementById('res_number');

   /* Add event listener for the Reserve Now button */
  reserveBtn.addEventListener('click', () => {
    reservationModal.style.display = 'block';
  });

  
  reservationForm.addEventListener('submit', function (event) {/* listener for the form submission */
    event.preventDefault(); 

    // Clear existing error messages
    clearErrorMessages();

    
    const nameInput = document.getElementById('name');
    const telInput = document.getElementById('tel');
    const passengersInput = document.getElementById('passengers');

    
    if (!isValidName(nameInput.value)) {
      displayError(nameInput, 'Please enter a valid name.');
      return;
    }

    
    if (!isValidPhoneNumber(telInput.value)) {/* phone number check */
      displayError(telInput, 'Please enter a valid phone number.');
      return;
    }

    
    if (!isValidPassengerNumber(passengersInput.value)) { /* Validate number of passengers */
      displayError(passengersInput, 'Please enter a valid number of passengers.');
      return;
    }

     /* the form data */
    const randomReservationNumber = Math.floor(Math.random() * (4055555 - 250000 + 1)) + 250000;
    reservationNumberSpan.innerText = `quote reference: ${randomReservationNumber}`;
    confirmationIcon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    confirmationMessage.innerHTML = `Reservation confirmed!<br> One of our experts will call you!`;

    
    /* the confirmation message */
    confirmationMessage.style.display = 'block';
    reservationForm.style.display = 'none';


   
    setTimeout(() => { /* Close modal after  */
      reservationModal.style.display = 'none';
      confirmationMessage.style.display = 'none';
    }, 8000);  /* Close the modal and hide the confirmation message after 3 seconds */

    
    reservationForm.reset();/* reset the form */
  });

  // the Close button
  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
    reservationModal.style.display = 'none';
    confirmationMessage.style.display = 'none';
  });

  // Helper functions for validation
  function isValidName(name) {
    return /^[a-zA-Z\s]+$/.test(name);
  }

  function isValidPhoneNumber(phoneNumber) {
    
    // Example: Check contains only numbers and length
    return /^\d{11}$/.test(phoneNumber);
  }

  function isValidPassengerNumber(passengerNumber) {
    
    return /^\d+$/.test(passengerNumber) && parseInt(passengerNumber) > 0;/*positive integer */
  }

   /* display error messages */
  function displayError(inputElement, errorMessage) {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error-message');
    errorElement.innerText = errorMessage;

     
    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);/* Insert error message */ 

    
    document.querySelector('button[type="submit"]').disabled = true;
  }

  /* clear error messages*/
  function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());

    // Enable submit
    document.querySelector('button[type="submit"]').disabled = false;
  }
});


