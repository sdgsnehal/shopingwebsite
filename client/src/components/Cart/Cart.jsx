import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./Cart.scss";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makerequest";
import {loadStripe} from '@stripe/stripe-js';
const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products?.map((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };
  const stripePromise = loadStripe('pk_test_51O6HBMSGkgArUzJzDzAcKH1MI5t2gQUaTkZX449b1hJnoD5Jgmffn4SsDXdABOghNhCh71jp3XahfpKTFLLeZXXM00QepOPbbe');
  const handlePayment = async() => {
    try{
     const stripe = await stripePromise;
     console.log(products)
     const res = await makeRequest.post("/orders",{
      products
     })
     await stripe.redirectToCheckout({
      sessionId:res.data.stripeSession.id,
     })
    }catch(e){
      console.log(e)
    }
  }
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={import.meta.env.VITE_API_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              ${item.quantity}x ${item.price}
            </div>
          </div>
          <DeleteOutlineIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>${totalPrice()} </span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        reset
      </span>
    </div>
  );
};

export default Cart;
