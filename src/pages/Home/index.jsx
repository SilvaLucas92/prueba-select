import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='container'>
        <h1>Welcome</h1>
        <Link to='/select'>Enter</Link>
    </div>
  )
}

export default Home