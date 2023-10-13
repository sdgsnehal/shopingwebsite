import React from 'react'
import payment from "../../../img/payment.png";
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ducimus, odit perferendis ipsa, exercitationem voluptatem similique tenetur iste blanditiis adipisci a quis modi eum ab asperiores repellendus facilis quasi error?</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non magni distinctio dolorum cupiditate adipisci mollitia id hic corporis, dolor aperiam animi esse eos suscipit ab similique accusamus deserunt cum.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Scriptedstyles</span>
          <span className="copyright">Copyright 2023. All Rights Reserved</span>
          
        </div>
        <div className="right">
          <img src={payment} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer