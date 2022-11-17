import React from "react";

function Card({title, id, imgUrl, price, onPlus, added = false,}) {

    const [isAdd, setIsAdd] = React.useState(added);

    const onClickCartButton = () => {
        onPlus({id, title, imgUrl, price})
        setIsAdd(!isAdd)
    }

    return (
        <div className="catalog__card">
            <img width={250} height={250} src={imgUrl} alt="product"></img>
            <p className="name_product">{title}</p>
            <div className="pricebuy">
                <p className="price">Цена: {price} &#8381;</p>
                <div className="buttoncart">
                    <img width={20} height={20} src={isAdd ? "./img/check.png" : "./img/cart.png"} alt="cart" onClick={onClickCartButton}></img>
                </div>   
            </div>
        </div>
    );
}

export default Card;