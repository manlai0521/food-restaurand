import  { useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import axios from "axios";


import "./shop.css";
import { useNavigate } from "react-router-dom";

function Shop() {

const [user, setUser] = useState(PRODUCTS);
useEffect(() => {
  axios.get('http://localhost:8081')
  .then(res=> setUser(res.data))
  .catch(err => console.log(err));
},[])
const  [data, setData ] = useState([]);
const [collection, setCollection ] = useState([]);

useEffect(()=>{
   setData(PRODUCTS);
  setCollection([... new Set(PRODUCTS.map((product) => product.productType))])
}, [])


const products_filter = (productData) => {
  const filterData = PRODUCTS.filter((product)=> product.productType == productData);
  setData(filterData);

}
  return (



    <div className="shop">
      <div className="shopTitle">
      <div className="bttns">
  
        <ul>
          <li><button onClick={()=> setData(PRODUCTS)}>Бүгд</button></li>
          {
            collection.map((product)=> <li><button onClick={()=>{products_filter(product)}}>{product}</button></li>)
          }
      </ul>
   
      <div className="products">
      {
            data.map((product) =><div className="cart"> 
            <Product data={product}/>
           </div> )
      }
     <div className="product">

      <div>
        <h2 className="column text-align">Shine hool</h2>
     <div className="description">

              {user.map((product, index) => {
                return <tr key={index}>
                  <img src={product.productImage} />
                  <p>Нэр:<td> {product.productName}</td></p>
                  <p>Үнэ:<td>{product.price}</td></p>
                  <p>Орц:<td>{product.description}</td></p>
                  <p>Төрөл:<td>{product.productType}</td></p>
                </tr>
              })}
              </div>    
      </div>
     </div>
        
      </div>
      </div>
      </div>
      </div>
      
  );
};
export default Shop;