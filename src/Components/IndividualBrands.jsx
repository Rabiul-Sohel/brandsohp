import { useLoaderData, useParams } from "react-router-dom";

import IndividualProduct from "./IndividualProduct";


const IndividualBrands = () => {
  const brandProducts = useLoaderData()
  const {brand} = useParams()
  
  
  return (
    <div>
      {brandProducts.length === 0 ? (
        <div className="flex min-h-[70vh] justify-center items-center ">
          <div>
            <h2 className="text-center text-3xl font-extrabold">Ooppss....</h2>
            <h4>There is no Product in this brand</h4>
          </div>
        </div>
      ) : (
        <div>
          {/* carousel */}
          <div className="carousel w-full h-screen py-10">
            {brandProducts.slice(0, 3).map((product, idx) => (
              <div
                key={product.id}
                id={`slide${idx}`}
                className="carousel-item relative w-full"
              >
                <img src={product.photo} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={`#slide${idx === 0 ? brandProducts.length : idx - 1}`}
                    className="btn btn-circle"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${idx === 2 ? 0 : idx + 1}`}
                    className="btn btn-circle"
                  >
                    ❯
                  </a>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-3xl font-bold mb-10">
            {" "}
            {brand} : {brandProducts.length}{" "}
          </h2>
          <div className="grid grid-cols-3 gap-5">
            {brandProducts.map((product) => (
              <IndividualProduct
                product={product}
                key={product._id}
              ></IndividualProduct>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualBrands;