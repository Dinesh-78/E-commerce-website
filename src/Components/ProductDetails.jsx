import React, { useState } from "react";
import "./ProductDetail.css";
import joystick from "../assets/joystick.png"
const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="product-detail-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <p>Account / Gaming / Havic HV G-92 Gamepad</p>
      </div>

      {/* Main Content */}
      <div className="product-detail-content">
        {/* Left Section: Images */}
        <div className="product-images">
          <div className="thumbnail-images">
            <img src={joystick} alt="Thumbnail 1" />
            <img src={joystick} alt="Thumbnail 2" />
            <img src={joystick} alt="Thumbnail 3" />
            <img src={joystick} alt="Thumbnail 4" />
          </div>
          <div className="main-image">
            <img src={joystick} alt="Main Product" />
          </div>
        </div>

        {/* Right Section: Details */}
        <div className="product-details">
          <h1>Havic HV G-92 Gamepad</h1>
          <div className="rating">
            <span>⭐⭐⭐⭐☆</span> <p>(150 Reviews)</p> <p className="in-stock">In Stock</p>
          </div>
          <h2>$192.00</h2>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal. Pressure
            sensitive.
          </p>

          {/* Colours */}
          <div className="options">
            <div className="colors">
              <p>Colours:</p>
              <div className="color-circle red"></div>
              <div className="color-circle blue"></div>
              <div className="color-circle black"></div>
            </div>

            {/* Sizes */}
            <div className="sizes">
              <p>Size:</p>
              <div className="size-box">XS</div>
              <div className="size-box">S</div>
              <div className="size-box selected">M</div>
              <div className="size-box">L</div>
              <div className="size-box">XL</div>
            </div>
          </div>

          {/* Quantity */}
          <div className="quantity-section">
            <p>Quantity:</p>
            <button className="quantity-btn" onClick={decreaseQuantity}>
              -
            </button>
            <span>{quantity}</span>
            <button className="quantity-btn" onClick={increaseQuantity}>
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="buttons">
            <button className="buy-now">Buy Now</button>
            <button className="wishlist">❤</button>
          </div>

          {/* Delivery Info */}
          <div className="delivery-info">
            <div className="delivery-item">
              <p>🚚 Free Delivery</p>
              <p>Enter your postal code for delivery availability</p>
            </div>
            <div className="delivery-item">
              <p>🔄 Return Delivery</p>
              <p>Free 30 days delivery returns. Details</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="related-items">
        <h3>Related Item</h3>
        <div className="related-items-grid">
          <div className="related-item">
            <img src={joystick} alt="Related Product 1" />
            <p>HAVIT HV-G92 Gamepad</p>
            <p>$120 <span className="old-price">$160</span></p>
          </div>
          <div className="related-item">
            <img src={joystick} alt="Related Product 2" />
            <p>AK-900 Wired Keyboard</p>
            <p>$960 <span className="old-price">$1160</span></p>
            <button className="add-to-cart">Add To Cart</button>
          </div>
          <div className="related-item">
            <img src={joystick} alt="Related Product 3" />
            <p>IPS LCD Gaming Monitor</p>
            <p>$370 <span className="old-price">$400</span></p>
          </div>
          <div className="related-item">
            <img src={joystick} alt="Related Product 4" />
            <p>RGB Liquid CPU Cooler</p>
            <p>$160 <span className="old-price">$170</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
