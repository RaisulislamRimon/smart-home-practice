import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const ProductContext = createContext();

const Root = () => {
  return (
    <ProductContext.Provider value={[]}>
      <Header />
      <Outlet />
      <Footer />
    </ProductContext.Provider>
  );
};

export default Root;
