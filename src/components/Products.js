import React from 'react'
import img2 from "../assests/briyani_1.jpg"
import img3 from "../assests/briyani_2.jpg"
import img4 from "../assests/briyani_3.jpg"

import "../components/Product.css"

const  Products = () => {
  return(
    <div class="small-container cart-page">
    <table>
        <tr>
            <th >Foods Name</th>
            <th>Quantity</th>
            <th>Subtotal</th>

        </tr>
        <tr>
                <td>
                    <div class="cart-info">
                        <img src={img2} alt=""/>
                        <div>
                            <p>Indian Spicy Briyani</p>
                            <small>Price: &#x20B9; 499.00</small><br/>
                        </div>
                    </div>
                </td>
                <td> <input type="number" value="1"/> </td>
                <td>&#x20B9; 499.00</td>

            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src={img3} alt=""/>
                        <div>
                            <p>Indian  Briyani with rice</p>
                            <small>Price: &#x20B9; 999.00</small><br/>
                        </div>
                    </div>
                </td>
                <td> <input type="number" value="1"/> </td>
                <td>&#x20B9; 999.00</td>

            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src={img4} alt=""/>
                        <div>
                            <p>Hot setup Briyani</p>
                            <small>Price: &#x20B9; 2500.00</small><br/>
                        </div>
                    </div>
                </td>
                <td> <input type="number" value="1"/> </td>
                <td>&#x20B9; 2500.00</td>

            </tr>
        </table>
        <div class="total-price">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td> &#x20B9; 3998.00</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td> &#x20B9; 222.11</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td> &#x20B9; 3775.89</td>
                </tr>
        </table>
        </div>
        </div>
  )
}

export default Products