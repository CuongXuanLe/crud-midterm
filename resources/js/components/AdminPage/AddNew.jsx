import axios from 'axios';
import React, {useState} from 'react';
import { Swal } from 'sweetalert2/dist/sweetalert2';
import {useNavigate} from "react-router-dom"

const New = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [photo, setPhoto] = useState(null)
    const [type, setType] = useState("")
    const [price, setPrice] = useState("")
    const [ingredient, setIngredient] = useState("")

    const changeHandler = (e) => {
        let file = e.target.files[0]
        let reader = new FileReader()
        let limit = 1024* 1024 * 2
        if (file['size'] > limit) {
            Swal.fire({
                type:'error',
                title: 'Oops!....',
                text: 'something went wrong',
                footer: 'why do i have this issue ?'
            })
        }
        reader.onloadend = (file) => {
            setPhoto(reader.result)
        }
        reader.readAsDataURL(file)
    }

    const createProduct = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append('name', name)
        formData.append('description', description)
        formData.append('photo', photo)
        formData.append('type', type)
        formData.append('ingredient', ingredient)
        formData.append('price', price)

        await axios.post("/api/add_product", formData)
        .then(({data}) => {
            toast.fire({
                icon:"success",
                title: "Product add successfully"
            })
            navigate("/")
        })
        .catch(({response})=> {
            console.log(response);
        })
    }

    return (
        <div className="Admin__container">
            <div className="products__create">
                <div className="title__bar">
                    <div className="title__bar-item">
                        <h1>Add Product</h1>
                    </div>
                    <div className="title__bar-item">
                        <button className="btn" onClick={(event) => createProduct(event)}>save</button>
                    </div>
                </div>
                <div className="card__wrapper">
                    <div className="wrapper__left">
                        <div className="card">
                            <p>Name</p>
                            <input type="text" value={name} onChange={(event) => {setName(event.target.value)}}/>
                            <p>Description</p>
                            <textarea cols="10" rows="5" value={description} onChange={(event) => {setDescription(event.target.value)}}></textarea>

                            <div className="media">
                                <ul className="images__list">
                                    <li className="image__item">
                                        <div className="image__item-img">
                                            <img src={photo} width="117px" height="100px" alt=""/>
                                        </div>
                                    </li>
                                    <li className="image__item">
                                        <form className="image__item-form">
                                            <label className="image__item-form--label">
                                                Add Image
                                            </label>
                                            <input type="file" className="image__item-form--input" onChange={changeHandler}/>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper__right">
                        <div className="card">
                            <p>Product Type</p>
                            <input type="text" value={type} onChange={(event)=>{setType(event.target.value)}}/>
                            <hr className="hr" />
                            <p>Inventory</p>
                            <input type="text" value={ingredient} onChange={(event)=>{setIngredient(event.target.value)}}/>
                            <hr className="hr" />
                            <p>Price</p>
                            <input type="text" value={price} onChange={(event)=>{setPrice(event.target.value)}}/>
                            <div className="br">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="title__bar">
                    <div className="title__bar-item">
                        <button className="btn" onClick={(event) => createProduct(event)}>save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New
