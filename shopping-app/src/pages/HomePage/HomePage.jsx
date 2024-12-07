import React from "react";
import ProductCategories from "../../components/product categories/ProductCategories";
import Carousel from "../../components/carousel/Carousel";
import HomePageBody from "../../components/body of homepage/HomePageBody";

const HomePage = () => {
  return (
    <div className="mt-16 mx-4">
      <div className="my-1">
        <ProductCategories />
      </div>
      <div className="mt-3">
        <Carousel />
      </div>

      <div className="my-1">
        <HomePageBody title="Trending of Laptops" category="laptops" />
      </div>
      <div className="my-1">
        <HomePageBody title="Style it with these" category="sunglasses" />
      </div>

      <div className="my-1">
        <HomePageBody title="Winter is coming" category="mens-shirts" />
      </div>
      <div className="my-1">
        <HomePageBody
          title="Make your home Beautiful"
          category="home-decoration"
        />

        <div className="my-1">
          <HomePageBody title="Trending Bags" category="womens-bags" />
        </div>
        <div className="my-1">
          <HomePageBody title="Vroom!! Vroom!!" category="motorcycle" />
        </div>
        <div className="my-1">
          <HomePageBody title="Groceries" category="groceries" />
        </div>
        <div className="my-1">
          <HomePageBody title="Tops" category="tops" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
