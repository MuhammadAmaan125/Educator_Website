import React from 'react'
import "../Css/coach.css"
import { instructors } from './Cards_Details'

const data = instructors

function Best_Coach() {
  return (
   <>
   <div className="container coach_conainer  py-5">
   <div className='coach_heading'>
            <h6>BEST COACH</h6>
            <h1>Our Expert Instructor</h1>
        </div>
    <div className="row">
        {
            data.map((item,index)=>{
             return(

                <>
                <div className="col col-lg-3 col-md-6 col-sm-8 col-12">
        <div class="card feature-card">
				<div class="content">
					<div class="imgBx">
						<img className='coach_img' src={item.img}/>
					</div>
					<div class="contentBx">
						<h3>{item.name}<br/><span>{item.postion}</span></h3>
					</div>
				</div>
				<ul class="sci">
					<li>
						<a href="">{item.fb_icon}</a>
					</li>
					<li>
						<a href="">{item.wa_icon}</a>
					</li>
					<li>
						<a href="">{item.tw_icon}</a>
					</li>
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

export default Best_Coach
