import React from 'react'
import Course_Category_icon_1 from "../images/course-category-icon-1.png"
import Course_Category_icon_2 from "../images/course-category-icon-2.png"
import Course_Category_icon_3 from "../images/course-category-icon-3.png"
import Course_Category_icon_4 from "../images/course-category-icon-4.png"
import Course_Category_icon_5 from "../images/course-category-icon-5.png"
import Course_Category_icon_6 from "../images/course-category-icon-6.png"
import "../Css/Course_Category.css"

function Course_Category() {
  return (
<>
  <div className="container py-5">
   <div className='header_div'>
    <h6 className='heading_text'>COURSE CATEGORY</h6>
    <h1>Explore Popular Courses</h1>
    </div> 
    <div className="row mt-5">
    <div className="col col-lg-4 col-md-6 col-sm-8 col-12 mt-3">
    <div className='card_div'>
        <img className='card_div_img' src={Course_Category_icon_1}  />
        <div className='card_div_text'>
            <b>Learn Data Science</b>
            <br />
            <span>Data is Everything</span>
          
        </div>
    </div> 
    
    </div>
    <div className="col col-lg-4 col-md-6 col-sm-8 col-12 mt-3">
    <div className='card_div'>
        <img className='card_div_img' src={Course_Category_icon_2}  />
        <div className='card_div_text'>
            <b>Business Strategy</b>
            <br />
            <span>Improve Your Business</span>
          
        </div>
    </div>
    
    </div>
    <div className="col col-lg-4 col-md-6 col-sm-8 col-12 mt-3">
    <div className='card_div'>
        <img className='card_div_img' src={Course_Category_icon_3}  />
        <div className='card_div_text'>
            <b>Learn Art & Design</b>
            <br />
            <span>Fun & Challenging</span>
          
        </div>
    </div>
    
    </div>
    <div className="col col-lg-4 col-md-6 col-sm-8 col-12 mt-3">
    <div className='card_div'>
        <img className='card_div_img' src={Course_Category_icon_4}  />
        <div className='card_div_text'>
            <b>Learn Lifestyle</b>
            <br />
            <span>New Skills,New You</span>
          
        </div>
    </div>
    
    </div>
    <div className="col col-lg-4 col-md-6 col-sm-8 col-12 mt-3">
    <div className='card_div'>
        <img className='card_div_img' src={Course_Category_icon_5}  />
        <div className='card_div_text'>
            <b>Learn Marketing</b>
            <br />
            <span>Improve Your Business</span>
          
        </div>
    </div>
    
    </div>
    <div className="col col-lg-4 col-md-6 col-sm-8 col-12 mt-3">
    <div className='card_div'>
        <img className='card_div_img' src={Course_Category_icon_6}  />
        <div className='card_div_text' >
            <b>Learn Finance</b>
            <br />
            <span>Fun & Challengi ng</span>
          
        </div>
    </div>
    
    </div>
    </div>
  </div>
    </>

  )
}

export default Course_Category
