import { useContext } from "react";

import { CartContext } from "../Layouts/MainLayout";
import Swal from "sweetalert2";



const Cart = () => {
  const { cartProducts, totalPrice, setCartProducts } = useContext(CartContext)
 
  const handleDeleteFromCart = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/cart/${id}`, {
      method: "delete"
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          const remaining = cartProducts.filter(product => product._id !== id)
          setCartProducts(remaining)
         Swal.fire({
           title: "Success",
           text: "You deleted one cart product successfully",
           icon: "success",
           confirmButtonText: "Cool",
         });
        }
      })
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-10">Your Cart</h2>

      <div className="w-3/5 mx-auto">
        <h3 className="text-2xl font-bold my-5">Total Amount to Pay : {totalPrice} lacs </h3>
        {cartProducts.map((product) => (
          <div key={product._id}>
            <p className="flex justify-between items-center mb-4">
              {" "}
              <span>{product.brand}</span> <span>{product.model}</span>{" "}
              <span>{product.price}</span>{" "}
              <button
                onClick={() => handleDeleteFromCart(product._id)}
                className="btn"
              >
                Delete
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;