import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import CreditCardUi from "./CreditCardUi";
function Card (){ 
    return(
        <div className="container mt-5">
            <h3 className="mb-4"> Кредит карт</h3>
            <CreditCardUi />
        </div>
    );
};

export default Card;