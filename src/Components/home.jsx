import React from "react";
import Social from "./social-media";

function Home(props)
{
    return(
        <>
        <main>
        <Social/>
        <section className="title">
            <h2 id="name" className="animate__animated animate__zoomInDown">Baggit</h2>
            <button className="shopbutton animate__animated animate__flash" id="shop" onClick={()=>{
                props.setState("products");
            }}>SHOP NOW <i className="fas fa-shopping-bag"></i></button>
        </section>
        </main>
        </>
    )
}

export default Home;