
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get form data
      const yourname = document.getElementById('yourname').value;
      const email = document.getElementById('email').value;
      const yournumber = document.getElementById('yournumber').value;
      const description = document.getElementById('description').value;
  
      // Create an object with form data
      const contactData = {
        yourname: yourname,
        email: email,
        yournumber: yournumber,
        description: description
      };
  
      // Store data in local storage
      localStorage.setItem("contactData", JSON.stringify(contactData));
  
      // Clear the form
      contactForm.reset();
    });
  });
  