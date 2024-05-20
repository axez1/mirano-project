import { renderCart } from "./renderCart";
import { cartStore } from "./Store";

const headerCartBtn = document.querySelector('.header__cart-button');
const cartBtn = document.querySelector('.cart__close');
const cartSection = document.querySelector('.cart');
const cartPriceTotal = document.querySelector('.cart__price_total');

const toggleCart = () => {
  
  cartSection.classList.toggle('cart_hidden');

  if(cartSection.classList.contains('cart_hidden') && window.innerWidth > 1360) {
    cartSection.scrollIntoView({behavior: 'smooth'});
  }
}

export const initCart = async () => {
  await cartStore.init();

  headerCartBtn.textContent = cartStore.getCart().length;

  headerCartBtn.addEventListener('click', toggleCart);

  renderCart();

  cartStore.subscribe(() => {
    const cart = cartStore.getCart();
    headerCartBtn.textContent = cart.length;

    const totalPriceValue = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

    cartPriceTotal.innerHTML = `${totalPriceValue}&nbsp;₽`;
  })

  cartBtn.addEventListener('click', () => {
    cartSection.classList.remove('cart_hidden');
  });
}