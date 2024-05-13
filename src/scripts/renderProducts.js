import { fetchProducts } from "./API"
import { ProductCard } from "./ProductCard";
import { productStore } from "./Store";

export const renderProducts = async () => {

  const goodsList = document.querySelector('.goods__list');
  const updateList = () => {
    const products = productStore.getProducts();

    goodsList.innerHTML = "";

    if(!products.length) {
      const messageItems = document.createElement('li');
      messageItems.textContent = 'Товары не найдены';
      messageItems.classList.add('goods__no-product');
      goodsList.append(messageItems);
      return;
    }

    products.forEach(product => { 
      const productCard = ProductCard(product);
      goodsList.append(productCard);
    });
  }

  productStore.subscribe(updateList);
  updateList();
}