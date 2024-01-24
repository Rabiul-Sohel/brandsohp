import { useContext } from "react";

import { CartContext } from "../Layouts/MainLayout";



const Cart = () => {
  const { cartProducts } = useContext(CartContext)
 
  console.log(cartProducts);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-10">Your Cart</h2>
      <div className="w-3/5 mx-auto">
        {cartProducts.map((product) => (
          <div key={product._id}>
            <p className="flex justify-between items-center mb-4">
              {" "}
              <span>{product.brand}</span> <span>{product.model}</span>{" "}
              <span>{product.price}</span>{" "} <button className="btn">Delete</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;