import React from 'react'
import { FaPlus, FaShoppingBag, FaHeart } from 'react-icons/fa'

import axios from 'axios'
function Secondary_products({ data, updateCartCount }) {
  const {
    imageUrl = '/placeholder.png', // Default placeholder if imageUrl is missing
    productname = 'Unnamed Product',
    price = 0,
    stock = 0,
    description = 'No description available',
  } = data || {} // If `data` is undefined, destructure an empty object

  const handleAddToCart = async () => {
    try {
      const productDetails = {
        productId: data.id || 'default-id',
        name: productname,
        description,
        price,
        stock,
        imageUrl,
        quantity: 1,
      }

      // Assuming axios.post logic remains the same
      const response = await axios.post(
        'http://localhost:8000/api/products/create',
        productDetails,
      )

      if (response.status === 201 || response.data.success) {
        updateCartCount()
        alert(`${productname} has been added to the cart!`)
      } else {
        alert('Failed to add product to cart.')
      }
    } catch (error) {
      console.error(
        'Error adding product to cart:',
        error.response?.data || error.message,
      )
      alert('Failed to add product to cart.')
    }
  }

  return (
    <div className="p-2 relative inline-block h-auto w-auto group">
      <div className="productimg h-auto w-64">
        <img src={imageUrl} alt={productname} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-opacity duration-300">
        <button
          className="p-2 bg-white rounded-full text-2xl shadow-md text-gray-800 hover:text-black hover:scale-110 transition-transform duration-200"
          onClick={handleAddToCart}
          aria-label="Add to Cart"
        >
          <FaPlus />
        </button>
        <button
          className="p-2 bg-white rounded-full text-2xl shadow-md text-gray-800 hover:text-black hover:scale-110 transition-transform duration-200"
          onClick={handleAddToCart}
          aria-label="Add to Cart"
        >
          <FaShoppingBag />
        </button>
        <button
          className="p-2 bg-white rounded-full text-2xl shadow-md text-gray-800 hover:text-black hover:scale-110 transition-transform duration-200"
          aria-label="Add to Favorites"
        >
          <FaHeart />
        </button>
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
