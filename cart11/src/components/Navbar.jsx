import React, { useContext } from 'react'
import Product from './Product'
import ProductDetails from './productDetails';
import Feeds from './Feeds';
import Login from './Login';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import AboutUS from './AboutUS';
import { Link } from "react-router-dom"
import { CartContext } from '../context/CartContext';
import { useNavigate} from "react-router-dom"


const Navbar = () => {

  const { cart} = useContext(CartContext)

  const {logout , auth } = useContext(CartContext) ;
  const navigate = useNavigate()
 const handleOnClick=()=> {
   if(auth){
     logout()
     navigate("/");

   }
   else{
     navigate("/login")
   }
 }







  return (
    <div >
     <div className='main'>
       
  <Link to="/" >Navbar</Link>
 <Link to="/product" >Product</Link>
  <Link to="/productdetails" >ProductDetails</Link>
  <Link to="/feeds" >Feeds</Link>
  <Link to="/Aboutus" >AboutUs</Link>
  <Link to="/faq" >FAQ</Link>
  <Link to="/contactus" >ContactUs</Link>

    <button className='theme' onClick={handleOnClick} > {auth ? "Logout" : "Login"}</button><i class="fa-solid fa-cart-shopping"></i> 
      
    {cart}
     </div>

    </div>
  )
}

export default Navbar