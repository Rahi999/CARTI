import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Navigate} from "react-router-dom"
const Feeds = () => {
 
  const { auth } = useContext(CartContext)

  if(auth) {
  return (
    <div>

      
    </div>
  )
  }
  else{
    return <Navigate  to="/login"/>
  }
}

export default Feeds