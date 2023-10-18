import { useState } from "react";
import React from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1918445/pexels-photo-1918445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImage(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          officiis expedita! Quae omnis, aut eveniet odit rem nesciunt iste quia
          animi incidunt doloribus asperiores totam quibusdam enim. Eaque,
          optio. Laudantium.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => (prev === 10 ? 1 : prev + 1))}
          >
            +
          </button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon />
            <span>ADD TO WISHLIST</span>
          </div>
          <div className="item">
            <BalanceIcon />
            <span>ADD TO COMPARE</span>
          </div>
        </div>
        <div className="info">
          <span>Vendor :polo</span>
          <span>Product Type:T-shirt</span>
          <span>Tag:T-shirt,Women,Top</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
