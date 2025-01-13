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
import product11 from '../assets/Images/product11.jpg'
import product12 from '../assets/Images/product12.jpg'
import product13 from '../assets/Images/product13.jpg'
import product14 from '../assets/Images/product14.jpg'
import product15 from '../assets/Images/product15.jpg'
import product16 from '../assets/Images/product16.jpg'
import product17 from '../assets/Images/product17.jpg'
import product18 from '../assets/Images/product18.jpg'
import product19 from '../assets/Images/product19.jpg'

const popular_products = [
  { productimg: product1, productname: 'P1' },
  { productimg: product2, productname: 'p2' },
  { productimg: product3, productname: 'p3' },
  { productimg: product4, productname: 'p4' },
  { productimg: product5, productname: 'p5' },
  { productimg: product6, productname: 'p6' },
  { productimg: product7, productname: 'p7' },
  { productimg: product8, productname: 'p8' },
  { productimg: product9, productname: 'p9' },
  { productimg: product10, productname: 'p5' },
  { productimg: product11, productname: 'p6' },
  { productimg: product12, productname: 'p7' },
  { productimg: product13, productname: 'p8' },
  { productimg: product14, productname: 'p9' },
  { productimg: product15, productname: 'p9' },
  { productimg: product16, productname: 'p5' },
  { productimg: product17, productname: 'p6' },
  { productimg: product18, productname: 'p7' },
  { productimg: product19, productname: 'p8' },
]
function Popular_products() {
  return (
    <div className="relative h-auto mx-auto container mt-12">
      <div className="flex justify-between">
        <span className="text-4xl font-medium">Popular Products</span>
        <div className="options flex gap-4 text-[20px]">
          <a href="#">All Products |</a>
          <a href="#">Decoration |</a>
          <a href="#">Accessory |</a>
          <a href="#">Furniture</a>
        </div>
      </div>
      <div className="allproducts mt-12 flex flex-wrap gap-12 justify-center">
        {popular_products.map((element, index) => {
          return <Secondary_products data={element} />
        })}
      </div>
    </div>
  )
}

export default Popular_products
