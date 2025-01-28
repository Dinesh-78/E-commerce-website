import React from 'react';
import './Myaccount.css';

const Myaccount = () => {
  return (
    <div className="my-container">
      <div className="my-sidemenu">
        <h1>Manage My Account</h1>
        <p className="my-active">My Profile</p>
        <p>Address Book</p>
        <p>My Payment Options</p>
        <h1>My Orders</h1>
        <p>My Returns</p>
        <p>My Cancellations</p>
        <h1>My WishList</h1>
      </div>
      <div className="my-right-edit">
        <h1>Edit Your Profile</h1>
        <div className="my-input-group">
          <div className="my-input-field">
            <label>First Name</label>
            <input type="text" placeholder="Md" />
          </div>
          <div className="my-input-field">
            <label>Last Name</label>
            <input type="text" placeholder="Rimel" />
          </div>
        </div>
        <div className="my-input-group">
          <div className="my-input-field">
            <label>Email</label>
            <input type="text" placeholder="rimel1111@gmail.com" />
          </div>
          <div className="my-input-field">
            <label>Address</label>
            <input type="text" placeholder="Kingston, 5236, United State" />
          </div>
        </div>
        <h2>Password Changes</h2>
        <div className="my-password-group">
          <input type="text" placeholder="Current Password" />
          <input type="text" placeholder="New Password" />
          <input type="text" placeholder="Confirm New Password" />
        </div>
        <div className="my-button-group">
          <button className="my-cancel-btn">Cancel</button>
          <button className="my-save-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Myaccount;
