import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { CartContext } from '../context/CartContext';

 
const ProductDetails = () => {
 const [product, setProduct ] = useState({});
 const { id } = useParams();

 const { click } = useContext(CartContext)


   
   const handleOnClick = ()=> {
         confirm("Do You Wannt To Add This Product To Cart")
         alert("Product Added To cart")
   }

 useEffect(()=> {
    if(id){
          fetch(`http://fakestoreapi.com/products/${id}`)
          .then((res)=> res.json())
          .then((data)=> setProduct(data))
          .catch((err)=> alert("Product does not exist"))
          .catch((err)=> alert("Product does not exist"))

    }
     
 },[id])

  return (
    <div> 
       <img className='im' src={product.image} alt="" />
       <h3>{product.price}$</h3>
       <h3>{product.category}</h3>
       <h3>{product.title}</h3>

         <button className='bb' onClick={click} >Add To cart</button>

    </div>
  )
}

export default ProductDetails