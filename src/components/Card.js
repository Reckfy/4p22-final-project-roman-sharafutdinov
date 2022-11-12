import React from "react";

function Card({title, imgUrl, price, onPlus,}) {

    const [isAdd, setIsAdd] = React.useState(false);

    const onClickCartButton = () => {
        onPlus({title, imgUrl, price})
        setIsAdd(!isAdd)
    }

    return (
        <div className="catalog__card">
            <img width={250} height={250} src={imgUrl} alt="product"></img>
            <p className="name_product">{title}</p>
            <div className="pricebuy">
                <p className="price">Цена: {price} &#8381;</p>
                <div className="buttoncart">
                    <img width={20} height={20} src={isAdd ? "/img/check.png" : "/img/cart.png"} alt="cart" onClick={onClickCartButton}></img>
                </div>   
            </div>
        </div>
    );
}

export default Card;