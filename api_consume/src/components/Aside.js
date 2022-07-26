import React,{useState,useEffect}from 'react'


function Aside() {
  const [datas, setDatas]= useState([])


  const getApi=()=>{
    fetch('http://localhost:5055/program').then((res)=>res.json()).then((res)=>{
      setDatas(res)
    })
  }

  useEffect(()=>{
    getApi()
  },[])

  return (
    <div>
      {/* <button onClick={getApi}>cek</button> */}
      <ul>
        {datas.map((data)=><li>{data.bahasa}</li>)}
      </ul>
    </div>
  )
}

export default Aside