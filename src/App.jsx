import React, { lazy, Suspense, useState } from 'react'
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
import Wishlist from './Components/Wishlist.jsx'

// Lazy-load the Admin App
const AdminApp = lazy(() => import('../Admin/admin-harison-react/src/App.jsx'))

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [wishlistProducts, setWishlistProducts] = useState([])
  // Function to update cart count
  const updateCartCount = () => {
    setCartCount((prevCount) => prevCount + 1)
  }

  // Function to update wishlist count
  const updateWishlistCount = () => {
    setWishlistCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      {/* Pass cartCount and wishlistCount to Navbar */}
      <Navbar cartCount={cartCount} wishlistCount={wishlistCount} />
      <div>
        <Routes>
          {/* Sign In Page */}
          <Route path="/" element={<SignIn />} />

          {/* Register Page */}
          <Route path="/register" element={<Register />} />

          {/* Profile Page */}
          <Route path="/profile" element={<Profile />} />

          {/* Admin Panel Route */}
          <Route
            path="/admin/*"
            element={
              <Suspense fallback={<div>Loading Admin Panel...</div>}>
                <AdminApp />
              </Suspense>
            }
          />

          {/* Home Page */}
          <Route
            path="/home"
            element={
              <>
                <Products updateCartCount={updateCartCount} />
                <Hero_video />
                <Secondary_products
                  updateCartCount={updateCartCount}
                  updateWishlistCount={updateWishlistCount}
                />
                <Popular_products
                  updateCartCount={updateCartCount}
                  updateWishlistCount={updateWishlistCount}
                />
                <Blogs />
                <Footer />
              </>
            }
          />

          {/* Products Page */}
          <Route
            path="/products"
            element={<Products updateCartCount={updateCartCount} />}
          />

          {/* Blogs Page */}
          <Route path="/blogs" element={<Blogs />} />

          {/* Cart Page */}
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/wishlist"
            element={<Wishlist wishlistProducts={wishlistProducts} />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App
