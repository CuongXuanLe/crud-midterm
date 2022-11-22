import axios from 'axios';
import { set } from 'lodash';
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom"

const EditProduct =() => {

    const navigate = useNavigate()

    const {id} = useParams()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [photo, setPhoto] = useState(null)
    const [type, setType] = useState("")
    const [price, setPrice] = useState("")
    const [ingredient, setIngredient] = useState("")
    const [avatar, setAvatar] = useState(true)

    useEffect(() => {
        getProduct()
    },[])

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
        } else {
            let reader = new FileReader()
            reader.onload = e => {
                setAvatar(false)
                setPhoto(e.target.result)
            }
            reader.readAsDataURL(file)
        }

    }

    const getProduct = async () => {
        await axios.get(`/api/get_edit_product/${id}`)
        .then(({data}) =>{
            // console.log(data)
            const { name, description, photo, type, price, ingredient } = data.food
            setName(name)
            setDescription(description)
            setPhoto(photo)
            setType(type)
            setPrice(price)
            setIngredient(ingredient)
        })
        .catch(({response:{data}})=>{

        })
    }

    const ourImage = (img) => {
        return "/upload/" + img
    }


    const updateProduct = async(e) => {
        e.preventDefault()

        const formData = {
            "name" : name,
            "description" : description,
            "photo" : photo,
            "type": type,
            "ingredient" : ingredient,
            "price" : price
        }

        console.log(formData);

        await axios.post(`/api/update_product/${id}`, formData)
        .then((data)=>{
            toast.fire({
                icon:"success",
                title: "Product update successfully"
            })
            navigate("/")
        })
        .catch ((error) => {

        })
    }


    return(
        <div className="Admin__container">
            <div className="product__edit">
                <div className="title__bar">
                <div className="title__bar-item">
                    <h1>Edit Product</h1>
                </div>
                <div className="title__bar-item">
                    <button className="btn" onClick={(event)=>updateProduct(event)}>save</button>
                </div>
                </div>
                <div className="card__wrapper">
                    <div className="wrapper__left">
                        <div className="card">
                            <p>Name</p>
                            <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}}/>
                            <p>Description</p>
                            <textarea cols="10" rows="5" value={description} onChange={(event)=>{setDescription(event.target.value)}}></textarea>

                            <div className="media">
                                <ul className="images__list">
                                    <li className="image__item">
                                        <div className="image__item-img">
                                            {avatar === true
                                                ?<img src={ourImage(photo)} width="117px" height="100px" alt=""/>
                                                :<img src={photo} width="117px" height="100px" alt=""/>
                                            }
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
                        <button className="btn" onClick={(event)=>updateProduct(event)}>save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditProduct
