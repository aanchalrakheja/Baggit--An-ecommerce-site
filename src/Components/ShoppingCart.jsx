import React from "react";

function ShoppingCart(props)
{
    const [step,setStep]=React.useState(1);
    function handleStepIncrease()
    {
        setStep(step+1);
    }
    function handleStepDecrease()
    {
        if(step>1)
        {
            setStep(step-1);
        }
        else{
            props.setState("products");
        }
    }
    return(
        <div className="extendedCart">
            <button className="goBack" onClick={handleStepDecrease}>BACK</button>
            <h3 style={{letterSpacing:"3px"}}>You wont regret your purchase !</h3>
            <div className="payProgress">
                <div className="step1">1</div>
                <div className="bar"></div>
                <div className={(step===2 || step===3 || step===4) ? "step2" :"stepincomplete"}>2</div>
                <div className={(step===2 || step===3 || step===4) ? "bar" :"barincomplete"}></div>
                <div className={(step===3 || step===4) ? "step3" :"stepincomplete"}>3</div>
                <div className={(step===3 || step===4) ? "bar" :"barincomplete"}></div>
                <div className={step===4 ? "step4" :"stepincomplete"}>4</div>
            </div>
            {step===1 && <>
                <div className="selectedItems">
                    {props.selectedItems.map((item)=>{
                        return (
                        <div className="product-body" key={props.productList[item].id} >
                            <div className="product-img" ><img src={props.productList[item].img} alt="productimage" id={props.productList[item].id}/></div>
                            <div className="product-details">
                                <div className="product-info">
                                    <div className="product-name">{props.productList[item].name}</div>
                                    <div className="product-price">{props.productList[item].price}</div>
                                </div>
                            </div>
                        </div>);
                    })}
                </div>
                <div className="totalPrice">{props.totalPrice!==0 ? `Your total bill is : $${props.totalPrice}`:"Your cart is EMPTY !!"}</div>
                <div className="proceedToPayment"><button onClick={props.totalPrice!==0 ? handleStepIncrease:null}>PROCEED TO PAY</button></div>
            </>}
            {step===2 &&
                <div className="paymentForm">
                    <form className="paymentForm1" action="" method="get" onSubmit={handleStepIncrease} id="paymentForm1">
                        <label htmlFor="fullname">Name*</label><br/>
                        <input type="text" placeholder="Enter your full name" id="fullname" required/><br/><br/>
                        <label htmlFor="paycontact">Contact Number*</label><br/>
                        <input type="tel" pattern="[0-9]{10}" placeholder="1234567890" id="paycontact" required/><br/><br/>
                    </form>
                    <div className="payNow"><button type="submit" form="paymentForm1" value="submit" >NEXT</button></div>
                </div>}
                {step===3 &&
                <div className="paymentForm">
                <form className="paymentForm2" id="paymentForm2" action="" method="get" onSubmit={handleStepIncrease}>
                        <label htmlFor="email">E-mail*</label><br/>
                        <input type="email" placeholder="Email address" id="email" required/><br/><br/>
                        <label htmlFor="address">Address*</label><br/>
                        <textarea placeholder="Enter your address" required/>
                    </form>
                    <div className="payNow"><button type="submit" form="paymentForm2" value="submit" >PAY COD</button></div>
                </div>}
                {step===4 && <div className="thankyou">
                <p>THANK YOU FOR SHOPPING WITH US !</p>
                <div classname="Homebutton"><button className="gotoHome" onClick={()=>{props.setState("home"); props.setTotalItems(0)}}>GO TO HOME</button></div>
                </div>}
        </div>
    )
}

export default ShoppingCart;