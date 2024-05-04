import '@/scss/index.scss';

const header = document.querySelector('.header');
const body = document.body;
let headerHeight = header.offsetHeight;

window.addEventListener('resize', function() {
  headerHeight.header.offsetHeight;
});

window.addEventListener('scroll', function() {
  const scrollDistance = window.scrollY;
  if(scrollDistance > 200) {
    header.classList.add('header_fixed');
    body.style.paddingTop = `${headerHeight}px`;
  } else {
    header.classList.remove('header_fixed');
    body.style.paddingTop = '0';
  }

});

const adjustElementPosition = (elem, count = 0) => {
  const rect = elem.getBoundingClientRect();
  const viewPortWidth = window.innerWidth;

  if(rect.left < 0) {
    elem.style.left = '0';
    elem.style.right = 'auto';
    elem.style.transform = 'translateX(0)';
  } else if(rect.right > viewPortWidth) {
    elem.style.left = 'auto';
    elem.style.right = '0';
    elem.style.transform = 'translateX(0)';
  } else {
    elem.style.left = '50%';
    elem.style.right = 'auto';
    elem.style.transform = 'translateX(-50%)';
  }

  const postRect = elem.getBoundingClientRect();

  if((postRect.left < 0 || postRect.right > viewPortWidth) && count < 3 ) {
    count++;
    adjustElementPosition(elem, count);
  }

};
const choices = document.querySelectorAll('.choices');

choices.forEach((choice) => {
  const btn = choice.querySelector('.choices__btn');
  const box = choice.querySelector('.choices__box');
  
  btn.addEventListener('click', function() {
      if(document.querySelector('.choices__box.choices__box_open')) {
        document.querySelector('.choices__box.choices__box_open').classList.remove('choices__box_open');
      }
      box.classList.toggle('choices__box_open');
      adjustElementPosition(box);
  })
  
  window.addEventListener('resize', function() {
    adjustElementPosition(box);
  });
}) 

const headerCartBtn = document.querySelector('.header__cart-button');
const cartBtn = document.querySelector('.cart__close');
const cartSection = document.querySelector('.cart');

headerCartBtn.onclick = () => {
  cartSection.classList.toggle('cart_hidden');
};

cartBtn.addEventListener('click', function() {
  cartSection.classList.remove('cart_hidden');
});

//choices__box
//choices__btn