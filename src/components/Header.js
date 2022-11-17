import React from "react";
import { Link } from "react-router-dom";

function Header(props) {

    return (
    <header className='header'>
        <Link to="/">
            <div className="header__logoname">
                <img width={50} height={50} src="./img/logo.png" alt="logo"></img>
                <div>
                    <h3>FIRESTORE</h3>
                    <p>Магазин компьютерной техники</p>
                </div>
            </div>
        </Link>
        <div className="header__cart_log">
            <Link to="/registration">
                <div className="header__log">
                    <img width={20} height={20} src="./img/user.png" alt="cart"></img>
                    <p>Войти</p>
                </div>
            </Link>
            <div onClick={props.onClickCart} className="header__cart">
                <img width={20} height={20} src="./img/cart.png" alt="cart"></img>
                <p>Корзина</p>
            </div>
        </div>
    </header>
    );
}

export default Header;