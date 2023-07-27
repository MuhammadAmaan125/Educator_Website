import React from 'react'
import "../Css/Event.css"
import img from "../images/event-img.jpg"
import { event_card } from './Cards_Details'

const data =event_card

function Our_Event() {
  return (
<>

<div className="container-fluid event_container  py-5">
<div className="row">
    <div className="col col-md-6 col-12 mt-5">
<div className="event_img_div mt-5 mb-5 px-5 mx-5">
    <img src={img} className='event_img' alt="" />
</div>
    </div>
    <div className="col col-md-6 col-12 mb-5 mt-5">
       <div className="heading mt-5">
        <h6>OUR EVENTS</h6>
        <h1>Join Our Upcoming Events</h1>
       </div>
       {
        data.map((item,index)=>{
         return(
          <div className="event_card bg-light d-flex mt-3" key={index}>
            <div className="card-heading">
              <h3 className='card-date'>{item.date}</h3>
              <h6 className='card-month'>{item.month},{item.year}</h6>
            </div>
            <div className="card-time mx-3 mt-3">
              <p>{item.time} | {item.loc}</p>
              <h5><b>{item.title}</b></h5>
            </div>
          </div>
         )
        })
       }
   
    </div>
   
</div>



</div>

</>
  )
}

export default Our_Event
