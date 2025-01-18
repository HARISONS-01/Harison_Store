import Blogs from './Components/Blogs'
import Footer from './Components/Footer'
import Hero_video from './Components/Hero_video'
import Navbar from './Components/Navbar'
import Popular_products from './Components/Popular_products'
import Products from './Components/Products'
// import Secondary_products from './Components/Secondary_products'

function App() {
  return (
    <>
      <div className="div">
        {/* <p className="text-red-400">this is new chapter</p> */}
        <Navbar />
        <Products />
        <Hero_video />
        {/* <Secondary_products /> */}
        <Popular_products />
        <Blogs />
        <Footer />
      </div>
    </>
  )
}

export default App
