import { useLoaderData } from "react-router-dom";
import Product from "../Components/Product";


const Products = () => {
  const products = useLoaderData()
  const toyotas = products.filter(product => product.brand === 'Toyota')
  const tatas = products.filter(product => product.brand === 'Tata')
  console.log(products);
  return (
    <div className="my-10">
      <div>
        <h2 className="my-6">Toyota: {toyotas.length} </h2>
        <div className="grid grid-cols-3 gap-5 mx-auto">
          {toyotas.map((toyota) => (
            <Product key={toyota._id}>{toyota}</Product>
          ))}
        </div>
      </div>
      <div>
        <h2 className="my-6">Tata: {tatas.length} </h2>
        <div className="grid grid-cols-3 gap-5">
          {tatas.map((tata) => (
            <Product key={tata._id}>{tata}</Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;