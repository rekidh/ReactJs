import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home,Login,Register} from '../../pages/index';


const Rs = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>

  )
}

export default Rs

