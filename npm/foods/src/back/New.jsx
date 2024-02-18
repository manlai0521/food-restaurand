import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";


export const New = () =>{
 
    return (
   
            <div className="navbar">
              <div className="links">
                <Link to="/"> Хоолны цэс</Link>
                <Link to="/login">Нэвтрэх</Link>
                <Link to="/form">Хоол нэмэх</Link>
                <Link to ="/piechart">Turshilt</Link>
                <Link to="/cart">   
                <ShoppingCart size={32} />
                </Link>
              </div>
            </div>
          );
        };
export default New;
