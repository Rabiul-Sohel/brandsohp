import CarBrands from "../Components/CarBrands";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Shared/Footer";


const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <CarBrands></CarBrands>
      <Footer></Footer>
    </div>
  );
};

export default Home;