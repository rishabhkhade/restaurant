import React from "react";
import "./home.scss";
import img1 from "../../assets/home/baked-chicken-wings-asian-style.jpg";
import red_chilli from "../../assets/home/red-chili.webp";

function Home() {
  const itemDetails = [
    {
      id: 1,
      image: img1,
      item_name: "Chicken",
      category: "nv",
      spicy: red_chilli,
    },
    {
      id: 2,
      image: img1,
      item_name: "Chicken",
      category: "nv",
      spicy: red_chilli,
    },
    {
      id: 3,
      image: img1,
      item_name: "Chicken",
      category: "nv",
      spicy: red_chilli,
    },
    {
      id: 4,
      image: img1,
      item_name: "Chicken",
      category: "nv",
      spicy: red_chilli,
    },
    {
      id: 5,
      image: img1,
      item_name: "Chicken",
      category: "nv",
      spicy: red_chilli,
    },
    {
      id: 6,
      image: img1,
      item_name: "Chicken",
      category: "nv",
      spicy: red_chilli,
    },
    {
      id: 7,
      image: img1,
      item_name: "Chicken",
      category: "nv",
      spicy: red_chilli,
    },
    {
      id: 8,
      image: img1,
      item_name: "Chicken",
      category: "nv",
      spicy: red_chilli,
    },
  ];

  return (
    <>
      <div className="parent home-parent">
        <div className="cont home-cont">
          <div className="items">
            {itemDetails.map((data, index) => (
              <div className="item item-list1 " key={index}>
                <div
                  className="img bg-img-cover"
                  style={{ backgroundImage: `url(${data.image})` }}
                ></div>
                <div className="contain ">
                  <div className="contain-bottom">
                    <p>{data.item_name}</p>
                    <p>{data.category}</p>
                    <img src={data.spicy} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
