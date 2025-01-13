import React from 'react'
import { RiContactsLine } from 'react-icons/ri'
import { IoBagHandleOutline } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'
import HARISONS from '../assets/Images/HARISONS.png'

export default function Navbar() {
  return (
    <div>
      <div className="maintitle bg-gradient-to-r from-yellow-500 to-orange-500 w-full h-14 font-bold text-center">
        <span>&#10024;</span>
        Excitiing new Design & sales
        <span className="block">
          <a href="#">Shop now</a>
        </span>
      </div>

      <div className="bg-white px-12 flex justify-between items-center iconbar w-full h-16 border-y-[1.5px] border-slate-300 fixed top-14">
        <div className="mainicon h-12 w-16">
          <img src={HARISONS} alt="" />
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
        </div>
      </div>

      <div className="mt-20 px-4">
        <input
          type="text"
          placeholder="Search for products, brands and more..."
          className="w-full h-12 px-4 border rounded-lg shadow-md"
        />
      </div>
    </div>
  )
}
