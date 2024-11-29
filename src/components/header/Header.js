import React, { useEffect, useState } from "react";
import "./Header.scss";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

function Header() {
  const [date, setDate] = useState({ formattedDate: "", formattedTime: "" });

  useEffect(() => {
    const newDate = new Date();

    // Format date as dd-mm-yyyy
    const day = String(newDate.getDate()).padStart(2, "0");
    const month = String(newDate.getMonth() + 1).padStart(2, "0"); // getMonth() returns month index (0-11)
    const year = newDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    // Format time as hh:mm (12-hour format)
    const formattedTime = newDate.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setDate({ formattedDate, formattedTime });
  }, []);

  return (
    <>
      <div className="parent header-parent">
        <div className="logo-search">
          <div className="logo bg-img-contain"></div>
          <div className="search">
            <input type="text" placeholder="Search order or any order..." />
            <HiMiniMagnifyingGlass />
          </div>
        </div>
        <div className="date-time">
          <span className="date">
            <span>
              <CiCalendar />
            </span>
            {date.formattedDate} {/* Display date in dd-mm-yyyy format */}
          </span>
          <span className="time">
            <span>
              <IoTimeOutline />
            </span>
            {date.formattedTime} {/* Display time here */}
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
