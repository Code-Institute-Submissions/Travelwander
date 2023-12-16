/* 
document.addEventListener('DOMContentLoaded', function () {
  const reserveBtn = document.getElementById('reserveBtn');
  const reservationModal = document.getElementById('reservationModal');
  const reservationForm = document.getElementById('reservationForm');
  const confirmationIcon = document.getElementById('confirmationIcon');
  const confirmationMessage = document.getElementById('confirmationMessage');
  const reservationNumberSpan = document.getElementById('res_number');

  reserveBtn.addEventListener('click', () => {
    reservationModal.style.display = 'block';
  });

  reservationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    console.log('Form submitted'); // Check if the form submission event is triggered

    // Validate and process the form data
    // For simplicity, let's generate a random reservation number
    const randomReservationNumber = Math.floor(Math.random() * (4055555 - 250000 + 1)) + 250000;
    reservationNumberSpan.innerText = `quote refrence: ${randomReservationNumber}`;
    confirmationIcon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    confirmationMessage.innerHTML = `Reservation confirmed!<br> and one of our expert will call you !`;
    

    // Optionally, you can send the form data to a server for further processing

    // Close the modal after submission
    reservationModal.style.display = 'block'; // Change 'none' to 'block'
    reservationForm.style.display = 'none';
    // Optionally, reset the form
    reservationForm.reset();
  });

  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
    reservationModal.style.display = 'none';
  });
});
 */
document.addEventListener('DOMContentLoaded', function () {
  const reserveBtn = document.getElementById('reserveBtn');
  const reservationModal = document.getElementById('reservationModal');
  const reservationForm = document.getElementById('reservationForm');
  const confirmationIcon = document.getElementById('confirmationIcon');
  const confirmationMessage = document.getElementById('confirmationMessage');
  const reservationNumberSpan = document.getElementById('res_number');

  reserveBtn.addEventListener('click', () => {
    reservationModal.style.display = 'block';
  });

  reservationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validate form fields
    const nameInput = document.getElementById('name');
    const telInput = document.getElementById('tel');
    const passengersInput = document.getElementById('passengers');

    if (!isValidName(nameInput.value)) {
      alert('Please enter a valid name.');
      return;
    }

    if (!isValidPhoneNumber(telInput.value)) {
      alert('Please enter a valid phone number.');
      return;
    }

    if (!isValidPassengerNumber(passengersInput.value)) {
      alert('Please enter a valid number of passengers.');
      return;
    }

    // Process the form data
    const randomReservationNumber = Math.floor(Math.random() * (4055555 - 250000 + 1)) + 250000;
    reservationNumberSpan.innerText = `quote refrence: ${randomReservationNumber}`;
    confirmationIcon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    confirmationMessage.innerHTML = `Reservation confirmed!<br> and one of our experts will call you!`;

    // Optionally, you can send the form data to a server for further processing

    // Close the modal after submission
    reservationModal.style.display = 'block'; // Change 'none' to 'block'
    reservationForm.style.display = 'none';
    // Optionally, reset the form
    reservationForm.reset();
  });

  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
    reservationModal.style.display = 'none';
  });

  // Helper functions for validation
  function isValidName(name) {
    return /^[a-zA-Z\s]+$/.test(name);
  }

  function isValidPhoneNumber(phoneNumber) {
    // Implement your own validation logic for phone numbers
    // Example: Check if it contains only numbers and is of a certain length
    return /^\d{10}$/.test(phoneNumber);
  }

  function isValidPassengerNumber(passengerNumber) {
    // Implement your own validation logic for the number of passengers
    // Example: Check if it's a positive integer
    return /^\d+$/.test(passengerNumber) && parseInt(passengerNumber) > 0;
  }
});

