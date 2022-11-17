import React from "react";
import { Link } from "react-router-dom";
import CartPage from "../pages/CartPage";

function OverlayCart({onCloseCart, onRemove, arrayCard =[]}) {

    const totalPrice = arrayCard.reduce((sum, obj) => obj.price + sum, 0);
    const discount = totalPrice / 100 * 5;
    const discountPrice = totalPrice - discount;

    return (
        <div className="overlay_cart">
                <div className="cart_ascent">
                    <h3>
                        Корзина
                        <img onClick={onCloseCart} width={20} height={20} src="./img/cross.png" alt="cross" />
                    </h3>
                    {arrayCard.length > 0 ? (
                    <div className="cart_ascent__items">
                        {arrayCard.map((obj) => (
                            <div key={obj.id} className="cart_ascent__cart_item">
                                <img width={70} height={70} src={obj.imgUrl} alt="product"></img>
                                <div>
                                    <p className="cart_name_product">{obj.title}</p>
                                    <b>{obj.price} &#8381;</b>
                                </div>
                                <img className="remove-button" src="./img/delete.png" alt="remove" onClick={() => onRemove(obj.id)}></img>
                            </div>
                        ))}
                    </div>
                    ) : (
                    <div className="cart-clear">
                        <p>Корзина пустая</p>
                    </div>
                    )}
                    
                    <div className="cart_ascent__bottom-block">
                        <ul>
                            <li>
                                <span>Скидка:</span>
                                <div></div>
                                <b>{discount} &#8381;</b>
                            </li>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>{discountPrice} &#8381;</b>
                            </li>
                        </ul>
                        <Link to="/cartpage" element={<CartPage />}>
                            <button onClick={onCloseCart} className="orange_button">Перейти к покупке</button>
                        </Link>
                    </div>
                </div>
            </div>
    );
}

export default OverlayCart;