import React from "react";
import Nav from "./Navbar";
import Content from "./Content";
import Cart from "./cart";
import productList from "../productList";


function App()
{
    const [totalItems,setTotalItems]=React.useState(0);
    const[state,setState]=React.useState("home");
    return(
        <>
        <Nav state={state} setState={setState}/>
        <Cart totalItems={totalItems} setState={setState}/>
        <Content state={state} setState={setState} totalItems={totalItems} setTotalItems={setTotalItems} productList={productList}/>
        </>
    );
}

export default App;