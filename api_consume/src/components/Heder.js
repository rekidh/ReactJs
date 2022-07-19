import React from "react";
const Heder = (props)=>{
  return(
    <> 
    <div className ="heder">
      <p>Catatan Program</p>
    </div>
    <Nav>
        <div className="logo">jurnal</div>
        <div className="logo">tols</div>
        <div className="logo">tutorial</div>
        <div className="logo">about</div>
    </Nav>
    </>
  )
}
export default Heder;

const Nav =(props)=>{
  return(
      <div className = "navigation">
        {props.children}
      </div>
  )
}