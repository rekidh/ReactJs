import React,{useState} from "react";
import { Link,useParams } from "react-router-dom";
import { Button } from "../atoms/Button";
import logo from "../../assets/icons/bengras-logo.png"
import HederList from "./HederList";
import './heder.css'
import SearchBar from "../atoms/SearchBar";
import BurgerMenu from "../atoms/BurgerMenu";

const Heder = ()=>{
  let cls="nav-menu"
  const [click,setClick]=useState(false)
  !click? cls="nav-menu hide":cls="nav-menu show"
      return(
        <div className="nav-container" > 
        <div className="logo">
          <img src={logo} alt='bengras-logo'></img>
          <p>BENG<span>RAS</span></p>
        </div>
          <BurgerMenu fun={()=>setClick(!click)} i={click} />
        <div className={cls}>
          <SearchBar />
          <HederList />
          <div className="container-btn">
            <Button fun={()=>console.log("test")} name="Login" className="btn-nav"/>
            <Button  name="Daftar" className="btn-nav"/>
          </div>
        </div>
      </div>
    )

}
export default Heder;
