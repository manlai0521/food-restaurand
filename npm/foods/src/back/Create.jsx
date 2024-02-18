import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../products';
import './form.css'

function Create() {
     const [values, setValues ] = useState({
        name: '',
        price: '',
        description: '',
        type: '',
        image:''
    })
    const navigate = useNavigate();
    const handleSubmit =(e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/food', values)
        .then(res =>{
             console.log(res);
             navigate('/')        
    })
    .catch(err => console.log(err))
}



  return (
    <div className='form'>
        <div className='container'>
            <form className='form-control' onSubmit={handleSubmit}>
                <h2>Hool nemeh</h2>
        
                    <label htmlFor=''>Name</label>
                    <input type="text" placeholder='enter name' className='name' onChange={e => setValues({...values, name: e.target.value})}/>
              
         
                    <label htmlFor=''>Price</label>
                    <input type="number" placeholder='enter price ' className='price' onChange={e => setValues({...values, price: e.target.value})}/>
            
             
                    <label htmlFor=''>Description</label>
                    <input type="text" placeholder='enter description' className='description' onChange={e => setValues({...values, description: e.target.value})}/>
               
  
                    <label htmlFor=''>image</label>
                    <input type="file" placeholder='enter image' className='image' onChange={e => setValues({...values, image: e.target.value})}/>
             

                    <label htmlFor=''>type</label>
                    <select type="text" placeholder='enter type' className='type' onChange={e => setValues({...values, type: e.target.value})}>
                        <option  value='1-р хоол'>1-р Хоол</option>
                        <option value='2-р хоол'>2-р Хоол</option>
                        <option value='Уух зүйлс'>Уух зүйлс</option>
                    </select>
     
              
                 <button  className="btn btn-primary">Upload</button>
            </form>
          
        </div>
    </div>
  )
}

export default Create;