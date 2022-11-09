import React from "react";
import "../header/Header.css";
export default function Header() {
  return (
    <header>
      <div className="container-xxl">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Street88
            </a>
            <button
              style={{ border: "1px solid white" }}
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="hamburger-floor"></div>
              <div className="hamburger-floor"></div>
              <div className="hamburger-floor"></div>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div class="d-flex ">
                <a class="nav-link active " aria-current="page" href="#">
                  Корзина
                </a>
                <a class="nav-link" href="#">
                  Меню
                </a>
                <a class="nav-link" href="#">
                  О нас
                </a>
                <a class="nav-link" href="#">
                  Контакты
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero">
        <div className="container-xxl">
          <div className="row">
            <h1 className="title-name">Большой гамбургер</h1>
            <span className="title-product">говядина</span>
            <p className="title-description">
              Свежая хрустящая булочка, листики салата, маринованный огурец с
              луком и небольшая котлета, сдобренная майонезом и кетчупом, -
              таков классический портрет гамбургера, наиболее распространенной
              «быстрой» еды в США, от отравления которой ежедневно на больничных
              койках оказываются десятки тысяч американцев
            </p>
          </div>
          <a href="#!" className="btn title-price">
            14 500
          </a>
        </div>
      </div>
    </header>
  );
}
// style={{ color: "#4e9f0d" }}
