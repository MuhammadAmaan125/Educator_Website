import React from 'react'
import Brand_img from "../images/logo.png"
import "../Css/Home.css"

function Navbar() {
  return (
    <>
<div className='Container' id='home'>
    
    <nav class="navbar navbar-expand-lg fixed-top"style={{backgroundColor:"white"}} >
  <div class="container">
    <a class="navbar-brand" href="#"><img src={Brand_img} alt="" id='Brand_img' /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5 px-5">
        <li class="nav-item px-3">
          <a class="nav-link active" aria-current="page" href="#home"><b>Home</b></a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link active" aria-current="page" href="#about"><b>About Us</b></a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link active" aria-current="page" href="#courses"><b>Courses</b></a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link active" aria-current="page" href="#blog"><b>blog</b></a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link active" aria-current="page" href="#contact_us"><b>Contact Us</b></a>
        </li>                            
      </ul>
      <div className="header_div">
        <div className="Header_button">
            <button type='button' className='Main_button'><b className='btn-text'>TRY FOR FREE</b></button>          
            
            </div> 
            <div className="Header_button_animation">

            </div>
      </div>
    </div>
  </div>
</nav>

    
</div>


    </>
  )
}

export default Navbar
