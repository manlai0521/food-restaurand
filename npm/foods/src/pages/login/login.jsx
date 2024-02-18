import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Validation from  './loginvalidation';

export const Login = () => {
  const [ values, setValues] =useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
       
  const handleInput = (event) => {
   setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  }

//   useEffect(() => {
//     axios.get('http://localhost:8081')
//     .then( res => {
//       if(res.data.valid){
//         navigate('/');
//       } else {
//         navigate('/login')
//       }
//     })
//     .catch(err => console.log(err))
//   }, [])

return(
  <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className='bg-white p-3 rounded w-25'> 
    <h2>Нэвтрэх</h2>
      <form action=""  onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='email'><strong>Имэйл</strong></label>
          <input type="email" placeholder='Имэйл хаяг оруулах' name='email'
         onChange={handleInput}
        className='form-control rounded-0'  />
        
{errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Нууц үг</label>
            <input type='password' placeholder='Нууц үг оруулах' name='password'
                         onChange={handleInput}    className='form-control rounded-0' />
           {errors.password && <span className='text-danger'>{errors.password}</span>}
  
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'> Нэвтрэх </button>
          
          <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> Шинэ хаяг үүсгэх </Link>
      </form>
    </div>
  </div>
)   
};

