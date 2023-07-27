import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Course_Details from '../Components/Course_Details'

function Navigation() {
  return (

   <>
<Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/Course_Details/:id' element={<Course_Details/>}></Route>
    
</Routes>
   </>

  )
}

export default Navigation
