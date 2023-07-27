import About_US from "./Components/About_US";
import Best_Coach from "./Components/Best_Coach";
import Blog from "./Components/Blog";
import Core_Features from "./Components/Core_Features";
import Course_Category from "./Components/Course_Category";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Our_Event from "./Components/Our_Event";
import Our_online_course from "./Components/Our_online_course";
import Testimonial from "./Components/Testimonial";


function App() {
  return (
    <>
     <Navbar/>
    <Home/>  
    <Course_Category/>  
     <About_US/>  
      <Our_online_course/>  
     <Our_Event/>
    <Core_Features/> 
     <Best_Coach/>  
    <Testimonial/>  
   <Blog/> 
  <Footer/>  
    </>
    );
}

export default App;
