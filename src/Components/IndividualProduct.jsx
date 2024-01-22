import PropTypes from 'prop-types'

const IndividualProduct = ({ product }) => {
  console.log(product);
  const {_id, brand, model, price, description, photo, rating, category} = product
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-64 w-full" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {model} </h2>
        <p> {description.slice(0, 100)} </p>
        <div className='flex justify-between  w-full r'>
          <span>Price: {price} </span>
          <span>Rating: {rating} </span>
        </div>
        <div className="card-actions justify-end my-2">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;

IndividualProduct.propTypes = {
  product: PropTypes.object
}