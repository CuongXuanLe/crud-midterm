import React from 'react';
import {Routes, Route} from "react-router-dom"

import Food from '../components/Food/Food';
import FoodDetails from '../components/FoodDetails/FoodDetails';
import AdminPage from '../components/AdminPage/AdminPage';
import NewProduct from '../components/AdminPage/AddNew';

const Router = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={ <AdminPage /> } />
                <Route path="/product/new" element={ <NewProduct/>} />
            </Routes>
        </div>
    )
}

export default Router
// <Route path="/" element={ <Food /> } />
// <Route path="/fooddetails" element={ <FoodDetails /> } />
