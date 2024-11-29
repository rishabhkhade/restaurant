import React from "react";
import "./vegetarian.scss";
import { MdCurrencyRupee } from "react-icons/md";
import { veg } from "../../data";
import chilly from "../../assets/home/red-chili.webp";
import double_chilly from "../../assets/home/double_chilly.webp";

function Vegetarian({setMenuAdd, menuAdd}) {


    const orders = (id) => {
        // Create a new array with the new item added
        const updatedMenu = [...menuAdd, id];
        setMenuAdd(updatedMenu); // Update the state with the new array
      };
    

  return (
    <>
      <div className="parent veg-parent">
        <div className="cont veg-cont">
          {veg.map((item, index) => (
            <div className="list" key={index}>
              <div
                className="veg-left bg-img-cover"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <span className="plus" onClick={() => orders(item.id)} >+</span>
              </div>
              <div className="veg-right">
                <h3 className="menu-name">{item.name}</h3>
                <p className="menu-des">{item.desc}</p>
                <p className="price">
                  {" "}
                  <span>
                    <MdCurrencyRupee />
                  </span>{" "}
                  <div className="price-img">
                    <span>{item.price} </span>
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

export default Vegetarian;
 