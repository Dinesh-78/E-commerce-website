import React from 'react'
import './Footer.css';
import googleplay from "../../assets/googleplay.png";
import iosstore from "../../assets/iostore.png";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='f-content'>
     <div className='f-row'>
       <h1 className='f-row-head'>Exlusive</h1>
       <p style={{fontFamily:"outfit",fontWeight:400}}>Subscribe</p>
       <p style={{fontFamily:"outfit",fontWeight:400}}>Get 10 % off your first order</p>
       <input type="text" placeholder='enter you email' style={{background:"black",height:40}} />
     </div>
     <div className='f-row'>
     <h1 className='f-row-head'>can Support</h1>
     <address style={{fontFamily:"outfit",fontWeight:400}}>111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</address>
     <p style={{fontFamily:"outfit",fontWeight:400}}>exclusive@gmail.com</p>
     <p style={{fontFamily:"outfit",fontWeight:400}}>+88015-88888-9999</p>
     </div>
     <div className='f-row'>
     <h1 className='f-row-head'>Account</h1>
     <p style={{fontFamily:"outfit",fontWeight:400}}>My Account</p>
     <p style={{fontFamily:"outfit",fontWeight:400}}>Login / Register</p>
     <p style={{fontFamily:"outfit",fontWeight:400}}>Cart</p>
     <p style={{fontFamily:"outfit",fontWeight:400}}>Wishlist</p>
     <p style={{fontFamily:"outfit",fontWeight:400}}>Shop</p>
     </div>
     <div className='f-row'>
     <h1 className='f-row-head'>Quick Link</h1>
     <p style={{fontFamily:"outfit",fontWeight:400}}>Privacy Policy</p>
     <p style={{fontFamily:"outfit",fontWeight:400}}>Terms Of Use</p>
     <p style={{fontFamily:"outfit",fontWeight:400}}>FAQ</p>
     <p style={{fontFamily:"outfit",fontWeight:400}} >Contact</p>
     
     </div>
     <div className='f-row'>
     <h1 className='f-row-head'>Download App</h1>
     <p style={{fontFamily:"outfit",fontWeight:400}}>Save $3 with App New User Only</p>
     <img src={googleplay} width={120} />
     <img src={iosstore} width={110} /> <br />
     <RiFacebookLine size={27} style={{marginRight:28}} />
     <CiTwitter size={27} style={{marginRight:28}}/>
     <FaInstagram size={27} style={{marginRight:28}} />
     <RiLinkedinLine size={27}  />
     </div>
     </div>
    <p style={{textAlign:'center'}}> &#169;Copyright Rimel 2022. All right reserved</p>
    
    </div>
  )
}

export default Footer        