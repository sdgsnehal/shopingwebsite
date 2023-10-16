import React from "react";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import Category from "../../components/Category/Category";
import Contact from "../../components/Contact/Contact";
const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProduct type="featured"/>
      <Category/>
      <FeaturedProduct type="trending"/>
      <Contact/>
    </div>
  );
};

export default Home;
