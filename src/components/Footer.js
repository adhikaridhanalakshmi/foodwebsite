import React from 'react'
import "../components/Footer.css"
import Playstore from "../assests/play-store.png"
import Appstore from "../assests/app-store.png"
import navbarlogo from "../assests/logo.png"

const Footer = () => {
  return (
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and ios mobile phone.</p>
                <div class="app_logo">
                    <img src={Playstore} alt=""/>
                    <img src={Appstore} alt=""/>
                </div>
                </div>
                <div class="footer-col-2">
                    <img src={navbarlogo} alt=""/>
                    <p>Our Purpose is to sustainably make the Pleasure and Benefits of Recipy Items to the best Recipy.
                    </p>
                </div>
                <div class="footer-col-3">
                    <h3>Useful Links:</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Retun policy</li>
                        <li>Join Affliate</li>
                    </ul>
                </div>
                <div class="footer-col-4">
                    <h3>Follow us:</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                    </ul>
                    
                </div>

            </div>
            <p class="copyright"> Copyright &#169; 2022 - For Best Food Service</p>
        </div>
    </div>
  )
}

export default Footer