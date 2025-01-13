import React from 'react'
import { FaPlus, FaShoppingBag, FaHeart } from 'react-icons/fa'
function Secondary_products({ data }) {
  const { productimg, productname } = data
  return (
    <div className="p-2 relative inline-block h-auto w-auto group">
      <div className="productimg  h-auto w-64">
        <img src={productimg} alt={productname} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-opacity duration-300">
        <span className="p-2 bg-white rounded-full text-2xl shadow-md text-gray-800 hover:text-black hover:scale-110 transition-transform duration-200">
          <FaPlus />
        </span>
        <span className="p-2 bg-white rounded-full text-2xl shadow-md text-gray-800 hover:text-black hover:scale-110 transition-transform duration-200">
          <FaShoppingBag />
        </span>
        <span className="p-2 bg-white rounded-full text-2xl shadow-md text-gray-800 hover:text-black hover:scale-110 transition-transform duration-200">
          <FaHeart />
        </span>
      </div>
      <div className="product_name mt-2">
        <span className="block text-center font-medium">{productname}</span>
        <span className="block text-center text-gray-600 font-medium">
          Send Enquiry
        </span>
      </div>
    </div>
  )
}

export default Secondary_products
