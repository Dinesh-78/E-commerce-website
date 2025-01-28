import React from 'react';
import './Checkout.css'; 
import joystick from "../assets/joystick.png";
const Checkout = () => {
  return (
    <div className="checkout-container">
      <form className="checkout-form">
        <h2>Billing Details</h2>
        <div className="form-group">
          <label>First Name*</label>
          <input type="text" placeholder="Enter your first name" required />
        </div>
        <div className="form-group">
          <label>Company Name (optional)</label>
          <input type="text" placeholder="Enter your company name" />
        </div>
        <div className="form-group">
          <label>Street Address*</label>
          <input type="text" placeholder="Enter your street address" required />
        </div>
        <div className="form-group">
          <label>Apartment, floor, etc. (optional)</label>
          <input type="text" placeholder="Apartment, suite, unit, etc." />
        </div>
        <div className="form-group">
          <label>Town/City*</label>
          <input type="text" placeholder="Enter your city" required />
        </div>
        <div className="form-group">
          <label>Phone Number*</label>
          <input type="tel" placeholder="Enter your phone number" required />
        </div>
        <div className="form-group">
          <label>Email Address*</label>
          <input type="email" placeholder="Enter your email address" required />
        </div>
        <div className="form-save-info">
          <input type="checkbox" id="save-info" />
          <label htmlFor="save-info">Save this information for faster checkout next time</label>
        </div>
      </form>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="order-items">
          <img src={joystick} alt="" className='c-product-image' />
          <p>LCD Monitor <span>$650</span></p>
          <img src={joystick} alt="" className='c-product-image' />
          <p>Hi GamePad <span>$1150</span></p>
        </div>
        <p>Subtotal: <span>$1750</span></p>
        <p>Shipping: <span>Free</span></p>
        <p>Total: <span>$1750</span></p>
        <div className="payment-options">
          <h3>Payment Options</h3>
         
          <p><input type="radio" name="payment" id="cod" /> <label htmlFor="cod">Cash on Delivery</label></p>
        </div>
        <div className="coupon">
          <input type="text" placeholder="Enter Coupon Code" />
          <button className="apply-coupon">Apply Coupon</button>
        </div>
        <button className="place-order">Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
