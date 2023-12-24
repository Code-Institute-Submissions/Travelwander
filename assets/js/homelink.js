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
    const homeLink = document.getElementById('homeLink');

    // Prepend "Travelwander/" to the existing href
    homeLink.href = "Travelwander/" + homeLink.href;

    // Add a click event listener to the logo image
    logoImage.addEventListener('click', function () {
        // Trigger a click on the modified home link
        homeLink.click();
    });
});
