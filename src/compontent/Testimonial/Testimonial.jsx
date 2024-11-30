import React from 'react'
import Slider from "react-slick";
import sabirimg from "../../assets/image/test1.webp";
import BgImage from "../../assets/image/testimonial.png";



const bgStyle = {
    backgroundImage:`url(${BgImage})`,
    backgroundSize:"auto",
    backgroundPosition:"center",
    backgroundRepeat:"repeat",

}
const TestimonialData = [
    {
        id:1,
        name:"Sabir Ali",
        text:"A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers",
        img:sabirimg,
    },
    {
        id:2,
        name:"Sabir Ali",
        text:"A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers",
        img:sabirimg,
    },
    {
        id:3,
        name:"Sabir Ali",
        text:"A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers",
        img:sabirimg,
    },
    {
        id:4,
        name:"Sabir Ali",
        text:"A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers",
        img:sabirimg,
    },
    {
        id:5,
        name:"Sabir Ali",
        text:"A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers",
        img:sabirimg,
    }

]

const Testimonial = () => {
    {/* Slider config */}
    const settings = {
            dots:true,
            arrows:false,
            Infinite:true,
            speed:500,
            slidesToScroll:1,
            autoplay:true,
            autoplaySpeed:2000,
            cssEase:"linear",
            pauseOnHover:true,
            pauseOnFocus:true,
            responsive:[
               {
                breakpoint:1000,
                settings:{
                    slidesToShow:3,
                    sildesToScroll:1,
                    Infinite:true,
                },
               },
               {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    sildesToScroll:1,
                    initialSlide:2,
                },
               },
               {
                breakpoint:640,
                settings:{
                    slidesToShow:3,
                    sildesToScroll:1,
                    Infinite:true,
                },
               },
               

            ]

    }
  return (
    <div style = {bgStyle}>
        <div className='bg-white/80 dark:gray-800/90 py-14 dark:text-white'>
        <div className='contanier'>
            {/* header Section */}
            <div data-aos="fade-up" className='text-center mb-10'>
       <h1 className='text-4xl font-bold'>Testimonials</h1>
            </div>
            {/* Testimonials cards Section */}

            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {
                        TestimonialData.map(({id , name , text , img}) =>{
                             return(
                              <div key= {id} className='my-6'>
                                <div className='flex flex-col gap-6 shadow-lg py--8 px-6 mx-4 rounded-3xl bg-white dark:bg-dark'>
                                    {/* Content Section */}
                                    
                                        <div className='flex flex-col items-center gap-4'>
                                            <p className='text-xs'>{text}</p>
                                        </div>
                                        {/* Image Section */}
                                        <div>
                     <img src={img} alt= {name} className='rounded-full w-16 h-16'/>
                     <div >
                        <h1 className='text-xl font-bold text-black/60 dark:text-primary font-cursive'>{name}</h1>
                        <p className='text-sm font-bold text-black/45 dark:text-white'>Developer</p>

                     </div>
                                        </div>
                                    

                                </div>
                              </div>
                             );
                        })}

                </Slider>

            </div>

        </div>

        </div>
        
     
    </div>
  )
}

export default Testimonial
