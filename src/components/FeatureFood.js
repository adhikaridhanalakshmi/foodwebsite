import React from 'react'
import "../components/FeatureFood.css"
import dish1 from "../assests/Chicken_Dish.jpg"
import dish2 from "../assests/Chicken_With Basmati_Rice.jpg"
import dish3 from "../assests/indian_chicken biryani_and_curry.webp"

const FeatureFood = () => {
  return (
    <div class="small-container">
        <h2 class="title">features of Foods</h2>
        <div class="row">
            <div class="col-4">
               <a href="product_details.html"> <img src={dish1} alt=""/></a>
               <a href="product_details.html"><h4> Family Chicken Dish </h4></a>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star">4.5.....</i>
                </div>

                <p> &#x20B9; 250.00</p>


            </div>
            <div class="col-4">
                <img src={dish2} alt=""/>
                <h4> Family Chicken with Basmati Rice</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star">4.5.....</i>
                </div>

                <p> &#x20B9; 500.00</p>

            </div>
            <div class="col-4">
                <img src={dish3} alt=""/>
                <h4> Family Pakages Indian Briyani and Curry</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star">4.5.....</i>
                </div>

                <p> &#x20B9; 680.00</p>
            </div>
        </div>
    </div>
  )
}

export default FeatureFood;