import React from 'react'
import "../components/Brand.css"
import dish5 from "../assests/brand_1.png"
import dish6 from "../assests/brand_2.jpg"
import dish7 from "../assests/brand_3.jpg"
import dish8 from "../assests/brand_5.jpg"
import dish9 from "../assests/brand_6.jpg"

const Brands = () => {
  return (
    <div class="brand">
        <div class="small-container">
            <div class="row">
                <div class="col-5">
                    <img src={dish5} alt=""/>
                </div>
                <div class="col-5">
                    <img src={dish6} alt=""/>
                </div>
                <div class="col-5">
                    <img src={dish7} alt=""/>
                </div>
                <div class="col-5">
                    <img src={dish8} alt=""/>
                </div>
                <div class="col-5">
                    <img src={dish9}  alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brands