import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";


export const Adminb = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/login">Нэвтрэх</Link>
        <Link to="/choose">Songolt</Link>
        <Link to="/form">Хоол нэмэх</Link>
        <Link to="/piechart">Анализ</Link>
        <Link to="/cart1">   
        <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};