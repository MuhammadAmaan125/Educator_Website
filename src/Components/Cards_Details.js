import img from '../images/course-1.jpg'
import au_img from "../images/course-instructor-img.jpg"
import img2 from "../images/course-2.jpg"
import img3 from "../images/course-3.jpg"
import img4 from "../images/course-4.jpg"
import img5 from "../images/course-5.jpg"
import img6 from "../images/course-6.jpg"
import { AiTwotoneStar } from 'react-icons/ai';
import { BiSolidUserCircle } from 'react-icons/bi';
import feature_icon1 from "../images/feature-icon-1.png"
import feature_icon2 from "../images/feature-icon-2.png"
import feature_icon3 from "../images/feature-icon-3.png"
import instructor1 from "../images/instructor-1.jpg"
import instructor2 from "../images/instructor-2.jpg"
import instructor3 from "../images/instructor-3.jpg"
import instructor4 from "../images/instructor-4.jpg"
import { FaFacebook } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import blog_1 from "../images/blog-1.jpg"
import blog_2 from "../images/blog-2.jpg"
import blog_3 from "../images/blog-3.jpg"
 
export const data = [
    
    {
       
       id:1,
        bg_image:img,
            btn_1:"Business",
            btn_2:"Marketing",
            Title:"Become Product Manager Learn Skills",
            au_img:au_img,
            au_title:"Lillan Wals",
            Price:"$50.00",
            icon:<AiTwotoneStar/>,
            icon_title:"5.0(2k)",
             Fo_icon:<BiSolidUserCircle/> ,
            Followers:"600k"
    },
    {
       id:2,
        bg_image:img2,
        btn_1:"Business",
        btn_2:"Marketing",
        Title:"Fashion and Luxury fashion in a chainging",
        au_img:au_img,
        au_title:"Lillan Wals",
        Price:"$80.00",
        Followers:"545k",
        icon:<AiTwotoneStar/>,
        icon_title:"4.7(5k)",
        Fo_icon:<BiSolidUserCircle/> ,
},
{
    id:3,
     bg_image:img3,
     btn_1:"Business",
     btn_2:"Marketing",
     Title:"Learning to write as a professional.",
     au_img:au_img,
     au_title:"Lillan Wals",
     Price:"$29.90",
     Followers:"317k",
     icon:<AiTwotoneStar/>,
     icon_title:"4.1(3k)",
     Fo_icon:<BiSolidUserCircle/> ,
},
{
    id:4,
     bg_image:img4,
     btn_1:"Business",
     btn_2:"Marketing",
     Title:"Improving accessibilty of Your markdown.",
     au_img:au_img,
     au_title:"Lillan Wals",
     Price:"$49.90",
     Followers:"891k",
     icon:<AiTwotoneStar/>,
     icon_title:"4.8(3.9k)",
     Fo_icon:<BiSolidUserCircle/> ,
},
{
    id:5,
     bg_image:img5,
     btn_1:"Business",
     btn_2:"Marketing",
     Title:"Master query in a short period of time.",
     au_img:au_img,
     au_title:"Lillan Wals",
     Price:"$89.00",
     Followers:"204k",
     icon:<AiTwotoneStar/>,
     icon_title:"3.8(1k)",
     Fo_icon:<BiSolidUserCircle/> ,
},
{
    id:6,
     bg_image:img6,
     btn_1:"Business",
     btn_2:"Marketing",
     Title:"Business intelligence analyst Course 2022.",
     au_img:au_img,
     au_title:"Lillan Wals",
     Price:"$199.00",
     Followers:"1.3M",
     icon:<AiTwotoneStar/>,
     icon_title:"4.9(23k)",
     Fo_icon:<BiSolidUserCircle/> ,
}
]

export const event_card =[
    {
      id:1,
        date:"28",
        month:"Feb",
        year:"2022",
        time:"10.30am To 2.30pm",
        loc:"Poland",
        title:"Business creativity workshops"
    },
    {
        id:2,
        date:"15",
        month:"Mar",
        year:"2022",
        time:"10.30am To 2.30pm",
        loc:"Poland",
        title:"Street Performance:Call For Art."
    },
    {
        id:3,
        date:"20",
        month:"May",
        year:"2022",
        time:"10.30am To 2.30pm",
        loc:"Poland",
        title:"Digital transformation conference"
    }
]
export const feature_card =[
     {
        id:1,
        name:"Student Life",
        para:"Nulla vestibulum peritium nibh at dignissim,",
        icon:feature_icon1
     },
     {
        id:2,
        name:"Best Online Class",
        para:"Nulla vestibulum peritium nibh at dignissim,",
        icon:feature_icon2
     }
, {
    id:3,
    name:"24x7 Program",
    para:"Nulla vestibulum peritium nibh at dignissim,",
    icon:feature_icon3
 }



]

export const instructors=[
              {
                id:1,
                name:"Louis Sullivan",
                postion:"Instructor",
                img:instructor1,
                fb_icon:< FaFacebook />,
                wa_icon:< BsWhatsapp style={{color:"green"}}  />,
                tw_icon:< FaTwitter />

              }
            ,
            {
                id:2,
                name:"Camden David",
                postion:"Instructor",
                img:instructor2,
                fb_icon:< FaFacebook />,
                wa_icon:< BsWhatsapp style={{color:"green"}}  />,
                tw_icon:< FaTwitter />
              },
              {
                id:3,
                name:"Fiona Dean",
                postion:"Instructor",
                img:instructor3,
                fb_icon:< FaFacebook />,
                wa_icon:< BsWhatsapp style={{color:"green"}}  />,
                tw_icon:< FaTwitter />
              },
              {
                id:4,
                name:"Cherish Sosa",
                postion:"Instructor",
                img:instructor4,
                fb_icon:< FaFacebook />,
                wa_icon:< BsWhatsapp style={{color:"green"}} />,
                tw_icon:< FaTwitter />
              }
         

]
export const blog =[

    {
        id:1,
        img:blog_1,
        title:"Proin feugiat tortor non neque eleifend.",
        date:"07 Jan,2022",
        comment:"3 Comments"
    },
    {
        id:2,
        img:blog_2,
        title:"Proin feugiat tortor non neque eleifend.",
        date:"04 Jan,2022",
        comment:"10 Comments"
    },
    {
        id:3,
        img:blog_3,
        title:"Proin feugiat tortor non neque eleifend.",
        date:"01 Jan,2022",
        comment:"5 Comments"
    }
]