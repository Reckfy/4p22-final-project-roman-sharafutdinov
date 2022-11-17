function Footer() {
    return(
        <footer className="footer">
            <address className="footer__contacts">
                <p>Контакты:</p>
                <div>
                    <a href="mailto:reckfy777@yandex.ru">Email</a>
                </div>
                <div>
                    <a href="tel:+78005553535">Телефон</a>
                </div>
            </address>
            <p className="footer__copyright">&copy; Copyright 2022 FIRESTORE </p>
            <div className="social">
                <a className="social__icon" alt="vk" href="https://vk.com/" rel="nofollow noopener noreferrer" target="_blank"><img src="./img/vk.png" height="40" width="40"/></a>
                <a className="social__icon" alt="github" href="https://github.com/Reckfy/" rel="nofollow noopener noreferrer" target="_blank"><img src="./img/github.png" height="40" width="40"/></a>
            </div>
        </footer>
    );
};

export default Footer;