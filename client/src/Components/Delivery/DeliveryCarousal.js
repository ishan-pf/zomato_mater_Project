import React from 'react'
import DeliveryFoodCategory from './DeliveryFoodCategory'
import DeliverySlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from './DeliveryArrows';

const images =[
    { 
        Name: "Kachori",
        image:"https://b.zmtcdn.com/data/o2_assets/f9d277eb1668d7abf9235302402b06001632716602.png"
       },
     {
       Name: "Pizza",
       image:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
       },
     { 
         Name: "Burger",
         image:"https://b.zmtcdn.com/data/dish_images/2803348e11fded15698f3970d68a27b91634805887.png"
       },
     { 
         Name: "Somosa",
         image:"https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png"
       },
   {  
       Name: "Paneer",
        image:"https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png"
       },
       { 
           Name: "Chaat",
           image:"https://b.zmtcdn.com/data/dish_images/0d37e90e4ea238490f562405cf444a8e1634731539.png"
       },
     { 
         Name: "Rolls",
         image:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
       },
     { 
         Name: "Cake",
         image:"https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png"
       },
   { 
        Name: "Biryani",
        image:"https://b.zmtcdn.com/data/dish_images/2a24c5264606bd78622267d28a3726821634805216.png"
       },
    { 
        Name: "Momos",
        image: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
       },
    { 
        Name: "chowmein",
        image: "https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png"
       },
   {  
       Name: "Dosa",
       image: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
   }
   ]

const MobilDeliveryCarousal = () =>{

    
return (
    <>
    <div className="flex flex-wrap justify-center gap-3">
       { images.map((image)=>(   
           <DeliveryFoodCategory image={image.image} name={image.Name} /> 
           ))
        }
    </div>
    </>
)

}

const DesktopCarousal = () =>{

 

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 700,
        swipeToSlide: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
     
      };
    return (
            <>  
                <div className="w-full select-none">
                <DeliverySlider {...settings}>
                {images.map((image) =>(
                    <div className="w-full h-full z-20 ">
                    <img src={image.image} alt="testing" className="w-40 lg:w-64 lg:h-52 object-cover bg-white rounded-xl " />
                    <span className="font-body text-xl  ">{image.Name}</span>
                    </div>
                ))}
                </DeliverySlider>
                </div>
            </>
        )
}


const DeliveryCarousal = () => {
    return (
        <>
        <h2 className="text-xl md:text-3xl font-body font-medium my-3 md:mt-20 md:pt-12 md:pb-4 md:mx-8 tracking-wider">Eat what makes you happy</h2>
        <div className="md:hidden">
            <MobilDeliveryCarousal />
        </div>
        <div className="hidden md:flex w-full h-full mx-8">
            <DesktopCarousal />
        </div>
        </>
    )
}

export default DeliveryCarousal
