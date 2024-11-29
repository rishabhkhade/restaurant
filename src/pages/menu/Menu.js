import React, { useState } from "react";
import "./menu.scss";
import Starter from "../../components/starter/Starter";
import MainCourse from "../../components/main-course/MainCourse";
import Drinks from "../../components/drinks/Drinks";
import Desserts from "../../components/desserts/Desserts";
import BottomNav from "../../components/bottomnav/BottomNav";

const MenuToggle = ({setMenuAdd, menuAdd}) => {


const [activeTab, setActiveTab] = useState("starter")


  const [foods, setFoods] = useState({
    starter: true,
    mainCourse: false,
    drinks: false,
    desserts: false,
  });

  const onStarterClick = () => {
    setFoods({
      starter: true,
      mainCourse: false,
      drinks: false,
      desserts: false,
    });
    setActiveTab("starter")
  };

  const onMainCourseClick = () => {
    setFoods({
      starter: false,
      mainCourse: true,
      drinks: false,
      desserts: false,
    });
    setActiveTab("mainCourse")
  };

  const onDrinksClick = () => {
    setFoods({
      starter: false,
      mainCourse: false,
      drinks: true,
      desserts: false,
    });

    setActiveTab("drinks")
  };

  const onDessertsClick = () => {
    setFoods({
      starter: false,
      mainCourse: false,
      drinks: false,
      desserts: true,
    });

    setActiveTab("desserts")
  };

  return (
    <>
      <div className="parent menu-parent">
        {foods.starter && <Starter setMenuAdd={setMenuAdd} menuAdd={menuAdd}  />}
        {foods.mainCourse && <MainCourse />}
        {foods.drinks && <Drinks />}
        {foods.desserts && <Desserts />}
      </div>
      <BottomNav
        onStarterClick={onStarterClick}
        onMainCourseClick={onMainCourseClick}
        onDrinksClick={onDrinksClick}
        onDessertsClick={onDessertsClick}
        activeTab={activeTab}
      />
    </>
  );
};

export default MenuToggle;
