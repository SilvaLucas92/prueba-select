import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import SelectCharacter from '../pages/Select';
const Router = () => {
  return (
    <Routes>
        <Route  path='/' element={ <Home /> }/>
        <Route path='/select' element={ <SelectCharacter /> } />
        <Route path='/select/table' element/>
    </Routes> 
  )
}

export default Router