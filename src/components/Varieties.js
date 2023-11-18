import React from 'react'
import "../components/Varieties.css"
import img2 from "../assests/briyani_1.jpg"
import img3 from "../assests/briyani_2.jpg"
import img4 from "../assests/briyani_3.jpg"

const varieties = () => {
  return (
    <div class="categories">
    <div class="small-container">
        <div class="row">
            <div class="col-3">
                <img src={img2} alt=""/>
            </div>

            <div class="col-3">
                <img src={img3} alt=""/>
            </div>
            <div class="col-3">
                <img src={img4} alt=""/>
            </div>
        </div>

    </div>

</div>
  )
}

export default varieties;