// let currentIndex = 0;
// const images = document.querySelectorAll('.slider-image');
// const totalImages = images.length;

// function startSlider() {
//   setInterval(() => {
//     const previousIndex = currentIndex;
//     currentIndex = (currentIndex + 1) % totalImages;

//     images[previousIndex].classList.remove('active');
//     images[currentIndex].classList.add('active');
//     images[previousIndex].classList.add('previous');
//     images[currentIndex].classList.remove('previous');
//     images[currentIndex].classList.add('next');
//     setTimeout(() => {
//       images[previousIndex].classList.remove('previous');
//       images[currentIndex].classList.remove('next');
//     }, 500);
//   }, 2000); // Cambiar el intervalo de tiempo según sea necesario
// }

// startSlider();


let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;

function startSlider() {
   images[currentIndex].classList.add('active'); // Agregar clase 'active' a la primera imagen inmediatamente

  setInterval(() => {
    const previousIndex = currentIndex;
    currentIndex = (currentIndex + 1) % totalImages;

    images[previousIndex].classList.remove('active');
    images[currentIndex].classList.add('active');
  }, 5000); // Cambiar el intervalo de tiempo según sea necesario
}

startSlider();
