
import React from 'react'
import { useState,useEffect } from 'react'

const Register = () => {
    const [datas,setDatas]=useState([])  //<perlu di perhatikan saat ingin mengeset data awal perhatikan jenis data apa yang ingin anda masukan nanti nya'
useEffect( ()=>{
  fetch('http://192.168.100.66:5055/')
  .then((res)=>res.json()).then((res)=>setDatas(res))
},[])
  return (
    <div>

      <ul>
        {
          datas.map((index)=>
          <li>
            <p>name: {index.nama} </p>
            <p> alamat: {index.alamat}</p>
            <p>umur: {index.umur}</p>
            <p>barang : {index.barang.map((i)=><li>{i}</li>)}</p>
            <p>karcis : {index.karcis.bayar ? index.karcis.posisi :" karcis belum di bayar"}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Register