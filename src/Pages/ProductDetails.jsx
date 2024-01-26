import { useContext} from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../Layouts/MainLayout";


const ProductDetails = () => {
  const loadedProduct = useLoaderData()
  const nevigate = useNavigate()
  const { cartProducts, setCartProducts } = useContext(CartContext)
 
  
  const {  brand, model, price, photo, description, rating } = loadedProduct;
 
  const goBack = () => {
    nevigate(`/brand/${brand}`);
  }
  const handleAddToCart = (model) => {
    const findInCart = cartProducts.find(product => product.model === model)
   console.log(findInCart);
    if (findInCart) {
       Swal.fire({
         title: "Error!",
         text: "Your product already in cart",
         icon: "error",
         confirmButtonText: "OK",
       });
     
    } else {
       fetch("http://localhost:5000/cart", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(loadedProduct),
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.insertedId) {
             const newProducts = [...cartProducts, loadedProduct]
             setCartProducts(newProducts)
             
             Swal.fire({
               title: "Success",
               text: "Your Product is added to Cart",
               icon: "success",
               confirmButtonText: "Cool",
             });
           }
         });
     
    }
  
  }
  return (
    <div>
      <button onClick={goBack} className="text-4xl font-bold mb-5 ml-20 btn">{brand}</button>
      <img className="h-[80vh] w-2/3 mx-auto my-8 rounded-lg" src={photo} alt="" />
      <div className="max-w-5xl mx-auto">
        <h3>
          <span className="text-xl font-semibold">Model:</span> {model}{" "}
        </h3>
        <div className="flex justify-between">
          <h4>Price: {price} </h4>
          <p>Rating: {rating} </p>
        </div>
        <p> {description} </p>
        
          <button onClick={()=>handleAddToCart(model)} className="btn mt-5 mx-auto">Add to cart</button>
        
      </div>
    </div>
  );
};

export default ProductDetails;