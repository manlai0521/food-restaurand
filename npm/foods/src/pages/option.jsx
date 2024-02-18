import React from 'react'
import { useNavigate } from "react-router-dom";


export const Option =() => {
    const navigate = useNavigate();
  return (
    <div className="container mt-5">
                 <h3 className="mb-4">Төлбөрийн төрлөө сонгоно уу ?</h3>
                 <div className="checkout">
        <button onClick={() => navigate("/qpay")}>Qpay</button>
        <button onClick={() => navigate("/card")}>Карт</button>
        </div>
    </div>
  );
};

