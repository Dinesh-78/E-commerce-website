import React from 'react'
import playstation from "../../assets/playstation.png";
import women from "../../assets/women.jpg";
const NewArrival = () => {
  return (
    <div>
      <span style={{background:"black",width:200,height:150}}>
        <img src={playstation}  width={500}   />
      </span>
      <span>
        <img src={women} width={600}  />
      </span>
      
    
    </div>
  )
}

export default NewArrival