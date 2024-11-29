import React from "react";
import "./BottomNav.scss";
import { Link } from "react-router-dom";

function BottomNav(props) {
  return (
    <>
      <div className="parent bottom-nav-parent">
        <div className="cont bottom-nav-cont">
          <Link
            className={`small-box ${
              props.activeTab === "starter" ? "active" : ""
            }`}
            onClick={props.onStarterClick}
          >
            Veg
          </Link>
          <Link
            className={`small-box ${
              props.activeTab === "mainCourse" ? "active" : ""
            }`}
            onClick={props.onMainCourseClick}
          >
            Non-Veg
          </Link>
          <Link
            className={`small-box ${
              props.activeTab === "drinks" ? "active" : ""
            }`}
            onClick={props.onDrinksClick}
          >
            Drinks
          </Link>
          <Link
            className={`small-box ${
              props.activeTab === "desserts" ? "active" : ""
            }`}
            onClick={props.onDessertsClick}
          >
            Desserts
          </Link>
        </div>
      </div>
    </>
  );
}

export default BottomNav;
