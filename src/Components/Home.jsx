import React from 'react'
import img from "../images/shape-1.png"
import img1 from "../images/banner-line.png"
import "../Css/Home.css"
import img2 from "../images/shape-2.png"
import banner_img from "../images/banner-img.png"
import banner_img_bg from "../images/banner-img-bg.png"
import banner_icon_4 from "../images/banner-aliment-icon-4.png"
import shape_3 from "../images/shape-3.png"
import banner_icon_1 from "../images/banner-aliment-icon-1.png"
import banner_icon_2 from "../images/banner-aliment-icon-2.png"
import banner_icon_3 from "../images/banner-aliment-icon-3.png"

function Home() {
  return (
    <>
    <div className="container-fluid bg-light  home_container py-5" >
 
 <div className="row">
  <div className="col col-md-6 col-12">
      
 <div className='heading_shape'>
    <img src={img} alt="" className='shape-1'  />
        <h6 id='banner-text'>WELCOME TO ONLINE COACHING</h6>
 
 
<div className='Banner_heading'>
<div id='banner-main-text'>
<h1>Get Class From Top Instructor </h1>
</div>
<div className='Banner_heading_img'>
<img src={img1} alt="" className='heading_img mb-5' />

</div>
</div>
<div className='Banner_text'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
</div>
<div id='buttons_div'>
<div className="Banner_buttons">
  <div className="btn_div">
 <button className='btn1'><b className='btn-text'>EXPLORE COURSES</b> </button>
  </div>
  <div className="btn_animation">

</div>
  
  </div>
  <div className="Banner_buttons2">
  <div className="btn_div2">
    <button type='button' className='btn2'><b className='btn-text'>CONTACT US</b></button>
  </div>
  <div className="btn_animation2">

</div>
  
  </div>
  
</div>
  

 </div>
  </div>
  <div className="col col-md-6 col-12">
  <div className="div2">
  <div className="banner_img_bg_div">
    <img src={banner_img_bg} className='banner_img_bg' alt="" />
  </div>
  <div className="banner_img_div2">
   <div>
   <img src={banner_img} className='banner_img2' alt="" />
   
   </div>
   <div>
   <img src={banner_icon_4} className='banner_icon_4' alt="" />
   </div>
   <div>
   <img src={shape_3} className='shape_3' alt="" />

   </div>
<div>
<img src={banner_icon_1} className='banner_icon_1' alt="" />

</div>
<div>
<img src={banner_icon_2} className='banner_icon_2' alt="" />
</div>
  <div>
  <img src={banner_icon_3} className='banner_icon_3' alt="" />

  </div>
    </div>
</div>

  </div>
 </div>

 <div className="banner_img_div">
  <img src={img2} className='banner_img' alt=""  />
</div> 

  


   
    </div>
    </>
  )
}

export default Home
