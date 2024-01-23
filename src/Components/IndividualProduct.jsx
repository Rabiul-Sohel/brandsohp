import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const IndividualProduct = ({ product, brandProducts, setBrandProducts }) => {
  const { user } = useAuth();
  const { _id, brand, model, price, description, photo, rating, category } =
    product;

  const hadndleDelete = (id) => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.deletedCount > 0) {
          // sweet alert confirmation
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              const remaining = brandProducts.filter(
                (product) => product._id !== id
              );
              setBrandProducts(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
          
        }
      });
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-64 w-full" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {model} </h2>
        <p> {description.slice(0, 100)} </p>
        <div className="flex justify-between  w-full r">
          <span>Price: {price} </span>
          <span>Rating: {rating} </span>
        </div>
        <div className="card-actions my-2 items-center justify-between">
          <Link to={`/product/${_id}`}>
            <button className="btn btn-accent">View Details</button>
          </Link>
          {user && (
            <button
              onClick={() => hadndleDelete(_id)}
              className="btn btn-warning"
            >
              Delete
            </button>
          )}
          {user && (
            <Link to={`/product/update/${_id}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;

IndividualProduct.propTypes = {
  product: PropTypes.object
}