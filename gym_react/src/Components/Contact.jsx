import React from "react";

function Contact() {
    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form>
                <input type="text" placeholder='Full name' required/>
                <input type="email" placeholder='Typw Your E-Mail' required/>
                <textarea type="text" placeholder='Write Here......' name='message'></textarea>
                <input type="submit" value='Send' />
            </form>
        </div>
    )
}