import './auth.scss';
import { Link } from "react-router-dom";
import React from "react";

function Login() {

    const [email, setEmail] = React.useState('');
    const [emailSelect, setEmailSelect] = React.useState(false);
    const [emailError, setEmailError] = React.useState('Поле обязательно для заполнения')
    const [password, setPassword] = React.useState('');
    const [passwordSelect, setPasswordSelect] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState('Поле обязательно для заполнения')

    const emailHandler = (event) => {
        setEmail(event.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(event.target.value).toLowerCase())) {
            setEmailError('Email введён некорректно')
            if (!event.target.value) {
                setEmailError('Поле обязательно для заполнения')
            }
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
        if (event.target.value.length < 8) {
            setPasswordError('Пароль должен содержать не менее 8 символов')
            if (!event.target.value) {
                setPasswordError('Поле обязательно для заполнения')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (event) => {
        switch (event.target.name) {
            case 'email':
                setEmailSelect(true)
                break;
        
            case 'password':
                setPasswordSelect(true)
                break;
        }
    }

    return(
        <div className="window-auth">
            <div className="window-auth__container">
                
                <h1>
                    <Link to="/">
                        <img className="back-button" width={20} height={20} src="./img/left.png" alt="back" />
                    </Link>
                    Войти
                </h1>
                <div className="window-auth__email">
                    {emailSelect && emailError ? (emailSelect && emailError) && <label htmlFor="input_email" style={{color:'rgb(255, 97, 58)'}}>{emailError}</label> : <label htmlFor="input_email">*Email</label>}
                    <input onChange={event => emailHandler(event)} value={email} onBlur={event => blurHandler(event)} type="email" name="email" id="input_email" required placeholder="Введите email" autoComplete='off'/>
                </div>
                <div className="window-auth__pass">
                    {passwordSelect && passwordError ? (passwordSelect && passwordError) && <label htmlFor="input_password" style={{color:'rgb(255, 97, 58)'}}>{passwordError}</label> : <label htmlFor="input_password">*Пароль</label>}
                    <input onChange={event => passwordHandler(event)} value={password} onBlur={event => blurHandler(event)} type="password" name="password" id="input_password" required placeholder="Введите пароль" autoComplete='off'/>
                </div>
                <button style={{marginTop:'17px'}} className="orange_button window-auth__orange_button">Вход</button>
                <div className='link-auth'>
                    <p>Еще не регистрировались?</p>
                    <Link to="/registration">
                        <p>Регистрация</p>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Login;