import React from 'react';
import {Routes, Route} from "react-router-dom"

import Food from '../components/Food/Food';


const Router = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={ <Food /> } />
            </Routes>
        </div>
    )
}

export default Router
