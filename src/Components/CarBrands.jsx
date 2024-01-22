import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";


const CarBrands = () => {
  const [brands, setBrands] = useState([])
  useEffect(() => {
    fetch('car-brand.json')
      .then(res => res.json())
      .then(data => setBrands(data))
  },[])
  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold my-5">Brands</h2>
      <div className="grid grid-cols-3 gap-6">
        {brands?.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default CarBrands;