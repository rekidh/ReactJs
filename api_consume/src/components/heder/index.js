import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../atoms/Button";
import './heder.css'
import SearchBar from "../atoms/SearchBar";
import BurgerMenu from "../atoms/BurgerMenu";
import { lgo } from "../../assets";

const Heder = ()=>{
  let cls="nav-menu"
  const [click,setClick]=useState(false)
  !click? cls="nav-menu hide":cls="nav-menu show"
  
  return(
    <div className="nav-container" > 
      <div className="logo">
        <img src={lgo} alt='bengras-logo'></img>
      </div>
      <BurgerMenu fun={()=>setClick(!click)} i={click} />
      <div className={cls}>
        <SearchBar />
        <div className='container-nav-list'>
        <ul>
          <li>Beranda</li>
          <li>Rekomendasi</li>
          <li>Outlet</li>
        </ul>
        </div>
        <div className="container-btn">
          <Link to='/login'>
            <Button  fun={()=>console.log("test")} name="Login" className="btn-nav"  />  
          </Link>
          <Link to='/register'>
            <Button  name="Daftar" className="btn-nav"/>
          </Link>
        </div>
      </div>
    </div>
  )

}
export default Heder;
