import React from "react";
import Card from "../Card/Card";
import "./FeaturedProduct.scss";

import useFetch from "../../hooks/useFetch";
const apiKey = import.meta.env.VITE_API_BASE_URL;
const token = import.meta.env.VITE_API_TOKEN_SALT;

const FeaturedProduct = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          architecto nesciunt excepturi inventore culpa? Voluptate architecto,
          autem nihil ipsum repellat deleniti eius dolorum exercitationem
          numquam error totam obcaecati deserunt porro?
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "Loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProduct;
