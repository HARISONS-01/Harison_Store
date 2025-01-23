import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'
import Hero_video from './Components/Hero_video'
import Popular_products from './Components/Popular_products'
import Products from './Components/Products'
import CartPage from './Components/CartPage'
import Secondary_products from './Components/Secondary_products'
import Register from './Components/Register'
import SignIn from './Components/SignIn'
import Profile from './Components/Profile'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const updateCartCount = () => {
    setCartCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      {/* Pass cartCount to Navbar to update the cart icon */}
      <Navbar cartCount={cartCount} />

      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/home"
            element={
              <>
                {/* Pass updateCartCount to Products and Secondary_products */}
                <Products updateCartCount={updateCartCount} />
                <Hero_video />
                <Secondary_products updateCartCount={updateCartCount} />
                <Popular_products updateCartCount={updateCartCount} />
                <Blogs />
                <Footer />
              </>
            }
          />
          <Route
            path="/products"
            element={<Products updateCartCount={updateCartCount} />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
