import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from '../../pages/Home';


const Rs = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/register" element={<h1>register</h1>} />
      </Routes>
    </Router>

  )
}

export default Rs

