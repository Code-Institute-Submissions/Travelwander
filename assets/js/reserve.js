 
 document.addEventListener('DOMContentLoaded', function () {

 
 /* reserve button */
 const reserveBtn = document.getElementById('reserveBtn');
 reserveBtn.innerText = 'Reserve Now';

 reserveBtn.addEventListener('click', () => {
   // Add logic for handling reservation, if needed

   // Display confirmation message in the modal
   const confirmationIcon =document.getElementById('confirmationIcon');
   const confirmationModal = document.getElementById('confirmationModal');
   const confirmationMessage = document.getElementById('confirmationMessage');
   const reservationNumberSpan = document.getElementById('res_number');

   /* create random number */
   const randomReservationNumber = Math.floor(Math.random() * (4055555 - 250000 + 1)) + 250000;

   confirmationIcon.innerHTML =`<i class="fa-solid fa-circle-check"></i>`;
   confirmationMessage.innerText = `Reservation confirmed!`;
   reservationNumberSpan.innerText = randomReservationNumber;
   confirmationModal.style.display = 'block';

   // Close the modal if the close button is clicked
   const closeButton = document.querySelector('.close');
   closeButton.addEventListener('click', () => {
     confirmationModal.style.display = 'none';
   });
 });

});