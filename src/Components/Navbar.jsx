import React, { useState } from 'react'
import { RiContactsLine } from 'react-icons/ri'
import { IoBagHandleOutline } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'
import { RxDragHandleHorizontal } from 'react-icons/rx'
import HARISONS from '../assets/Images/HARISONS.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Navbar({ cartCount }) {
  const [wishlistCount, setWishlistCount] = useState(0)
  const [wishlistProducts, setWishlistProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleCartClick = () => {
    navigate('/cart')
  }

  const handleProfileClick = () => {
    navigate('/profile')
  }

  const handleWishlistClick = async () => {
    const userId = 'USER_ID'

    try {
      const response = await axios.get(
        `http://localhost:8000/api/wishlists/${userId}`,
      )
      const products = response.data
      setWishlistProducts(products)
      setWishlistCount(products.length)
      navigate('/wishlist')
    } catch (error) {
      console.error('Error fetching wishlist:', error)
    }
  }

  return (
    <div className="h-[200px]">
      {/* Top Notification Bar */}
      <div className="maintitle bg-gradient-to-r from-yellow-500 to-orange-500 w-full h-14 font-bold text-center">
        <span>&#10024;</span> Exciting new Design & Sales{' '}
        <span className="block">
          <a href="#">Shop now</a>
        </span>
      </div>

      {/* Icon Bar */}
      <div className="bg-white px-12 z-50 flex justify-between items-center iconbar w-full h-16 border-y-[1.5px] border-slate-300 fixed top-14">
        <div className="mainicon h-12 w-16">
          <img src={HARISONS} alt="Logo" />
        </div>
        <div className="subicon flex justify-center items-center gap-12">
          <RiContactsLine
            className="text-gray-600 text-2xl cursor-pointer"
            onClick={handleProfileClick}
          />
          <div
            className="relative inline-block cursor-pointer"
            onClick={handleCartClick}
          >
            <IoBagHandleOutline className="text-gray-600 text-2xl" />
            <span className="absolute -top-1 -right-1 bg-orange-400 h-4 w-4 rounded-full text-xs flex items-center justify-center text-white">
              {cartCount}
            </span>
          </div>
          <div
            className="relative inline-block cursor-pointer"
            onClick={handleWishlistClick}
          >
            <FaRegHeart className="text-gray-600 text-2xl" />
            <span className="absolute -top-1 -right-1 bg-orange-400 h-4 w-4 rounded-full text-xs flex items-center justify-center text-white">
              {wishlistCount}
            </span>
          </div>
          <RxDragHandleHorizontal className="text-gray-600 text-2xl" />
        </div>
      </div>

      {/* Fixed Search Bar */}
      <div className="bg-gray-100 px-12 py-3 fixed top-28 w-full z-40 shadow-md">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full max-w-md border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
