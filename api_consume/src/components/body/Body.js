import React from 'react'
import Card from '../card/Card'
import './body.css'
import { img1,img2,img3,img4,img5 } from '../../assets'


const Body = () => {
  const data =[
    {
      img:img1,
      title:"Style",
      description:"lorem ipsum lorem ipsum",
      rate:5
    },
    {
      img:img2,
      title:"Food",
      description:"lorem ipsum lorem ipsum",
      rate:4
    },
    {
      img:img3,
      title:"Liburan",
      description:"lorem ipsum lorem ipsum",
      rate:2
    },
    {
      img:img4,
      title:"Stasiun",
      description:"lorem ipsum lorem ipsum",
      rate:4
    },
    {
      img:img5,
      title:"Cetar",
      description:"lorem ipsum lorem ipsum",
      rate:4
    }
  ]
  
  return (
    <div className='body'>
     <div className='heding'>
      <span>Menu/Minuman/Kopi</span>
        <h2>Menu</h2>
      </div>
      <div className='card-container'>
        {data.map((i)=>
          <Card img={i.img} title={i.title} description={i.description} rate={i.rate}/>
        ) }
        
     </div>
    </div>
  )

}
export default Body