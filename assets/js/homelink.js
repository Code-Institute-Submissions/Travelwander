/* document.addEventListener('DOMContentLoaded', function () {
    const logoImage = document.getElementById('logoImage');
    const homeLink = document.getElementById('homeLink');

    logoImage.addEventListener('click', function () {
      // Trigger a click on the home link
      homeLink.click();
    });
  }); */

  document.addEventListener('DOMContentLoaded', function () {
    const logoImage = document.getElementById('logoImage');

    // Add a click event listener to the logo image
    logoImage.addEventListener('click', function () {
        // Redirect to the specified link
        window.location.href = 'https://maisam2004.github.io/Travelwander/index.html';
    });
});

