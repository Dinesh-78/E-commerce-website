import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaHeart, FaEye, FaStar } from "react-icons/fa";
import "./OurProducts.css";

// Assuming 'productsowndata' is imported from the data file
import { productsowndata } from '../../data/data'; // Correct the import path accordingly

const Ourproducts = () => {
  const [rating, setRating] = useState(null);
  const [hovering, setHovering] = useState(null);
  const [liked, setLiked] = useState(false);

  return (
    <div className='cato-container'>
      <div className='heading'>
        <span className='box'></span>
        <p style={{ fontFamily: "Outfit", marginTop: "20px", fontSize: 20, fontWeight: 600, color: "#DB4444" }}>
          Our Products
        </p>
      </div>

      <div className='sub-head'>
        <h2 style={{ fontSize: 30, letterSpacing: 1, fontFamily: "Outfit", fontWeight: 500 }}>
          Explore Our Products
        </h2>
        <div className="arrows">
          <span
            style={{
              display: 'inline-block',
              background: '#F5F5F5',
              borderRadius: '50%',
              padding: 10,
              marginRight: 20,
            }}
          >
            <FaArrowLeft />
          </span>
          <span
            style={{
              display: 'inline-block',
              background: '#F5F5F5',
              borderRadius: '50%',
              padding: 10,
            }}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>

      <div className='pro-list'>
        {productsowndata.map((product) => (
          <div className='pro-item' key={product.id}>
            <span className='p-img-cont'>
              <img src={product.image} width={100} alt={product.name} />
              <span className='p-i-icon'>
                <FaHeart
                  style={{ color: liked ? "red" : "black" }}
                  onClick={() => setLiked(!liked)}
                  size={25}
                />
                <FaEye size={25} />
              </span>
            </span>

            <div className='p-i-cont'>
              <p>{product.name}</p>
              <span>{product.price}</span>
              <div className="rating">
                {[...Array(5)].map((star, index) => {
                  const currentRate = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name={`rating-${product.id}`}
                        value={currentRate}
                        onClick={() => setRating(currentRate)}
                      />
                      <FaStar
                        className='p-star'
                        color={currentRate <= (hovering || rating) ? 'yellow' : 'black'}
                        size={20}
                        onMouseEnter={() => setHovering(currentRate)}
                        onMouseLeave={() => setHovering(rating)}
                      />
                    </label>
                  );
                })}
                ({product.ratcount})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourproducts;
