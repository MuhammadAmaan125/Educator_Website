import React from 'react'
import "../Css/blog.css"
import { blog } from './Cards_Details'
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { FaRegComment } from 'react-icons/fa';


const data = blog
function Blog() {
  return (
 <>
 <div className="container blog_container py-5" id='blog'>
<div className='blog_heading mt-5'>
    <h6>OUR BLOG</h6>
    <h1>Latest Blog & News</h1>
</div>

<div className="row">
    {
     data.map((item,index)=>{
        return(
            <>
            <div className="col col-lg-4 col-md-6 col-sm-8 col-12 mt-3" key={index }>
    <div class="card" >
  <img src={item.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
  
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex justify-content-between"> <div><MdOutlineCalendarMonth/> <span className='blog_date'>{item.date}</span></div> <div ><FaRegComment className='blog_icon'/>   <span className='blog_date'>{item.comment}</span></div> </li>
  </ul>
 
</div>
    </div>
            
            </>
        )
     })
    }
</div>


 </div>
 
 </>
  )
}

export default Blog
