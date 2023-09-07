 // eslint-disable-next-line no-unused-vars
 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products'
import Navbar from './Components/Navbar'
import ProductDetail from './Pages/ProductDetail'
 
 const App = () => {
   return (
     <div className=' container mx-auto'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/detail/:id' element={<ProductDetail/>}/>
        </Routes>
     </div>
   )
 }
 
 export default App
 
