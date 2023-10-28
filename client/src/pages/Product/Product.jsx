import { useState } from "react";
import React from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
const Product = () => {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  return (
    <div className="product">
      {loading ? (
        "Loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  import.meta.env.VITE_API_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes.url
                }
                alt=""
                onClick={(e) => setSelectedImage("img")}
              />
              <img
                src={
                  import.meta.env.VITE_API_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes.url
                }
                alt=""
                onClick={(e) => setSelectedImage("img2")}
              />
            </div>
            <div className="mainImg">
              {data?.attributes && data.attributes[selectedImage] && (
                <img
                  src={
                    import.meta.env.VITE_API_UPLOAD_URL +
                    data.attributes[selectedImage].data.attributes.url
                  }
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">{data?.attributes?.price}</span>
            <p>
              {data?.attributes?.desc}
            </p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 10 ? 1 : prev + 1))
                }
              >
                +
              </button>
            </div>
            <button className="add" onClick={()=>dispatch(addToCart(
              {id:data.id,
              title:data.attributes.title,
              desc:data.attributes.desc,
              price:data.attributes.price,
              img:data.attributes.img.data.attributes.url,
              quantity
            }

            ))}>
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
        </>
      )}
    </div>
  );
};

export default Product;
