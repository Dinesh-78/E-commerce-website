import React from 'react'
import HomeMain from './pages/Home/HomeMain'
import './App.css';
import {BrowserRouter,Routes,Route,Link, NavLink} from "react-router-dom"
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Signup from './pages/Auth/Signup';
import { IoIosArrowDown } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './Components/Checkout';
import Header from './pages/Home/Header';
import Footer from './pages/Home/Footer';
import ProductDetails from './Components/ProductDetails';
import Myaccount from './pages/Auth/Myaccount';
import Cart from './Components/Cart';
import ProductDetail from './Components/ProductDetails';
import Wishlist from './Components/Wishlist/Wishlist';
import NotFound from './Components/notfound';
const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' Component={HomeMain} />
          <Route path='contact' Component={Contact} />
          <Route path='about' Component={About} />
          <Route path='signup' Component={Signup} />
          <Route path='wishlists' Component={Wishlist} />
          <Route path='myaccount' Component={Myaccount} />
          <Route path='checkout' Component={Checkout} />
          <Route path='cart' Component={Cart} />
          <Route path='productdetails' Component={ProductDetail} />
          <Route path="*" Component={NotFound} />
        </Routes> 
        <Footer />
    </BrowserRouter>
  )
}

export default App