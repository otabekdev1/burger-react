import React from 'react'
import "../Footer/Footer.css"
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-between align-items-center">
                        <a style={{ color: "white" }} href="#!" className="navbar-brand">
                            Street88
                        </a>
                        <a href="#!" className='number'>+998 90 980 77 23</a>
                    </div>
                    <div className="row justify-content-betwee " >
                        <ul className='d-flex justify-content-center flex-wrap'>
                            <li><a href="#!">Меню</a></li>
                            <li><a href="#!">О нас</a></li>
                            <li><a href="#!">Контакты</a></li>
                            <li><a href="#!">Instagram</a></li>
                            <li><a href="#!">Facebook</a></li>
                            <li><a href="#!">Telegram Bot</a></li>
                        </ul>
                    </div>
                    <p style={{ marginBottom: "45px" }} className='d-flex justify-content-center '>Сайт разработан в целях обучения © PROWEB 2019</p>
                </div>
            </div>
        </footer>
    )
}
