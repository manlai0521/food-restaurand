import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Хоолны цэс</Link>
        <Link to="/login">Нэвтрэх</Link>
        <Link to="/choose">Хэрэглэгч</Link>
        <Link to="/feedback">санал хүсэлт</Link>
        <Link to="/cart">   
        <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};