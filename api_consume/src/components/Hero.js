
import React,{useState,useEffect} from 'react'
import gambar from "../data/heroImg.json"


function Hero() {
  let g = 'https://unsplash.com/photos/2n-KOT-Xlq0'

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
      <button onClick={hendelDec}>preview</button>
      <img src={g} />
      <button onClick={hendelInc}>next preview</button>
    </div>
  )
}

export default Hero
