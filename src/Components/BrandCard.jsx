import { Link } from "react-router-dom";


const BrandCard = ({ brand }) => {
  const {id, brandName, image} = brand
  return (
    <Link className="card card-compact w-96 bg-base-100 shadow-xl">
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