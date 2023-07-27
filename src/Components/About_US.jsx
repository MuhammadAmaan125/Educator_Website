import React from 'react'
import about_img_bg from "../images/about-img-bg.png"
import about_img from "../images/about-img.png"
import banner_icon_1 from "../images/banner-aliment-icon-1.png"
import banner_icon_3 from "../images/banner-aliment-icon-3.png"
import { BsCheckCircleFill } from 'react-icons/bs';


import "../Css/About_US.css"
function About_US() {
  return (
    <>
    <div className="container-fluid bg-light about_container py-5 " id='about'>
        <div className="row">
            <div className="col col-md-6 col-12">
                     <div className="about_div">
                      <div className='col'>
                      <img src={about_img_bg} className='about_img_bg' alt="" />
                      </div>
                       <div className='col'>
                       <img src={about_img} className='about_img' alt="" />
                      
                       </div>
                      <div className='col'>
                      <img src={banner_icon_1} className='about_icon' alt="" />
                      
                      </div>
                      <div className='col'>
                      <img src={banner_icon_3} className='about_icon2' alt="" />
                    
                      </div>
                      
                       </div>
            </div>
            <div className="col col-md-6 col-12 ">
                <div className="about_content ">
                    <div className="about_heading">
                        <h6>ABOUT US</h6>
                        <h1>We Have Best Online Education</h1>
                    </div>
                    <div className="about_text mt-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deleniti aperiam autem animi, cum itaque quis est nobis at soluta saepe nesciunt, et molestias porro quasi cupiditate.</p>
                                         </div>
                                         <div className='about_icons'>
                                            
                                <BsCheckCircleFill className='about_li_icon'/><b className='bold '> Suspendisse nunc massa,pellentesque eu nibh eget.</b>
                             <br /><BsCheckCircleFill className='about_li_icon'/> <b className='bold '>Suspendisse nunc massa,pellentesque eu nibh eget</b>
                            <br /><BsCheckCircleFill className='about_li_icon'/> <b className='bold '>Suspendisse nunc massa,pellentesque eu nibh eget.</b>
                        

                                         </div>
                                         <div className="about_btn mt-4">
  <div className="about_btn_div">
  <button className='btn1'><b className='btn-text'>EXPLORE MORE</b></button>
  </div>
  <div className="about_btn_animation">

</div>
  
  </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default About_US
