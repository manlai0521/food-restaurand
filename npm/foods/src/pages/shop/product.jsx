import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import './product.css';

export const Product = (props) => {

 

  

  const { id, productName, productType, price,  description, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage}/>
      <p>
          <b>{productName}</b>
        </p>
      <div className="description">
        <p> Үнэ:{price}</p>
        <p> Төрөл: {productType}</p>
        <p> Орц: {description}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
      Захиалах {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};