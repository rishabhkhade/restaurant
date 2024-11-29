import React from 'react'
import './mainCourse.scss'
import NonVegetarian from '../nonveg/NonVegetarian'

function MainCourse() {
  return (
    <>
      <div className="parent">
        <div className="cont">
        <NonVegetarian />
        </div>
      </div>
    </>
  )
}

export default MainCourse
