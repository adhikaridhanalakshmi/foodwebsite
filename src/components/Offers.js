import React from 'react'
import "../components/Offer.css"
import dish4 from "../assests/Chicken and curry rice in a skillet.jpg"

const Offers = () => {
  return (
    <div class="offer">
    <h2 class="title">New Latest Items in Offer</h2>
        <div class="small-container">
            <div class="row">
                <div class="col-2">
                    <img src={dish4} width="550px" class="offer-img" alt=""/>
                </div>
                <div class="col-2">
                    <p>Exclusively New Recipy in my Site</p>
                    <h1>Chicken and curry rice in a skillet</h1>
                    <small>This is a offer for every one on my Website.
                        This is the new food added in this site with offer you just test and enjoy it .
                    </small>
                    <button>Buy Now &#8594;</button>
                </div>
            </div>
        </div>
        <h2 class="title">Best Brand In Chicken Briyani</h2>
    </div>
  )
}

export default Offers