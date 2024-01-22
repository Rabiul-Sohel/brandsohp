import PropTypes from 'prop-types'

const IndividualProduct = ({ product }) => {
  console.log(product);
  const {_id, brand, model, price, description, photo, rating, category} = product
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {model} </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;

IndividualProduct.propTypes = {
  product: PropTypes.object
}