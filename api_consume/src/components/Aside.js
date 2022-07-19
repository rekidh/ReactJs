import React from 'react'
import {useState,useEffect} from 'react'

const Aside =(props)=>{
  let data 
  const hendelClik=()=>{
    let data = fetch('http://192.168.100.66:5055/program')
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>console.log(err))
    setIsActif(curent=> !curent)
    return data = data
  }
  const [isActive,setIsActif] = useState(false);
  
  return(
    <>
    <button onClick={hendelClik}>XXX</button> 
      <div className="aside"  
        style={{ 
          width: isActive ? '0' : '',
          color: isActive ? 'black' : '',
          display:isActive? 'none':'',
        }} >
        <List list={data} />
      </div> 
    </>

  )

}
export default Aside ;

  


const List =(props)=>{
  const {lists} = props
  console.log("list",lists)
    return(
    <h2>
      {lists.map((list)=>(<p>{list.id}</p>))}
    </h2>
    )
}