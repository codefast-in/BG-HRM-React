import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Topbar from './cumponent/Topbar'
import Loginpage from './page/Loginpage'
import DashBoard from './page/DashBoard';

export default function App() {
  return (
    <div>
      {/* <Loginpage/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage/>}></Route>
        <Route path="/DashBoard" element={<DashBoard/>}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
