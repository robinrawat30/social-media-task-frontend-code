import React from 'react';
import UserForm from '../pages/UserForm';

import { Route, Routes } from "react-router-dom";
import AdminDashboard from '../pages/AdminDashboard';
import AdminLogin from '../pages/AdminLogin';
import SingleUser from '../pages/SingleUser';

const Routers = () => {
  return (
    <>

      <Routes>

        <Route path='/' element={<UserForm />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/user/:id' element={<SingleUser />} />
        


      </Routes>

    </>
  )
}

export default Routers
