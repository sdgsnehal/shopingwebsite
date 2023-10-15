import React from "react";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProduct type="featured"/>
      <FeaturedProduct type="trending"/>
    </div>
  );
};

export default Home;
