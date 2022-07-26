import React from "react";


const Heder = (props)=>{
  const {menu}=props
  return(
    <div className="container" > 
      <div className="logo">
      <p>LOGO</p>
      </div>
      <ul>
      {menu.map((i)=>(
        <li>{i.id}</li>
        ))}
      </ul>
      <div className="nav-btn">
        <button>login</button>
        <button>daftar</button>
      </div>
    </div>
  )

}
export default Heder;
