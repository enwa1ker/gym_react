import React from "react";
import aboutImage from  '../images/about.png'

function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutImage} alt=""/>
            </div>
            <div className='about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate dolorem ea exercitationem ipsam qui repellendus unde. Deserunt dolorem error labore nihil, numquam quod temporibus.</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}