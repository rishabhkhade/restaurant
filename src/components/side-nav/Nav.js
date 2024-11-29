import React from "react";
import "./nav.scss";
import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlinePayment } from "react-icons/md";
import { LuMenuSquare } from "react-icons/lu";
import { BsBorderAll } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="parent nav-parent">
        <div className="cont nav-cont">
          <div className="nav-bar">
            <Link to="/" className="home">
              <HiOutlineHome />
              <span className="nav-text">Home</span>
            </Link>
            <Link to="menu" className="menu">
              <LuMenuSquare />
              <span className="nav-text">Menu</span>
            </Link>
            <Link to="payment" className="payment">
              <MdOutlinePayment />
              <span className="nav-text">Payment</span>
            </Link>
            <Link to="order" className="order">
              <BsBorderAll />
              <span className="nav-text">Order</span>
            </Link>
            <Link to="setting" className="setting">
              <FiSettings />
              <span className="nav-text">Setting</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
