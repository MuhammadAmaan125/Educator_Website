import React from 'react'
import "../Css/Our_online_course.css"
import {data} from"./Cards_Details"
import { Link} from 'react-router-dom'



function Our_online_course() {
  return (
   <>
   <div className="container py-5" id='courses'>
   <div className="row">
    <div className="col col-md-6 col-12">
    <div className="our_course_heading py-5">
      <h6>OUR ONLINE COURSES</h6>
       <h1>Find The Right Online Course For You</h1>
     </div>
    </div>
    <div className="col col-md-6 col-12">
    <div className="online_course_div mt-5">
  <div className="online_course_btn">
  <button className='btn1'><b className='btn-text'>VIEW ALL COURSE</b></button>
  </div>
  <div className="online_course_btn_animation">

</div>
  
  </div> 
    </div>
   </div>


   <div className="row">
    {data.map((item,index)=>{
  return(
  
  <div className="col col-lg-4 col-md-6 col-sm-8 col-12" key={index}>
  <div class="card mt-3" >
<img src={item.bg_image} class="card-img-top" alt="..."/>
<div className='card-btn'>
<button type="button" class="btn btn-1 mx-3 mt-5"><Link id='link' to={`/Course_Details/${item.id}`}>{item.btn_1}</Link></button>
<button type="button" class="btn btn-primary mt-5">{item.btn_2}</button>
</div>
<div class="card-body" >
  <h5 class="card-title">{item.Title}</h5>
  <p class="card-text mt-4"><img src={item.au_img} className='au_img' alt="" /> <span>{item.au_title}</span>  <span className='card_icon mt-2'>{item.icon} <span className='icon_text'>{item.icon_title}</span></span> </p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">{item.Price} <span className='fo_icon'>{item.Fo_icon} <span className='icon_text'>{item.Followers}</span> </span></li>

</ul>

</div>
  </div>
  
  )
    })}


   


   </div>


   </div>

   </>
  )
}

export default Our_online_course