import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import axios from '../utils/Config'

const Profile = () => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // const token = localStorage.getItem('token')
        const response = await axios.get(
          'http://localhost:8000/api/auth/profile',
        )
        // console.log(token)
        const user = response.data
        console.log(response)
        console.log(user)
        setUserData(user)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
    fetchUserData()
  }, [])

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <p className="px-4 py-2 border rounded-lg bg-gray-100 text-gray-700">
            {userData.username}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <p className="px-4 py-2 border rounded-lg bg-gray-100 text-gray-700">
            {userData.email}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Wishlist
          </label>
          <p className="px-4 py-2 border rounded-lg bg-gray-100 text-gray-700">
            {userData.wishlist.length > 0
              ? userData.wishlist.join(', ')
              : 'No items in wishlist'}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Cart</label>
          <p className="px-4 py-2 border rounded-lg bg-gray-100 text-gray-700">
            {userData.cart.length > 0
              ? userData.cart.join(', ')
              : 'No items in cart'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
