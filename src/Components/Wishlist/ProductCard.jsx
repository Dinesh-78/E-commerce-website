import React from 'react';
import { BsCart } from 'react-icons/bs';
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import './ProductCard.css';

const ProductCard = ({ product, showDelete }) => {
  return (
    <div className="product-card">
      {/* Discount or Label */}
      {product.discount && <span className="badge discount">{product.discount}</span>}
      {product.label && <span className="badge label">{product.label}</span>}

      {/* Product Image */}
      <img src={product.image} alt={product.name} className="product-image" />

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          ${product.price}{' '}
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </p>
        {product.rating && <p className="rating">⭐ ({product.rating})</p>}
      </div>

      {/* Action Buttons */}
      <div className="product-actions">
        <button className="add-to-cart-btn">
          <BsCart /> Add To Cart
        </button>
        {showDelete && (
          <button className="delete-btn">
            <AiOutlineDelete />
          </button>
        )}
        {!showDelete && (
          <button className="view-btn">
            <AiOutlineEye />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
