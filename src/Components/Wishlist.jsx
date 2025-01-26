import React from 'react'

const Wishlist = ({ wishlistProducts }) => {
  return (
    <div>
      <h1>Your Wishlist</h1>
      <ul>
        {wishlistProducts.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Wishlist
