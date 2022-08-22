import React from 'react'
import { Heder,Body } from '../../components'
import video from '../../assets/video/video.mp4'
import './home.css'

const Home = () => {

  return (
    <>
    <Heder />
    <Body />
    <video src={video } muted autoPlay loop></video>
    </>
      
  )
}

export default Home