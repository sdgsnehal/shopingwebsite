import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProduct.scss";
import axios from "axios";
const apiKey = import.meta.env.VITE_API_BASE_URL;
const token = import.meta.env.VITE_API_TOKEN_SALT;

const FeaturedProduct = ({ type }) => {
  const data = [
    {
      id: 1,
      title: "Product 1",
      img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/18488525/pexels-photo-18488525/free-photo-of-brunette-woman-in-dress-holding-sunglasses-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldprice: 50.0,
      price: 39.99,
      isNew: true,
    },
    {
      id: 2,
      title: "Product 2",
      img: "https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/18488530/pexels-photo-18488530/free-photo-of-a-woman-standing-on-steps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldprice: 60.0,
      price: 49.99,
      isNew: true,
    },
    {
      id: 3,
      title: "Product 3",
      img: "https://images.pexels.com/photos/1918445/pexels-photo-1918445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/18544229/pexels-photo-18544229/free-photo-of-woman-with-wet-hair-in-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldprice: 45.0,
      price: 34.99,
    },
    {
      id: 4,
      title: "Product 4",
      img: "https://images.pexels.com/photos/18533456/pexels-photo-18533456/free-photo-of-portrait-of-a-young-chinese-woman-in-a-traditional-dress.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/18533460/pexels-photo-18533460/free-photo-of-young-chinese-woman-with-a-fan-in-her-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldprice: 45.0,
      price: 34.99,
    },
  ];
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await axios.get(
          import.meta.env.VITE_API_BASE_URL + "/products",
          {
            headers: {
              Authorization: "Bearer " + import.meta.env.VITE_API_TOKEN_SALT,
            },
          }
        );
        console.log(data);
      } catch (err) {
        console.log(err);
        
      }
    };
    fetchdata();
  }, []);
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
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
