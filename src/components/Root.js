import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Product from "./Product";

export const ProductContext = createContext();

const Root = () => {
  const products = useLoaderData();
  return (
    <ProductContext.Provider value={products}>
      <Header />
      <Outlet />
      <Footer />
    </ProductContext.Provider>
  );
};

export default Root;
