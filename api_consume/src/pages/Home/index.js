import React from 'react'
import { Heder,Body, Footer } from '../../components'
import video from '../../assets/video/video.mp4'
import './home.css'

const Home = () => {

  return (
    <>
    <Heder />
    <Body />
    <Footer />
    <video src={video } muted autoPlay loop></video>
    </>
      
  )
}

export default Home