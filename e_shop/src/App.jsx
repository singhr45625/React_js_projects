import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Product'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {
  return (
   <div>
    <CartProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      {/* You can add more routes here */}
    </Routes>
    </CartProvider>
   </div>
  )
}

export default App