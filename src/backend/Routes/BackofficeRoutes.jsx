import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { Dashboard } from '@mui/icons-material';

export const AllRoutes = () => {
    return (
        <Routes>
          
            <Route path='/dash' element={<Dashboard />} />
            <Route path='/signin' element={<SignIn />}></Route>
      
        </Routes>
    )
}