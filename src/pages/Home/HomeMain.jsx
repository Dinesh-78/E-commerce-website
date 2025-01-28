import React from 'react'
import './HomeMain.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Header from './Header';
import Categories from './Categories';
import Footer from './Footer';
import Services from './Services';
import Ourproducts from './Ourproducts';
import Slidersection from './Slidersection';
import Trending from './Trending';
import Ad from './Ad';
import NewArrival from './NewArrival';
const HomeMain = () => {
  return (
    <>
    
    <Slidersection />
    <Trending />
    <Categories/>
    <Trending />
    <Ad />
    <Ourproducts />
    <NewArrival />
    <Services />
   
    </>
  )
}

export default HomeMain