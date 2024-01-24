import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Components/Shared/Header";
import { createContext, useState } from "react";

export const  CartContext = createContext(null)
const MainLayout = () => {
  const loadedCartProducts = useLoaderData()
  const [cartProducts, setCartProducts] = useState(loadedCartProducts);
  const cartInfo = {
    cartProducts, setCartProducts
  }
  return (
    <CartContext.Provider value={cartInfo}>
      <div className="max-w-7xl mt-5 mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </CartContext.Provider>
  );
};

export default MainLayout;