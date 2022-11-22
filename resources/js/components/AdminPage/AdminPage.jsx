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

    const editProduct = (id) => {
        navigate("/product/edit/" + id)
      }

    const getProducts = async () => {
        const res = await axios.get("/api/get_all_product")
        .then(({data}) => {
            console.log('data', data.food);

            setProducts(data.food);
        })
    }

    const deleteProduct = async(id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You can't reverse this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get(`/api/delete_product/${id}`)
                    .then(() => {
                        Swal.fire(
                            "Deleted!",
                            "Product successfully deleted",
                            "success"
                        );
                        getProducts();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        });
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
                        <img src={`/upload/${product.photo}`} height="40px" width="50px"/>
                        <p>{product.name}</p>
                        <p>{product.type}</p>
                        <p>{product.ingredient}</p>
                        <div>
                            <button className="btn-icon success" onClick={() => editProduct(product.id)}>
                                <AiOutlineEdit/>
                            </button>
                            <button className="btn-icon danger">
                                <AiOutlineDelete onClick={() => deleteProduct(product.id)}/>
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
