import React from "react";
import Khanbank from '../assets/products/khanbank.png'


function Qpay (){ 
    return(
        <div className="container mt-5">
            <h3 className="mb-4"> Qpay</h3>
            <img src={Khanbank} className="qpay" alt="q"/>
            

        </div>
    );
};

export default Qpay;