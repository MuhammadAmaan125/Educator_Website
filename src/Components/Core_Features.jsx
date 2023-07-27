import React from 'react'
import "../Css/core_features.css"
import { feature_card } from './Cards_Details'
import feature_img from "../images/coure-features-img.jpg"

const data = feature_card

function Core_Features() {
  return (
<>
<div className="container-fluid  core_container   ">
    <div className="row">
        <div className="col col-md-6 col-12 content-column">
            <div className="feature_heading mt-5">
                <h6>
                    CORE FEATURES
                </h6>
                <h1>See What Our Missions Are</h1>
            
                {
             data.map((item,index)=>{
                return(
                   <div className='feature_cards_div mt-3'  key={index}>
                    <div className='feature_card_div'>
     <div className='feature_img_div'>
     <img className='feature_card_img' src={item.icon}  />
     </div>
        <div className='feature_card_text'>
            <b>{item.name}</b>
            <br />
            <span>{item.para}</span>
          
        </div>
    </div>
                   </div>
                )
             })                  
            }
            
            
            </div>
           
            
        </div>
        <div className="col col-md-6 col-12 img-column">
<div>
<img src={feature_img} className='feature_img' alt="" />
</div>
        </div>
    </div>




</div>


</>

    )
}

export default Core_Features
