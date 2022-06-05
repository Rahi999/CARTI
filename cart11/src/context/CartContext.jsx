import React,{ createContext, useState } from "react";
import { useNavigate} from "react-router-dom"
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const navigate = useNavigate()

   const [theme, setTheme] = useState(true)
   const [cart, setCart] = useState(0) ;

   const click = () => {
       setCart(cart+1)
       alert("Product Added To Cart!!!! Continue Shopping")
       
   }

   const changeTheme=()=> {
       setTheme(!theme)
       }

       
       const [auth,setAuth] = useState(false);
       const login =()=> {
           setAuth(true);
           navigate("/")
       }

       const logout = ()=> {
           setAuth(false);
           navigate("/");

       }
    return (


        <CartContext.Provider value={{ click,cart,changeTheme, auth,login,logout}} >
            {children}

        </CartContext.Provider>
    )
}

export default CartProvider