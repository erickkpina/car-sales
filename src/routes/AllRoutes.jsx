import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import {SignIn} from '../pages/SignIn';
import {Contacts} from '../pages/Contacts';


export const AllRoutes = () => {
    return (
        <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<SignIn />}></Route>
            <Route path='/contacts' element={<Contacts></Contacts>}></Route>
      
        </Routes>
    )
}
