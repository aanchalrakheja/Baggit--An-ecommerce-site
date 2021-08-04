import React from "react";

function Products(props){
    
    const [expandItem,setExpandItem]=React.useState(0);
    function handleExpand(event)
    {
        setExpandItem(event.target.id);
        window.scrollTo(0,0);
    }
    function handleClick(event)
    {
        alert(`${props.productList[event.target.id].name} has been added to the cart.`);
        props.setTotalItems(props.totalItems+1);
        props.setSelectedItems((prev)=>{
            return [...prev,event.target.id];
        });
        props.setTotalPrice((prev)=>prev+Number(props.productList[event.target.id].price.slice(1)));
    }
    return(
        <div className="products">
        <div className="product-expand">
            <div className="product-expand-img"><img src={props.productList[expandItem].img} alt="productimage"/></div>
            <div className="product-expand-details">
                <div className="product-expand-info">
                    <div className="product-expand-name">{props.productList[expandItem].name}</div>
                    <div className="product-expand-description">{props.productList[expandItem].description}</div>
                    <div className="product-expand-price">{props.productList[expandItem].price}</div>
                </div>
                <div className="product-expand-addToCart"><button className="addToCart" id={props.productList[expandItem].id} onClick={handleClick}>ADD TO CART</button></div>
            </div>
        </div>
        {props.productList.map((item)=>{
            return (
            <div className="product-body" key={item.id} >
                <div className="product-img" ><img src={item.img} alt="productimage" id={item.id} onClick={handleExpand}/></div>
                <div className="product-details">
                    <div className="product-info">
                        <div className="product-name">{item.name}</div>
                        <div className="product-price">{item.price}</div>
                    </div>
                    <div className="buttons" onClick={handleClick} id={item.id}>
                        <button className="buy" id={item.id}>
                            <i className="fas fa-shopping-bag" id={item.id}></i>
                        </button>
                    </div>
                </div>
            </div>
            );
        })}
        </div>
    )
}

export default Products;