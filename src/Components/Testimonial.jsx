import React from 'react'
import "../Css/testimonial.css"
import client_img from "../images/client.jpg"
import client_icon from "../images/quote.png"
function Testimonial() {
  return (
   <>
   
   <div className="container-fluid py-5 testimonial_container">
    <div className="row">
        <div className="col col-md-6">
         <div className="test_heading">
         <h6>TESTIMONIAL</h6>
         <h1>What Our Client Says About Us</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur eaque delectus, dicta necessitatibus ab sit eligendi iste omnis.</p>
         </div>
        </div>
        <div className="col col-md-6">
       <div className="test_content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis officia deleniti ipsum saepe fugit vitae nostrum fuga,</p>
        <div className='client_img_div'>
           <img src={client_img} className='client_img' alt="" />
           

        </div>
        <div className='client_text '>
        <h5>Christine Rose</h5>
        <h6>Costumer</h6>
      <div className='client_icon_div'>
      <img src={client_icon} className='client_icon' alt="" />
      </div>
        </div>
       </div>
        </div>
    </div>
   </div>
   
   </>
  )
}

export default Testimonial
