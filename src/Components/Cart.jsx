import React from 'react';
import './Cart.css'; 
import joystick from "../assets/joystick.png"
const Cart = () => {
  return (
    <div className="cart-container">
      <div className="breadcrumb">
        <p>Home / Cart</p>
      </div>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="product-item">
                <img src={joystick} alt="LCD Monitor" className="c-product-image" />
                <span>LCD Monitor</span>
              </div>
            </td>
            <td>$650</td>
            <td>
              <select>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
              </select>
            </td>
            <td>$650</td>
          </tr>
          <tr>
            <td>
              <div className="product-item">
                <img src={joystick} alt="GamePad" className="c-product-image" />
                <span>Hi Gamepad</span>
              </div>
            </td>
            <td>$550</td>
            <td>
              <select>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
              </select>
            </td>
            <td>$1100</td>
          </tr>
        </tbody>
      </table>

      <div className="cart-actions">
        <button className="return-shop">Return To Shop</button>
        <button className="update-cart">Update Cart</button>
      </div>

      <div className="cart-footer">
        <div className="coupon">
          <input type="text" placeholder="Coupon Code" />
          <button className="apply-coupon">Apply Coupon</button>
        </div>
        <div className="cart-total">
          <h3>Cart Total</h3>
          <p>Subtotal: <span>$1750</span></p>
          <p>Shipping: <span>Free</span></p>
          <p>Total: <span>$1750</span></p>
          <button className="checkout-button">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
