
//mini slide at index landing part


  document.addEventListener('DOMContentLoaded', function () {
    const usSlides = document.querySelectorAll('.namerica');
    const euSlides = document.querySelectorAll('.europe');
    const asiaSlides = document.querySelectorAll('.asia');

    function createSlideshow(slide, images) {
      let currentIndex = 0;
      let slideshowInterval = setInterval(showImage, 5000); 

      function showImage() {
        slide.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
      }

      // Pause 
      slide.addEventListener('mouseover', () => clearInterval(slideshowInterval));

      // Resume 
      slide.addEventListener('mouseout', () => {
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(showImage, 5000);
      });
    }

    usSlides.forEach(slide => {
      const images = [
        'assets/images/miami1.jpg', 'assets/images/miami2.jpg', 'assets/images/miami3.jpg'
      ];
      createSlideshow(slide, images);
    });

    euSlides.forEach(slide => {
      const images = [
        'assets/images/eu1.jpg', 'assets/images/eu2.jpg', 'assets/images/eu3.jpg'
      ];
      createSlideshow(slide, images);
    });

    asiaSlides.forEach(slide => {
      const images = [
        'assets/images/asia1.jpg', 'assets/images/asia2.jpg', 'assets/images/asia3.jpg'
      ];
      createSlideshow(slide, images);
    }); 
});

