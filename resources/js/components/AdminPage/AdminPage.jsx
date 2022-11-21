import React, {useEffect} from 'react';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {

    const navigate = useNavigate()

    const newProduct = () => {
        navigate("/product/new")
    }

    return(
        <div className="Admin__container">
            <div className="products__list">
                <div className="title__bar">
                    <div className="title__bar-item">
                        <h1>Products</h1>
                    </div>
                    <div className="title__bar-item">
                        <div className="btn" onClick={() => newProduct()}>
                            Add product
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className="list__header">
                        <p>Image</p>
                        <p>Product</p>
                        <p>Type</p>
                        <p>Ingredient</p>
                        <p>Actions</p>
                    </div>
                    <div className="list__items">
                        <img src="" height="40px" width="40px"/>
                        <a href="/">Product Name</a>
                        <p>Category</p>
                        <p>50</p>
                        <div>
                            <button className="btn-icon success">
                                <AiOutlineEdit/>
                            </button>
                            <button className="btn-icon danger">
                                <AiOutlineDelete/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage
