import { useContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import { Link } from "react-router-dom"
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import Feeds from './components/Feeds';
import Login from './components/Login';
 import { CartContext } from './context/CartContext';
import AboutUS from './components/AboutUS';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Coupon from './components/Coupon';
import { Deal } from './components/Deal';
function App() {
  const [t,setT] = useState(false);


  const Theme = ()=> {
  setT(!t)
  }
 


  return (
    <div className={`App ${t ? "dark" : "Light"}`}> 
     
     <button className='Theme' onClick={Theme} >
        {t ? "Light" : "Dark"} 
      </button>
      
      {/* <Navbar /> */}
      <div className='route' >
      <Routes>

<Route path='/' element={<Navbar/>}/>
<Route path='/product' element={<Product/>} />
<Route  path='/product/:id' element={<ProductDetails/>} />
<Route  path='/feeds' element={<Feeds/>} />
<Route  path='/aboutus' element={<AboutUS/>} />
<Route  path='/faq' element={<FAQ/>} />
<Route  path='/contactUs' element={<ContactUs/>} />

<Route  path='/login' element={<Login/>} />

</Routes>

      </div>
      <Deal />
      <Coupon />
      <Footer />
   
    </div>
  )
}

export default App
