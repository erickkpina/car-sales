import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import {SignIn} from '../pages/SignIn';

export const AllRoutes = () => {
    return (
        <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />}></Route>
      
        </Routes>
    )
}
