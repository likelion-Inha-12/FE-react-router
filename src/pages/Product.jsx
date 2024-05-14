import React from "react";
import {useParams} from 'react-router-dom';

const data = {
    "맘스터치": {
        title: "싸이버거 세트",
        price: "6,900원"
    },
    "맥도날드": {
        title: "빅맥 세트",
        price: "7,200원"
    },
    "롯데리아": {
        title: "데리버거 세트",
        price: "5,600원"
    },
    "KFC": {
        title: "징거버거",
        price: "7,800원"
    },
    "버거킹": {
        title: "통새우 와퍼 세트",
        price: "9,800원",
    }
}

// 입력된 url의 값을 가져오기 위한 brandname(useParams!) 
// html에서는 조건문을 사용할 수 없기 때문에 삼항연산자를 사용하여 이를 구현함!

const Product = () => {
    const { brandname } = useParams();
    const product = data[brandname];

    return (
        <div>
            {product ?
                <div>
                    <h3>{brandname}</h3>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div> :
                <p>해당 브랜드의 제품을 찾을 수 없습니다.</p>
                }
        </div>
    )
}

export default Product;