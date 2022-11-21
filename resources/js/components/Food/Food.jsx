import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const Food = () => {


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

    return (
        <div class="container">
            <Link to="/adminPage">
                <button type=""> Admin </button>
            </Link>
            <div class="specify__menu">
                <div class="heading__menu">
                    <div class="double__line">
                    </div>
                    <p class="type__food">
                        Cơm Dĩa
                    </p>
                    <div class="double__line">
                    </div>
                </div>
                {products.length > 0 &&
                    products.map((product, key) => (
                        <div class="list__food"  key={key}>
                            <img class="food__img" src={product.photo} alt="com xiu mai"/>
                            <div class="list__food-item">
                                <div class="title__food">
                                        <p class="type__food-name">
                                            <Link to="/fooddetails">
                                                {product.name}
                                            </Link>
                                        </p>
                                    <div class="dot__line">
                                    </div>
                                    <p class="type__food-price">{product.price} &#8363;</p>
                                </div>
                                <p class="desc_food">{product.description}</p>
                            </div>
                        </div>
                    ))}

            </div>
            <div class="specify__menu">
                <div class="heading__menu">
                    <div class="double__line">
                    </div>
                    <p class="type__food">
                        Bánh Mì
                    </p>
                    <div class="double__line">
                    </div>
                </div>
                <div class="wrap__items">
                    <div class="list__food w-49">
                        <img class="food__img" src="http://at06.chonweb.vn/wp-content/uploads/2019/08/no-cook-chicken-banh-mi_1980x1320-119440-1-150x150.jpg" alt="banh mi heo quay"/>
                        <div class="list__food-item">
                            <div class="title__food">
                                <p class="type__food-name">
                                <Link to="/fooddetails">
                                    Cơm nem nướng vạn vật
                                </Link>
                            </p>
                                <div class="dot__line"></div>
                                <p class="type__food-price">69,000 &#8363;</p>
                            </div>
                            <p class="desc_food">Bánh mì kẹp thịt heo Việt Nam</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="specify__menu">
                <div class="heading__menu">
                    <div class="double__line">
                    </div>
                    <p class="type__food w-49">
                        Bún Phở (Món nước)
                    </p>
                    <div class="double__line">
                    </div>
                </div>
                <div class="wrap__items">
                    <div class="list__food w-32">
                        <img class="food__img" src="http://at06.chonweb.vn/wp-content/uploads/2019/08/no-cook-chicken-banh-mi_1980x1320-119440-1-150x150.jpg" alt="banh mi heo quay"/>
                        <div class="list__food-item">
                            <div class="title__food">
                                <p class="type__food-name">
                                <Link to="/fooddetails">
                                    Cơm nem nướng vạn vật
                                </Link>
                            </p>
                                <div class="dot__line"></div>
                                <p class="type__food-price">69,000 &#8363;</p>
                            </div>
                            <p class="desc_food">Bánh mì kẹp thịt heo Việt Nam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Food
