import React, { useEffect, useState } from 'react'
import {Link, Outlet} from "react-router-dom"
import { Navigate} from "react-router-dom"



const Product = () => {
  const [prod, setProd] = useState([]);

  

  useEffect(()=> {
      const data = ()=> {
          fetch("http://fakestoreapi.com/products")
          .then((res)=> res.json())
          .then((d)=> {
              console.log(d)
              setProd(d)
          })
      }
      data()
  },[])



  return (
    <div>AllProducts
   <div className='container' >
       {prod.map((p)=> (
           <div key={p.id} >
               <Link to={`/product/${p.id}`}><img
                
                 src={p.image} alt="" 
                 />
                 <h3>{p.title}</h3>
                 <h3>{p.category}</h3>
                 <h3>{p.price}$</h3>
                 </Link>
           </div>
           
       ))}
   </div>
   <Outlet />


    </div>
  )
}

export default Product