import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Update() {
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            console.log(res)
        setValues({...values, name: res.data[0].Name, price: res.data[0].Price,
            description: res.data[0].Description, type: res.data[0].Type,
            image: res.data[0].Image });
    })

        .catch(err => console.log(err))
    },[])

    const [values, setValues ] = useState({
        name: '',
        price: '',
        description:  '',
        type: '',
        image: ''
    })

    const handleUpdate =(event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id, values)
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100  justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleUpdate}>
            <h2>Update food</h2>
             <div className='mb-2'>
                <label htmlFor=''>Name</label>
                <input type="text" placeholder='enter name' className='name' value={values.name}  onChange={e => setValues({...values, name: e.target.value})}/>
             </div>
             <div className='mb-2'>
                <label htmlFor=''>Price</label>
                <input type="number" placeholder='enter price ' className='price'  value={values.price}  onChange={e => setValues({...values, price: e.target.value})}/>
             </div>
             <div className='mb-2'>
                <label htmlFor=''>Description</label>
                <input type="text" placeholder='enter description' className='description' value={values.description}  onChange={e => setValues({...values, description: e.target.value})}/>
             </div>
             <div className='mb-2'>
                <label htmlFor=''>image</label>
                <input type="file" placeholder='enter image' className='image' value={values.image}  onChange={e => setValues({...values, image: e.target.value})}/>
             </div>
             <div className='mb-2'>
                <label htmlFor=''>type</label>
                <select type="text" placeholder='enter type' className='type' value={values.type} onChange={e => setValues({...values, type: e.target.value})}>
                    <option  value='1-р хоол'>1-р Хоол</option>
                    <option value='2-р хоол'>2-р Хоол</option>
                    <option value='Уух зүйлс'>Уух зүйлс</option>
                </select>
             </div>
             <button  className="btn btn-success">Upload</button>
        </form>
      
    </div>
</div>
  )
}

export default Update