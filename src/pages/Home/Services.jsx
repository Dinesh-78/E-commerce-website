import React from 'react'
import { FaTruck } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiAdguard } from "react-icons/si";
import "./Services.css"
const Services = () => {
  return (
    <div className='ser-cont'>
      <div className='serv-item'>
       
      <FaTruck size={40} />
      
       <p className='serv-head'>FREE AND FAST DELIVERY</p>
       <p>Free delivery for all orders over $140</p>
      </div>
      <div className='serv-item'>
      
        <TfiHeadphoneAlt size={30} />
       
       <p className='serv-head'>24/7 CUSTOMER SERVICE</p> 
       <p>Friendly 24/7 customer support</p>
      </div>

      <div className='serv-item'>
    
        <SiAdguard size={30} /> 
       
       <p className='serv-head'>MONEY BACK GUARANTEE</p>
       <p>We reurn money within 30 days</p>
      </div>



    </div>
  )
}

export default Services