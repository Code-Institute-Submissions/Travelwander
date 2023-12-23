
  document.addEventListener('DOMContentLoaded', function () {
   
    const photoSection = document.querySelector('.photos');

    /*Add a click event  */
    photoSection.addEventListener('click', function (event) {
        /*is the smaller image */
        if (event.target.matches('.smaller')) {
            // Replace the source of the bigger image with the smaller image
            const biggerImg = document.getElementById('mainImg');
            const smallerImg = document.getElementById('notMainImg');
            const tempSrc = biggerImg.src;
            const tempAlt = biggerImg.alt;
            biggerImg.src = smallerImg.src;
            biggerImg.alt = smallerImg.alt;
            smallerImg.src = tempSrc;
            smallerImg.alt = tempAlt;
        }
    });
});