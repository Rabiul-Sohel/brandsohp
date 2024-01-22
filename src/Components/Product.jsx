

const Product = ({ children }) => {
  
  const {photo, model, brand, price, description} = children
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2> {brand} </h2>
        <h2 className="card-title">Model: {model} </h2>
        <p> {description.slice(0,100)} </p>
        <p> Price:  {price} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;