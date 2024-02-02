

const Carousel = () => {
  return (
    <div className=" relative mt-6 flex justify-center items-center"> 
      <div className=" z-10 absolute text-center mx-auto">
        <h2 className="text-7xl font-bold  bg-logo-gradient bg-clip-text text-transparent ">
          RNS Automative
        </h2>
        <p className="text-white text-3xl font-semibold">
          Your trusted house for dremed car
        </p>
      </div>
      <div className="carousel w-full h-screen">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Z2cWbc2/ryan-spencer-c-NEi-PIxp-YI-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/35bcxv8/paul-kansonkho-9xj-HQvd-Mi4c-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/74qnxfM/r-nolan-1-Zh-Zp-P91ol-Q-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/bQYXM9V/arteum-ro-x-Nl-Xqktxcl-Q-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;