import React from "react";
import "./nonvegetarian.scss";
import { MdCurrencyRupee } from "react-icons/md";
import chilly from "../../assets/home/red-chili.webp";
import double_chilly from "../../assets/home/double_chilly.webp";
import { nonveg } from "../../data";

function NonVegetarian() {
  return (
    <>
      <div className="parent veg-parent">
        <div className="cont veg-cont">
          {nonveg.map((item, index) => (
            <div className="list" key={index}>
              <div className="veg-left bg-img-cover"></div>
              <div className="veg-right">
                <h3 className="menu-name">{item.name}</h3>
                <p className="menu-des">{item.desc}</p>
                <p className="price">
                  {" "}
                  <span>
                    <MdCurrencyRupee />
                  </span>{" "}
                  <div className="price-img">
                    <span>{item.price}</span>
                    <span className="chilly-img bg-img-cover">
                      {item.spicy === true ? (
                        <img src={chilly} alt="" />
                      ) : (
                        <img src={double_chilly} alt="" />
                      )}
                    </span>{" "}
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NonVegetarian;
