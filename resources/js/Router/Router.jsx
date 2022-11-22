import React from 'react';
import {Routes, Route} from "react-router-dom"

import Food from '../components/Food/Food';
import FoodDetails from '../components/FoodDetails/FoodDetails';
import AdminPage from '../components/AdminPage/AdminPage';
import NewProduct from '../components/AdminPage/AddNew';
import EditProduct from '../components/editPro/EditProduct';

const Router = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={ <Food /> } />
                <Route path="/foodDetails" element={ <FoodDetails /> } />
                <Route path="/adminPage" element={ <AdminPage /> } />
                <Route path="/product/new" element={ <NewProduct/>} />
                <Route path="/product/edit/:id" element={<EditProduct/>} />
            </Routes>
        </div>
    )
}

export default Router

// <Route path="/food" element={ <Food /> } />
// <Route path="/foodDetails" element={ <FoodDetails /> } />
