import React from "react";

function Cart(props)
{
    function handleShoppingCart()
    {
        props.setState("shoppingCart");
    }
    return (
        <button className="cart" onClick={handleShoppingCart}>
            <i className="fas fa-shopping-bag"/>
            <div className="totalItems">{props.totalItems}</div>
        </button>
    )
}
 
export default Cart;