import React from "react";
import Cardimg from "../img/card-img.png";
import "../section/Section.css";
export default function Section() {
  return (
    <section>
      <div className="container-xxl">
        <div className="row">
          <ul className="d-flex flex-wrap">
            <li>
              <a href="#!">Гамбургеры</a>
            </li>
            <li>
              <a href="#!">Хот доги</a>
            </li>
            <li>
              <a href="#!">Пицца</a>
            </li>
            <li>
              <a href="#!">Напитки</a>
            </li>
            <li>
              <a href="#!">Соки</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container ">
        <div className="row justify-content-around ">
          <div className="cart col-lg-6  col-xxl-3 col-xl-3  col-md-6 m-auto">
            <img src={Cardimg} alt="" className="card-img" />
            <div className="card-body">
              <h5 className="card-title">C ГОВЯДИНОЙ</h5>
              < p style={{ marginBottom: "40px" }} className="card-text">
                Свежая хрустящая булочка, листики салата, маринованный огурец с
                луком и небольшая котлета, сдобренная майонезом и кетчупом
              </p>
            </div>
          </div>
          <div className="cart col-lg-6  col-xxl-3 col-xl-3 col-md-6 m-auto">
            <img src={Cardimg} alt="" className="card-img" />

            <div className="card-body">
              <h5 className="card-title">C ГОВЯДИНОЙ</h5>
              < p style={{ marginBottom: "40px" }} className="card-text">
                Свежая хрустящая булочка, листики салата, маринованный огурец с
                луком и небольшая котлета, сдобренная майонезом и кетчупом
              </p>
            </div>
          </div>
          <div className="cart col-lg-6   col-xxl-3 col-xl-3 col-md-6 m-auto">
            <img src={Cardimg} alt="" className="card-img" />
            <div className="card-body">
              <h5 className="card-title">C ГОВЯДИНОЙ</h5>
              <p style={{ marginBottom: "40px" }} className="card-text">
                Свежая хрустящая булочка, листики салата, маринованный огурец с
                луком и небольшая котлета, сдобренная майонезом и кетчупом
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-around ">
          <div className="cart col-lg-6 col-xxl-3 col-xl-3  col-md-6">
            <img src={Cardimg} alt="" className="card-img" />

            <div className="card-body">
              <h5 className="card-title">C ГОВЯДИНОЙ</h5>
              <p className="card-text">
                Свежая хрустящая булочка, листики салата, маринованный огурец с
                луком и небольшая котлета, сдобренная майонезом и кетчупом
              </p>
            </div>
          </div>
          <div className="cart col-lg-6 col-xxl-3 col-xl-3 col-md-6 ">
            <img src={Cardimg} alt="" className="card-img" />

            <div className="card-body">
              <h5 className="card-title">C ГОВЯДИНОЙ</h5>
              <p className="card-text">
                Свежая хрустящая булочка, листики салата, маринованный огурец с
                луком и небольшая котлета, сдобренная майонезом и кетчупом
              </p>
            </div>
          </div>
          <div className="cart col-lg-6 col-xxl-3 col-xl-3  col-md-6">
            <img src={Cardimg} alt="" className="card-img" />

            <div className="card-body">
              <h5 className="card-title">C ГОВЯДИНОЙ</h5>
              <p className="card-text">
                Свежая хрустящая булочка, листики салата, маринованный огурец с
                луком и небольшая котлета, сдобренная майонезом и кетчупом
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
