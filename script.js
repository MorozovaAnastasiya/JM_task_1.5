const button = document.querySelector('.button');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const slideContainer = document.querySelector('.slide-container');
const img = document.querySelector('.button__img');
const text = document.querySelector('.button__text');

const heightswiperWrapper = slideContainer.clientHeight;
const swiperHeight = heightswiperWrapper * 2.3;

let screen = window.matchMedia('(max-width:768px)');

if (screen.matches) {
  new Swiper('.slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
  });
} else {
  swiperWrapper.style.height = `${swiperHeight}px`;
}

button.addEventListener('click', function () {
  swiperWrapper.classList.toggle('slider-wrapper');
  if (text.textContent === 'Показать все') {
    swiperWrapper.style.height = '100%';
    text.textContent = 'Скрыть';
    img.src = 'img/hide_arrows.png';
  } else {
    swiperWrapper.style.height = `${swiperHeight}px`;
    text.textContent = 'Показать все';
    img.src = 'img/show_arrows.png';
  }
});
