import { useLoaderData, useParams } from "react-router-dom";

import IndividualProduct from "./IndividualProduct";


const IndividualBrands = () => {
  const brandProducts = useLoaderData()
  const {brand} = useParams()
  
  
  return (
    <div>
      <h2 className="text-3xl font-bold my-10"> {brand} : {brandProducts.length} </h2>
      <div className="grid grid-cols-3">
        {
          brandProducts.map(product => <IndividualProduct product={product} key={product._id}></IndividualProduct>)
        }
      </div>
    </div>
  );
};

export default IndividualBrands;