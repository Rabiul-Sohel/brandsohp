import { useLoaderData, useNavigate } from "react-router-dom";


const ProductDetails = () => {
  const product = useLoaderData()
  const nevigate = useNavigate()
  const { _id, brand, model, price, photo, description, rating } = product;
  const goBack = () => {
    nevigate(`/brand/${brand}`);
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
        <div className="flex justify-end">
          <button className="btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;