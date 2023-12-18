
document.addEventListener('DOMContentLoaded', function () {
    const usSlides = document.querySelectorAll('.namerica');
    const euSlides = document.querySelectorAll('.europe');
    const asiaSlides = document.querySelectorAll('.asia');

    function createSlideshow(slide, images) {
      let currentIndex = 0;

      function showImage() {
        slide.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
      }

      const slideshowInterval = setInterval(showImage, 3000); // Change the interval as needed

      // Pause the slideshow on hover
      slide.addEventListener('mouseover', () => clearInterval(slideshowInterval));

      // Resume the slideshow on mouseout
      slide.addEventListener('mouseout', () => {
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(showImage, 3000);
      });
    }

    usSlides.forEach(slide => {
      const images = [
        '/assets/images/miami1.jpg', '/assets/images/miami2.jpg', '/assets/images/miami3.jpg'
      ];
      createSlideshow(slide, images);
    });

    euSlides.forEach(slide => {
      const images = [
        '/assets/images/eu1.jpg', '/assets/images/eu2.jpg', '/assets/images/eu3.jpg'
      ];
      createSlideshow(slide, images);
    });

    asiaSlides.forEach(slide => {
      const images = [
        '/assets/images/asia1.jpg', '/assets/images/asia2.jpg', '/assets/images/asia3.jpg'
      ];
      createSlideshow(slide, images);
    });
  });