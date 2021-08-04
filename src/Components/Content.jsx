import React from "react";
import Home from "./home"
import About from "./aboutUs";
import Products from "./Products";
import Contact from "./contact";
import ShoppingCart from "./ShoppingCart";

function Content(props){
    const [selectedItems,setSelectedItems]=React.useState([]);
    const[totalPrice,setTotalPrice]=React.useState(0);
    return(
        <>
        {props.state==="home" && <Home setState={props.setState}/>}
        {props.state==="about" && <About/>}
        {props.state==="products" && <Products totalItems={props.totalItems} setTotalItems={props.setTotalItems} productList={props.productList} setSelectedItems={setSelectedItems} total={totalPrice} setTotalPrice={setTotalPrice}/>}
        {props.state==="contact" && <Contact/>}
        {props.state==="shoppingCart" && <ShoppingCart selectedItems={selectedItems} productList={props.productList} totalPrice={totalPrice} setState={props.setState} setTotalItems={props.setTotalItems}/>}
        </>
    );
}

export default Content;