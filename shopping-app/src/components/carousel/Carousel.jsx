import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductImagesForCarousel } from "../../redux/productSlice";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { productImagesForCarousel, status, error } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();


  useEffect(() => {
    if (status.productImagesForCarousel === "idle") {
      dispatch(fetchProductImagesForCarousel());
    }
  }, [status, dispatch]);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % productImagesForCarousel.length
    );
  };

   if (status.productImagesForCarousel === "loading")
     return <p>Loading categories...</p>;
   if (status.productImagesForCarousel === "failed")
     return <p>Error: {error}</p>;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productImagesForCarousel.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Items */}
      <div
        className="flex transition-transform duration-500 mx-4"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {productImagesForCarousel.map((category, index) => (
          <div
            key={index}
            className="min-w-[250px] h-64 bg-gray-100 overflow-hidden shadow-lg cursor-pointer"
            >
            <img src={category} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full hover:bg-gray-700">
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full hover:bg-gray-700">
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
