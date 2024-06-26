import '@/scss/index.scss';
import {initHeaderFixer} from '@/scripts/headerFixer';
import { initChoices } from './scripts/choices';
import { initCart } from './scripts/cart';
import { renderProducts } from './scripts/renderProducts';
import { fetchProducts } from './scripts/API';
import { initChoicesType } from './scripts/choicesType';
import { filterProducts } from './scripts/filterProducts';
import { initSearchProducts } from './scripts/searchProducts';
import { initOrder } from './scripts/orderController';


const init = () => {
  initHeaderFixer();
  initChoices();
  initChoicesType();
  initCart();
  //fetchProducts({type: 'bouquets'}); //{type: 'toys'} **toys**postcards**bouquets**
  renderProducts();
  filterProducts();
  initSearchProducts();
  initOrder();
}

init();
//document.addEventListener('DOMContentLoaded', init);