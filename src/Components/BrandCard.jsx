import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const BrandCard = ({ brand }) => {
  const { brandName, image} = brand
  return (
    <Link to={`/brand/${brandName}`} className="card card-compact w-96 bg-base-100 shadow-xl hover:bg-slate-800">
      <figure>
        <img className="h-64 w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {brandName} </h2>
        
      </div>
    </Link>
  );
};

export default BrandCard;

BrandCard.propTypes = {
  brand: PropTypes.object
}
