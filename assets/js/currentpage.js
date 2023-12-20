document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Add the 'active' class to the corresponding menu item
    if (currentPage.includes('/deals.html')) {
      document.getElementById('deals').classList.add('active');
    } else if (currentPage.includes('/packagesall.html')) {
      document.getElementById('packages').classList.add('active');
    } else if (currentPage.includes('/contact.html')) {
      document.getElementById('contact').classList.add('active');
    } else if (currentPage.includes('/about.html')) {
      document.getElementById('about').classList.add('active');
    }
  });