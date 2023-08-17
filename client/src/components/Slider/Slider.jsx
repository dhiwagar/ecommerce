import React, { useState } from 'react'
import './Slider.css'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
function Slider() {

  const [currentslide,setcurrentslide]=useState(0)

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevslide=()=>{
    setcurrentslide(currentslide === 0 ? 2 :(pre)=>pre -1)
    
  }
  const nextslide=()=>{
    setcurrentslide(currentslide === 2 ? 0 :(pre)=>pre +1)
  }
  return (
    <div className='slider'>
      <div className="container-sli"  style={{transform:`translateX(-${currentslide * 100}vw)`}}>
        <img src={data[0]}alt="" />
        <img src={data[1]}alt="" />
        <img src={data[2]}alt="" />
      </div>
      <div className="slider-icons">
        <div className="slider-icon1" onClick={prevslide}>
          <WestOutlinedIcon/>
          
        </div>
        <div className="slider-icon1" onClick={nextslide}>
          <EastOutlinedIcon/>

        </div>
      </div>

    </div>
  )
}

export default Slider