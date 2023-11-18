import React from 'react'
import Navbar from '../components/Navbar'
import img2 from "../assests/indian_chicken biryani_and_curry.webp"
import FeatureFood from '../components/FeatureFood'
import Footer from '../components/Footer'

function LegendChoice() {
  return (
    <>
    <Navbar/>
        <div class="small-container single-product">
        <div class="row">
            <div class="col-2">
                <img src={img2} width="100%" alt=""/>
            </div>
            <div class="col-2">
                <p>Home / Family Pakages</p>
                <h1> Indian chicken briyani and curry</h1>
                <h4>&#x20B9; 450.00</h4>
                <input type="number" value="1"/>
                <a href="fa-solid fa-cart-shopping">1<button>Add to Cart</button></a>
                <h3>Food Details</h3>
                <p>Chicken Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken,
                    caramelized onions, and flavorful saffron rice. For my Biryani, I simplify the order of operations,
                    while retaining the traditional layered approach to assembling it.</p>
                    
            </div>
            <FeatureFood/>
            <Footer/>
        </div>
        </div>
    </>
  )
}

export default LegendChoice