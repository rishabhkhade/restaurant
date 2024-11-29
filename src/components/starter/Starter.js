import React from 'react'
import './Starter.scss'
import Vegetarian from '../veg/Vegetarian'

function Starter({setMenuAdd, menuAdd}) {
  return (
    <>
      <div className="parent">
        <div className="cont">
        <Vegetarian setMenuAdd={setMenuAdd} menuAdd={menuAdd}  />
        </div>
      </div>
    </>
  )
}

export default Starter
