import React from 'react'
import {wishlistData} from '../../data/data.jsx'
import { justForYouData } from '../../data/data.jsx';
import ProductCard from './ProductCard.jsx';
import './Wishlist.css'
const Wishlist = () => {
  return (
    <div className="app-container">
      {/* Wishlist Section */}
      <section className="wishlist-section">
        <h2>Wishlist (4)</h2>
        <button className="move-all-btn">Move All To Bag</button>
        <div className="product-grid">
          {wishlistData.map((item) => (
            <ProductCard key={item.id} product={item} showDelete />
          ))}
        </div>
      </section>

      {/* Just For You Section */}
      <section className="just-for-you-section">
        <h2>Just For You</h2>
        <button className="see-all-btn">See All</button>
        <div className="product-grid">
          {justForYouData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;