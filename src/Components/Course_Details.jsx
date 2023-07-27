import React from 'react'
import { useParams } from 'react-router-dom'
import {data} from"./Cards_Details"

function Course_Details() {
    const {id}=useParams()
  

  return (
  <>
<div className='container-fluid '>
{data.filter(pid => pid.id == id).map(filteredid => (
    <>

    <h1>{filteredid.id}</h1>
    <h1>
      {filteredid.Title}
    </h1>
    <h1>
      {filteredid.Price}
    </h1>
    <h1>{filteredid.au_title}</h1>
    <h1> {filteredid.Fo_icon} {filteredid.Followers}</h1>
    <h1> {filteredid.icon} {filteredid.icon_title}</h1>
    </>
  ))}
</div>
  </>
  )
}

export default Course_Details
