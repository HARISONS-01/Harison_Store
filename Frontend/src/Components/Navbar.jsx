import React, { useState } from 'react'
import { RiContactsLine } from 'react-icons/ri'
import { IoBagHandleOutline } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'
import { RxDragHandleHorizontal } from 'react-icons/rx'
import HARISONS from '../assets/Images/HARISONS.png'

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div>
      {/********************************** Exciting title */}
      <div className="maintitle bg-gradient-to-r from-yellow-500 to-orange-500 w-full h-14 font-bold text-center">
        <span>&#10024;</span>
        Exciting new Design & Sales
        <span className="block">
          <a href="#">Shop now</a>
        </span>
      </div>

      {/***************************** put the navbar with icons (fixed) */}
      <div className="bg-white px-12 z-50 flex justify-between items-center iconbar w-full h-16 border-y-[1.5px] border-slate-300 fixed top-14">
        <div className="mainicon h-12 w-16">
          <img src={HARISONS} alt="Logo" />
        </div>
        <div className="subicon flex justify-center items-center gap-12">
          <RiContactsLine className="text-gray-600 text-2xl" />

          <div className="relative inline-block">
            <IoBagHandleOutline className="text-gray-600 text-2xl" />
            <span className="absolute -top-1 -right-1 bg-orange-400 h-4 w-4 rounded-full text-xs flex items-center justify-center text-white">
              0
            </span>
          </div>
          <div className="relative inline-block">
            <FaRegHeart className="text-gray-600 text-2xl" />
            <span className="absolute -top-1 -right-1 bg-orange-400 h-4 w-4 rounded-full text-xs flex items-center justify-center text-white">
              0
            </span>
          </div>
          <div
            className="relative inline-block cursor-pointer"
            onClick={toggleSidebar}
          >
            <RxDragHandleHorizontal className="text-gray-600 text-2xl" />
          </div>
        </div>
      </div>

      {/********************* have put  the search bar here  */}
      <div className="mt-20 px-4">
        <input
          type="text"
          placeholder="Search for products, brands and more..."
          className="w-full h-12 px-4 border rounded-lg shadow-md"
        />
      </div>

      {/* *********Slidebar here */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 w-1/2 z-50`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-600 text-xl focus:outline-none"
          >
            &times;
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <a href="#home" className="text-gray-700 hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-orange-500">
                About
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="text-gray-700 hover:text-orange-500"
              >
                Products
              </a>
            </li>
            <li>
              <a href="#blogs" className="text-gray-700 hover:text-orange-500">
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-500"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
