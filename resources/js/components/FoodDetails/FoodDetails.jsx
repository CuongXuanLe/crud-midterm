import React from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";

const FoodDetails = () => {
    return (
        <div className="container">
            <div className="food__details">
                <img src="http://at06.chonweb.vn/wp-content/uploads/2019/08/xaxieu.jpg" alt=""/>
                <div className="content__details">
                    <p class="Details__food-name">
                        Cơm nem nướng vạn vật
                    </p>
                    <p class="details__desc">Bánh mì kẹp thịt heo Việt Nam</p>
                    <p className="Details__food-name" >Thành Phần</p>
                    <ul>
                        <li className="ingredient">
                            <div className="ingredient__desc">
                                <AiOutlineCheckCircle/>
                                lmao
                            </div>
                            <hr className="dotted__line"/>
                        </li>
                        <li className="ingredient">
                            <div className="ingredient__desc">
                                <AiOutlineCheckCircle/>
                                lmao
                            </div>
                            <hr className="dotted__line"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FoodDetails
