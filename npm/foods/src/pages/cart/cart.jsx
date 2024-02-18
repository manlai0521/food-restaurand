import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
// import { PRODUCTS1 } from "../../products1";


import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Таны захиалга</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })} 
      </div>

    
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Нийт төлбөр: {totalAmount} </p>
          <button onClick={() => navigate("/")}> Нэмэлт захиалга </button>
          <button onClick={() => navigate("/option")}>Захиалга баталгаажуулах </button>
        </div>
      ) : (
        <h1> Захиалга хоосон байна</h1>
      )}
    </div>
  );
};