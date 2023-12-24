document.addEventListener('DOMContentLoaded', function () {
    const logoImage = document.getElementById('logoImage');
    const homeLink = document.getElementById('homeLink');

    logoImage.addEventListener('click', function () {
      // Trigger a click on the home link
      homeLink = 'Travelwander/'+homeLink;
      homeLink.click();
    });
  });