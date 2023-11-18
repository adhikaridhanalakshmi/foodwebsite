import React from 'react'
import "../components/Category.css"
import img1 from "../assests/image1.png"

const Category = () => {
  return (
    <div class="row">
                <div class="col-2">
                    <h1> Please Use Our New Food Style</h1>
                    <p>Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and
                        aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as
                        it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out
                        white and fluffy. </p>
                    <button>Explore Now</button>
                </div>
                <div class="col-2">
                    <img src={img1} alt="img"/>
                </div>
            </div>
  )
}

export default Category;