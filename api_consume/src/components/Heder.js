import React from "react";


const Heder = (props)=>{
  const {menu}=props
  return(
    <div className="container-nav" > 
      <div className="logo">LOGO</div>
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
