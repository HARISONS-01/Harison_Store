import React from 'react'
import Secondary_products from './Secondary_products'
import product1 from '../assets/Images/product1.jpg'
import product2 from '../assets/Images/product2.jpg'
import product3 from '../assets/Images/product3.jpg'
import product4 from '../assets/Images/product4.jpg'
import product5 from '../assets/Images/product5.jpg'
import product6 from '../assets/Images/product6.jpg'
import product7 from '../assets/Images/product7.jpg'
import product8 from '../assets/Images/product8.jpg'
import product9 from '../assets/Images/product9.jpg'
import product10 from '../assets/Images/product10.jpg'
import product11 from '../assets/Images/product10.jpg'
import product12 from '../assets/Images/product10.jpg'
import product13 from '../assets/Images/product10.jpg'
import product14 from '../assets/Images/product10.jpg'
import product15 from '../assets/Images/product10.jpg'
import product16 from '../assets/Images/product10.jpg'
import product17 from '../assets/Images/product10.jpg'
import product18 from '../assets/Images/product10.jpg'
import product19 from '../assets/Images/product10.jpg'

const popular_products = [
  { imageUrl: product1, productname: 'P1' },
  { imageUrl: product2, productname: 'P2' },
  { imageUrl: product3, productname: 'P3' },
  { imageUrl: product4, productname: 'P4' },
  { imageUrl: product5, productname: 'P5' },
  { imageUrl: product6, productname: 'P6' },
  { imageUrl: product7, productname: 'P7' },
  { imageUrl: product8, productname: 'P8' },
  { imageUrl: product9, productname: 'P9' },
  { imageUrl: product10, productname: 'P10' },
  { imageUrl: product11, productname: 'P11' },
  { imageUrl: product12, productname: 'P12' },
  { imageUrl: product13, productname: 'P13' },
  { imageUrl: product14, productname: 'P14' },
  { imageUrl: product15, productname: 'P15' },
  { imageUrl: product16, productname: 'P16' },
  { imageUrl: product17, productname: 'P17' },
  { imageUrl: product18, productname: 'P18' },
  { imageUrl: product19, productname: 'P19' },
]

function Popular_products({ updateCartCount }) {
  return (
    <div className="relative h-auto mx-auto container mt-12">
      <div className="flex justify-between">
        <span className="text-4xl font-medium">Popular Products</span>
      </div>
      <div className="allproducts mt-12 flex flex-wrap gap-12 justify-center">
        {popular_products.map((element, index) => (
          <Secondary_products
            key={index}
            data={element}
            updateCartCount={updateCartCount}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular_products
