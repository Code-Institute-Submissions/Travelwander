
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

