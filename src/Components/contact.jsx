import React from "react";

function Contact()
{
    return(
        <div className="contact-form">
        <form className="form1">
           <label htmlFor="firstname">FIRST NAME</label> <br/><br/>
           <input type="text" placeholder="Enter your first name" id="firstname" max="50" required/><br/><br/><br/>
           <label htmlFor="lastname">LAST NAME</label><br/><br/>
           <input type="text" placeholder="Enter your last name" id="lastname" max="50" required/><br/><br/><br/>
           <label htmlFor="email">EMAIL ID</label><br/><br/>
           <input type="email" placeholder="Enter your email-id" id="email" required/><br/><br/><br/>
        </form>
        <form className="form2">
            <label htmlFor="phoneNo">CONTACT NUMBER</label><br/><br/>
            <input type="tel" pattern="[0-9]{10}" id="phoneNo" placeholder="1234567890" required/><br/><br/><br/>
            <label htmlFor="query">QUERY</label><br/><br/>
            <textarea id="query" placeholder="Write down your query. We will get back to you" required/><br/>
        </form>
        <div className="submit">
        <input type="submit" id="submit"/>
        </div>
        </div>
    )
}

export default Contact;