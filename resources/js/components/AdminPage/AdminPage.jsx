import React, { useEffect, useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminPage = () => {

    const navigate = useNavigate()

    const newProduct = () => {
        navigate("/product/new")
    }

    const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts()
    },[1])

    const getProducts = async () => {
        const res = await axios.get("/api/get_all_product")
        .then(({data}) => {
            console.log('data', data.food);

            setProducts(data.food);
        })
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

                    {products.length > 0 &&
                        products.map((product, key) => (

                    <div className="list__items" key={key}>
                        <img src={product.photo} height="40px" width="50px"/>
                        <p>{product.name}</p>
                        <p>{product.type}</p>
                        <p>{product.ingredient}</p>
                        <div>
                            <button className="btn-icon success">
                                <AiOutlineEdit/>
                            </button>
                            <button className="btn-icon danger">
                                <AiOutlineDelete/>
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminPage
