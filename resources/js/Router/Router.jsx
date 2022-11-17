import React from 'react';
import {Routes, Route} from "react-router-dom"

import Food from '../components/Food/Food';
import FoodDetails from '../components/FoodDetails/FoodDetails';


const Router = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={ <Food /> } />
                <Route path="/fooddetails" element={ <FoodDetails /> } />
            </Routes>
        </div>
    )
}

export default Router
