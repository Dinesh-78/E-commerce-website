import React from 'react';
import './Slidesection.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import si1 from '../../assets/1.jpg';

const Slidersection = () => {
  return (
    <div className='sli-cont'>
      <div className='sli-list'>
        <p>Woman's Fashion</p>
        <p>Men's Fashion</p>
        <p>Electronics</p>
        <p>Home & Lifestyle</p>
        <p>Medicine</p>
        <p>Sports & Outdoor</p>
        <p>Baby's & Toys</p>
        <p>Groceries & Pets</p>
        <p>Health & Beauty</p>
      </div>
      <div className='sli-divider'></div> 
      <div className='sli-carousel'>
        <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false} width="100%">
          <div>
            <img src={si1} alt="Slide 1" />
          </div>
          <div>
            <img src={si1} alt="Slide 2" />
          </div>
          <div>
            <img src={si1} alt="Slide 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slidersection;
