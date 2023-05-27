import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
const {totalQuantity}=useContext(CartContext)
return(
    <Link to="/cart" className="cartWidget" style={{display: totalQuantity>0?"block":"none"}}>
        <img className="cartImg" src={cart} alt="cart-widget"/>
        {totalQuantity}
    </Link>
)
}

export default CartWidget