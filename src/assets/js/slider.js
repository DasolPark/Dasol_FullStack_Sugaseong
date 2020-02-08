import Swiper from 'swiper';

const mySwiper = new Swiper('.swiper-container', {
  loop: true,

  autoplay: {
    delay: 3000
  },

  fadeEffect: {
    crossFade: true
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  }
});

const imageWidth = 1920;
const imageHeight = 350;
const collectionID = 493892; // Warm Toned Mediterranean(106 photos)

fetch(
  `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/`
)
  .then(response => {
    const slides = document.querySelectorAll('.swiper-slide');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style = `background-image: url('${response.url}');`;
    }
  })
  .catch(err => {
    console.log(err);
    console.log(mySwiper);
  });
