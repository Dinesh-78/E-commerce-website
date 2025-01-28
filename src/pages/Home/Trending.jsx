import React,{useState} from 'react'
import { FaStar } from "react-icons/fa";
import Shirt from "../../assets/shirt.png";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import './Trending.css'
import { recentproductsdata } from '../../data/data';
const Trending = () => {
    const [rating,setrating]=useState(null);
    const [hovering,sethovering]=useState(null);
    const [liked, setLiked] = useState(false);
  return (
    <div className="trending-container">
         <div className='cato-container'>
          {/* Title */}
    <div className='heading'>
        <span className='box'></span>
        <p className='trending-title'>Trending</p>
    </div>
    <div className='sub-head'>
     <h2 style={{color:"blue"}} className="recent-products">Trending Products</h2>
      </div>
     
    </div >
     {/* Products Section */}
    <div className='t-items'>
    {recentproductsdata.map((item, index) => (
    <div key={item.id} className='t-item'>
     
    <div className='product-container'>
    
    <img className='product-image' src={item.image} alt="Product" />
         <div className='t-i-icon'>
            <FaHeart style={{color:liked ? "red":"black",cursor:"pointer"}}  onClick={() => setLiked(!liked)} size={25} />
            <FaEye  className='icon-eye'  size={25} />
            </div>
        </div>
         <p className='product-name' style={{fontFamily:"outfit", fontWeight:500,fontSize:20}}>{item.name}</p>
         <div className='price-container'>
         <p className='current-price'>{item.newprice}</p>
            <p className='old-price'>{item.oldprice}</p>
          </div>
          <div className='rating-container'>
            {[...Array(5)].map((star,index) =>{
                const currrate=index+1;
                return(
                    <label key={index}>
                        <input className='inp-radio' type="radio" name='rating' value={currrate} onClick={() => setrating(currrate)} />
                        <FaStar className='p-star' color={currrate <= (hovering|| rating) ? 'yellow':'black'} size={20} /> 
                    </label>
                )
            })}
            
      <span className='rating-count'>{item.ratcount}</span>
       
      </div>
      
        </div>
    ))}
      </div>
          
      <div className="view-all-container">
  <button className="view-all-button">View All Products</button>
</div>
      </div>
  )
}

export default Trending