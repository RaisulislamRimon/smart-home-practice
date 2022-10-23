// const myFunc = () => fetch(`products.json`);

// export default myFunc;

import React from "react";
import { getStoredCart } from "../utils/fakeDB";

const getCartAndProductsData = async () => {
  const productsData = await fetch(`products.json`);
  const products = await productsData.json();

  const savedCart = getStoredCart();
  const initialCart = [];

  for (const id in savedCart) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      const quantity = savedCart[id];
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct);
    }
  }

  return { products, initialCart };
};

export default getCartAndProductsData;
