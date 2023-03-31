import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavScrollExample from './component/Header'
import 'react-slideshow-image/dist/styles.css'
// import Product from './component/Product'
import Home from './component/Home'
import Link from './component/Link'
// import Action from './component/Action'

// import Header from './component/Header'
// import { Add } from './try'


const App = () => {
  return (
    <>
      <NavScrollExample />
      < BrowserRouter>
        <Routes>
          <Route path="action1" element={<Home />} />
          <Route path="action2" element={<Link />} />
          {/* <Route path='action3' element={<Action/>}/> */}
        </Routes>

      </BrowserRouter>
  
    </>

  )
}

export default App
