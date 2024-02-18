
import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import { PRODUCTS } from "../../products";
import { Link } from "react-router-dom";



function product12() {
    const [data, setData] = useState(PRODUCTS);
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])

  
  return (
    <div>
        <div >
            <h2>Хоол</h2>
            <div>
                <Link to="/create" className="btn btn-success">Нэмэх + </Link>
            </div>
 <div className="product">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Хоолны нэр</th>
                        <th>Үнэ</th>
                        <th>Хоолны орц</th>
                        <th>Зураг</th>
                        <th>Хоолны төрөл</th>
                        <th>Үйлдэл</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((product, index) => {
                    return <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.productName}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.productImage}</td>
                        <td>{product.productType}</td> 
                         <td>
                         </td>
                         </tr>
                })}
                </tbody>
            </div>
        </div>
    </div>





    //   <button className="addToCartBttn" onClick={() => addToCart(id)}>
    //   Захиалах {cartItemCount > 0 && <> ({cartItemCount})</>}
    //   </button>
    
    
  )
}

export default product12