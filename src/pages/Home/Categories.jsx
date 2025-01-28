import React from 'react'
import { Categoriesdata } from '../../data/data.jsx'
import "./Categories.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Categories = () => {
  return (
    <div className='cato-container'>
      <div className='heading'>
        <span className='box'></span>
        <p className='category-heading'>Categories</p>
        <button style={{margin:50}}>Cntact Us</button>
      </div>
      <div className='sub-head'>
        <h2 className='browse-heading'>Browse By Category</h2>
        <div className="arrows">
          <span className="arrow left">
            <FaArrowLeft />
          </span>
          <span className="arrow right">
            <FaArrowRight />
          </span>
        </div>
      </div>
      <div className='item-cont'>
        {Categoriesdata.map((item, index) => (
          <div key={index} className='items'>
            <span className='ima'>{item.icon}</span>
            <p className='name'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories;
