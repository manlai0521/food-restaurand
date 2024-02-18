import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

function Read() {
    const {id} = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            console.log(res)
        setProduct(res.data[0]);
    })

        .catch(err => console.log(err))
    },[])

  return (
    <div className='d-flex vh100 bg-primary justify-content-center align-items-center'> 
        <div  className='w-50 bg-white rounded p-3'>
            <div className='p-2'>
            <h2>Food </h2>
            <h2>{product.id}</h2>
            <h2>{product.productName}</h2>
            <h2>{product.price}</h2>
            <h2>{product.productImage}</h2>
            <h2>{product.productType}</h2>
            <h2>{product.description}</h2>
         <Link to="/" className="btn btn-primary me-2" >Back</Link>
       <Link to={`/edit/${product.id}`} className='btn btn-info'>Edit</Link>
        </div>
    </div>
    </div>
  )
}

export default Read;