import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss"
const Cart = () => {
  const data = [
    {
      id: 1,
      title: "Product 1",
      img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/18488525/pexels-photo-18488525/free-photo-of-brunette-woman-in-dress-holding-sunglasses-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldprice: 50.0,
      price: 39.99,
      desc:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      isNew: true,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">1x ${item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">reset</span>
      
    </div>
  );
};

export default Cart;
