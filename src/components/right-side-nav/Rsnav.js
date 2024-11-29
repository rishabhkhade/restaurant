import React, { useState } from "react";
import "./Rsnav.scss";
import panner from "../../assets/menu/v/palak_paneer.jpg";
import { RxCross1 } from "react-icons/rx";
import { veg } from "../../data";
function Rsnav({menuAdd}) {




const filteredItems = veg.filter((item) => menuAdd.includes(item.id));
  console.log(menuAdd, ">>>>>>>>>>>");
  
console.log(filteredItems, "ghhgn")


  return (
    <>
      <div className="parent rsnav-parent">
        <div className=" rsnav-container">
          <h3 style={{ marginTop: "15px" }}>ORDERS</h3>
          <div className="line"></div>
          {filteredItems.map((item, index) => (
            <div class="box" key={index}>
              <div
                class="small-box bg-img-cover"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div class="name-price-div">
                <div class="dish-name">{item.name}</div>
                <div class="dish-price">{item.price}</div>
              </div>
              <RxCross1 className="cross-icon" />
            </div>
          ))}
          <div class="total-amount">
            <h3 style={{ fontSize: "25px", fontWeight: "700" }}>Total</h3>
            <span style={{ fontSize: "25px", fontWeight: "700" }}>2000</span>
          </div>
          <a href="" className="cancel-btn">
            Submit Order
          </a>
        </div>
      </div>
    </>
  );
}

export default Rsnav;
