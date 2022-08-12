
import React,{useState,useEffect} from 'react'
import gambar from "../data/heroImg.json"
import gam from "../img/2.jpg"


function Hero() {

  const [count , setCount]= useState(0)

  const hendelInc=()=>{
    if(count===gambar.length-1) return
    setCount((prev)=>prev +1)
  }

  const hendelDec=()=>{
    if(count===0) return
    setCount(count-1)
  }
  return (
    <div className='hero'>
      <div className='text-hero'>
        <h3>For You Pro </h3>
        <h3>Sosial Manager</h3>
        <p>lorem ipsum lorem lorenm anao dbad</p>
        <button>Dapatkan Sekarang</button>
      </div>
      <div className='gambar'>
      <button className='prev' onClick={hendelDec}>prev</button>
        <img src={gam}></img>
      <button className='next' onClick={hendelInc}>next prev</button>
      </div>
    </div>
  )
}

export default Hero
