import React from 'react'
import axios from 'axios';


function Admin() {
    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
        .then(res => {
            window.location.reload();
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
        <ul className='nav justify-content-center'>
            <li className='nav-item'>
                <a className='nav-link' aria-current="page" href="#">Home</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href="#">Contact</a>
            </li>
            <li className='nav-item'>
                <button onClick={handleLogout}
                className='nav-link outline-0 border-0 bg-transparent text-primary'
                href="#">Logout  </button>
            </li>
        </ul>

<div className='container'>
        <h2>welcome to admin page</h2>
        </div>
     
    </div>
  )
}

export default Admin