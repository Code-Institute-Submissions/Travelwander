/* 
  document.addEventListener('DOMContentLoaded', function () {
    // Check if data exists in localStorage
    const storedContactData = localStorage.getItem("contactData");

    if (storedContactData) {
      // Data exists in localStorage
      const contactData = JSON.parse(storedContactData);

      // Populate form fields with stored data
      document.getElementById('yourname').value = contactData.yourname;
      document.getElementById('email').value = contactData.email;
      document.getElementById('yournumber').value = contactData.yournumber;
      document.getElementById('description').value = contactData.description;
    }

    // Add event listener for form submission
    document.getElementById('contactForm').addEventListener('submit', function (event) {
      event.preventDefault();

      // Get form data
      const yourname = document.getElementById('yourname').value;
      const email = document.getElementById('email').value;
      const yournumber = document.getElementById('yournumber').value;
      const description = document.getElementById('description').value;

      // Store data in localStorage
      const contactData = {
        yourname,
        email,
        yournumber,
        description
      };
      localStorage.setItem("contactData", JSON.stringify(contactData));

      // Optionally, you can display a confirmation message or perform other actions
      alert('Form submitted successfully!');
    });
  });
 */
/*   document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Get form input values
      const yourname = document.getElementById('yourname').value;
      const email = document.getElementById('email').value;
      const yournumber = document.getElementById('yournumber').value;
      const description = document.getElementById('description').value;

      // Create an object with the form data
      const contactData = {
        email: email,
        yournumber: yournumber,
        description: description
      };

      // Store the form data in localStorage
      localStorage.setItem("contactData", JSON.stringify(contactData));

      // Redirect to the page that displays the stored data
      //window.location.href = "displaycontactfromdata.html";
      window.alert("we have recieved your message?");
      document.getElementById('yourname').value = ''
      document.getElementById('email').value ='';
      document.getElementById('yournumber').value = '';
      document.getElementById('description').value = '';
    
    });
  }); */
  // Add this code to your contact form submission logic
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
  