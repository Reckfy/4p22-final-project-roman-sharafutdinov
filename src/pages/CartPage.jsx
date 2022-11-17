import { Link } from "react-router-dom";

function CartPage({arrayCard=[]}) {

    const totalPrice = arrayCard.reduce((sum, obj) => obj.price + sum, 0);
    const discount = totalPrice / 100 * 5;
    const discountPrice = totalPrice - discount;

    return(
        <div className="catalog">
            <div className="catalog__h-search">
                <h1 className="back-home">
                    <Link to="/">
                        <img className="" width={20} height={20} src="./img/left.png" alt="back" />
                    </Link>
                    Мои покупки
                </h1>
            </div>
            <div className="catalog__cards">
                {arrayCard.map((obj) => (
                    <div key={obj.id} className="catalog__card">
                        <img width={250} height={250} src={obj.imgUrl} alt="product"></img>
                        <p className="name_product">{obj.title}</p>
                        <div className="pricebuy">
                            <p className="price">Цена: {obj.price} &#8381;</p>  
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div className="cart-page-calculate">
                    <span>Скидка:</span>
                    <b>{discount} &#8381;</b>
                    <span>Итого:</span>
                    <b>{discountPrice} &#8381;</b>
                </div>
                <div className="bottom-cart-page">
                    <button onClick={() => alert("Заказ принят. Оператор свяжется с Вами в ближайшее время")} className="orange_button cart-page__orange-button">Оформить заказ</button>
                </div>
            </div>
        </div>
    )
};

export default CartPage;