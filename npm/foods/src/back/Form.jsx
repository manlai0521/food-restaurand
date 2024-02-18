import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import { PRODUCTS } from "../products";
import { Link } from "react-router-dom";



function Form() {
    const [data, setData] = useState(PRODUCTS);
    useEffect(() => {
        axios.get('http://localhost:8081')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])

    function handleDelete(id) {
        axios.delete('http://localhost:8081/delete/'+id)
            .then(res => {
                location.reload();
            })
            .catch(err => console(err));
    }
  return (
    <div className="d-flex vh-100 bg-white">
        <div >
            <h2 className="column text-align-center">Хоол</h2>
            <div>
                <Link to="/create" className="btn btn-success">Нэмэх + </Link>
            </div>
            <table className="table">
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
                            <Link  to={`/read/${product.id}`} className="btn btn-sm btn-info">Харах</Link>
                            <Link to={`/edit/${product.id}`}className="btn btn-sm btn-primary mx-2">Засах</Link>
                            <button onClick={ () => handleDelete(product.id)} className="btn btn-sm btn-danger">Устгах</button>
                         </td>
                         </tr>
                })},
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Form;