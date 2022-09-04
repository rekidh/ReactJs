################# PEMANTAUAN PROGRES ####################################################################

3/9/22 - berhasil menyelesaikan trouble error yang diduga kerena meletakan sebuah UseState terlalu nested/dalam - ternyata karena nama fuction component tidak di mulai dari huruf KAPITAL
next ? > _ingin menampilkan modal registrasi sukses lalu mengoper User ke page LOGIN_

############################## NOTE ####################################################################

```

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
            <p>name   :  {index.nama}   </p>
            <p>alamat :  {index.alamat} </p>
            <p>umur   :  {index.umur}   </p>
            <p>barang :  {index.barang.map((i)=><li>{i}</li>)}  </p> {/* bentuk data dari index ini dalah arr jadi kita harus loop ulang data nya */}
            <p>karcis :  {index.karcis.bayar ? index.karcis.posisi :" karcis belum di bayar"}</p> {/* bentuk data dari indexx ini adalah object */}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Register
```
