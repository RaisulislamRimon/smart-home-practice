import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const ProductContext = createContext();

const Root = () => {
  const products = useLoaderData();
  console.log(products);
  console.log(products.length);
  return (
    <ProductContext.Provider value={[]}>
      <Header />
      <Outlet />
      <Footer />
    </ProductContext.Provider>
  );
};

export default Root;
