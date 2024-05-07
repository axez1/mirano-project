export const initCart = () => {
  const headerCartBtn = document.querySelector('.header__cart-button');
  const cartBtn = document.querySelector('.cart__close');
  const cartSection = document.querySelector('.cart');

  const toggleCart = () => {
    cartSection.classList.toggle('cart_hidden');

    if(cartSection.classList.contains('cart_hidden') && window.innerWidth > 1360) {
      cartSection.scrollIntoView({behavior: 'smooth'});
    }
  }

  headerCartBtn.addEventListener('click', toggleCart);

  cartBtn.addEventListener('click', () => {
  cartSection.classList.remove('cart_hidden');
});
}