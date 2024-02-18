import React from 'react'
import { useNavigate } from 'react-router-dom'





function choose() {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={() => navigate('/adminb')}>Admin</button>
        <button>Users</button>
    </div>
  )
}

export default choose;