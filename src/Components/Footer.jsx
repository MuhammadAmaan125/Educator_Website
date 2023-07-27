import React from 'react'
import "../Css/footer.css"
import footer_logo from "../images/logo-footer.png"
import {FaFacebook} from'react-icons/fa'
import {FaTwitter} from'react-icons/fa'
import {FaInstagram} from'react-icons/fa'
import {FaYoutube} from'react-icons/fa'
import {BiPaperPlane} from'react-icons/bi'
import footer_icon from "../images/cta-bg-img.png"
function Footer() {
  return (
<>




<footer class=" footer text-light " id='contact_us'>
 
     
  <div class="container footer_container mt-5">
    <section  className=" box" >
     <div className=" content_box">

  <img src={footer_icon} style={{width:"300px"}}  alt=""  />

<div className="box_text ">
  
<h1> Start Your Best Online Classes With Us</h1>
</div>

   
     
      <div className="footer_btn ">
    <div className="footer_btn_div">
        <button className='f_btn'><b className='btn-text'>Contact Us</b> </button>
   </div>
  <div className="f_btn_animation">

</div>
  
  </div>

  </div>
    </section>
    <div class="row footer_row ">
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12 footer_col " >
       <div>
       <h5><img src={footer_logo} className='footer_logo' alt="" /></h5>
         
         <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto est, id earum rem asperiores,</p>

        <div className="social-icons ">
            <ul class="list-unstyled d-flex " >
                <li className='mx-3'><FaFacebook /></li>
                <li className='mx-3'><FaTwitter  /></li>
                <li className='mx-3'><FaInstagram  /></li>
                <li className='mx-3'><FaYoutube /></li>
           
            </ul>
            </div>
       </div>
      </div>
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12 footer_col">
     <div>
     <h5>Quick Links</h5>
        <ul class="list-unstyled py-2">
          <li className='py-2'>  Home</li>
          <li className='py-2'>  About Us</li>
          <li className='py-2'> Courses</li>
          <li className='py-2'> Blog</li>
          <li className='py-2'> Contact Us</li>
        </ul>
     </div>
      </div>
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12 footer_col">
       <div>
       <h5>Other Links</h5>
        <ul class="list-unstyled py-2">
          <li className='py-2'>Instructor</li>
          <li className='py-2'>FAQ</li>
          <li className='py-2'>Event</li>
          <li className='py-2'>Privacy Policy</li>
          <li className='py-2'>Term & Condition</li>
        </ul>
       </div>
      </div>
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12 footer_col">
    <div>
    <h5>Subscribe Now</h5>
        <div class="input-group mb-3 mt-4 ">
 
  <input type="text" class="form-control" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1"/>
  <span class="input-group-text footer_icon" id="basic-addon1"><BiPaperPlane className='icon'/></span>
</div>
    </div>
      </div>
    </div>
  
    <div className="row mt-3">
      <div className="col col-sm-12">
        <div className='d-flex justify-content-center'>
          <p>Created by <span style={{color:"orangered"}}>Mr.Web Designer</span> | All Rights Reserved! </p>
        </div>
      </div>
    </div>
  </div>
</footer>


</>
  )
}

export default Footer
