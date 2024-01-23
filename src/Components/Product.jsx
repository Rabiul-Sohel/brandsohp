import { Link } from "react-router-dom";


const Product = ({ children }) => {
  console.log(children);
  
  const {_id, photo, model, brand, price, description} = children
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img className="h-[200px] w-full" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2> {brand} </h2>
        <h2 className="card-title">Model: {model} </h2>
        <p> {description.slice(0, 100)} </p>
        <p> Price: {price} </p>
        <div className="card-actions justify-end">
          <Link to={`/product/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;