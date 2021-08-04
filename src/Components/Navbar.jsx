import React from "react";

function Nav(props)
{
    // const[Class,setClass]=React.useState("navbar");
    // if(window.scrollY===0)
    // {
    //     setClass("navbar");
    // }
    // else{
    //     setClass("navbar-coloured");
    // }
    function handleClick(event)
    {
        props.setState(event.target.id);
    }
    return(
        <div className="navbar">
            <ul className="navItems">
                <li><button className={props.state==="home"?"active":null} onClick={handleClick} id="home"><i className="fas fa-home" id="home"></i></button></li>
                <li><button className={props.state==="about"?"active":null} onClick={handleClick} id="about"><i className="fas fa-address-card" id="about"></i></button></li>
                <li><button className={props.state==="products"?"active":null} onClick={handleClick} id="products"><i className="fas fa-store" id="products"></i></button></li>
                <li><button className={props.state==="contact"?"active":null} onClick={handleClick} id="contact"><i className="fas fa-envelope" id="contact"></i></button></li>
            </ul>
        </div>
    )
}

export default Nav;