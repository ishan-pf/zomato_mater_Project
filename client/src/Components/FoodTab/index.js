import React from 'react';
import {useParams , Link} from 'react-router-dom';
import { MdDeliveryDining , MdOutlineNightlife } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsHandbag } from "react-icons/bs";
import { IoBeerOutline } from "react-icons/io5";
import { GiMorgueFeet } from "react-icons/gi";

const FoodTab = () => {

    const MobileTab = () => {

        const allTypes = [

            {
                id: `Delivery`,
                icon: <BsHandbag />,
                name : "Delivery",
                isActive : false
            },
            {
                id: `DiningOut`,
                icon: <GiMorgueFeet />,
                name : "Dining Out",
                isActive : false
            },
            {
                id: `NightLife`,
                icon: <IoBeerOutline />,
                name : "NightLife",
                isActive : false
            }

        ];

        const { type } = useParams();

        return(
            <>
            <div className="md:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-around text-gray-500 border">
            {allTypes.map((items) =>(
                <Link to={`/${items.id}`}>

                <div
                className={
                  type === items.id
                    ? "flex flex-col relative items-center text-xl text-zomato-400 "
                    : "flex flex-col items-center text-xl "
                }
              >
                <div
                  className={
                    type === items.id &&
                    "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                  }
                />
                {items.icon}
                <h5 className="text-sm">{items.name}</h5>
              </div>


                </Link>

                
            ))}

            </div>
            </>
        )
    }

    const LargeTab = () =>{

        const allTypes= [

            {
                id: `Delivery`,
                icon: <MdDeliveryDining className="text-4xl p-1" />,
                name : "Delivery",
                isActive : false
            },
            {
                id: `DiningOut`,
                icon: <GiForkKnifeSpoon className="text-4xl p-1" />,
                name : "Dining Out",
                isActive : false
            },
            {
                id: `NightLife`,
                icon: <MdOutlineNightlife className="text-4xl p-1" />,
                name : "NightLife",
                isActive : false
            }

        ];

        const { type } = useParams();
     return(   
     <div className="flex items-center mt-16 lg:ml-32 gap-12">
     {allTypes.map((items) =>(
            <Link to={`/${items.id}`} >
        <div className={ type === items.id ? "flex  items-center gap-4 cursor-pointer text-zomato-400 relative" : "flex items-center gap-4 cursor-pointer"}>
                <div
                  className={
                    type === items.id &&
                    "absolute -bottom-6 w-full h-1 border-t-4 border-zomato-400 border-center"
                  }
                />
                <span  className={type ===items.id ? "rounded-full p-1 bg-yellow-200 " : "bg-gray-100 rounded-full p-1 "}>{items.icon}</span>
                <h3 className={type === items.id ? "text-2xl text-zomato-400" :"text-2xl text-gray-500 "}>{items.name}</h3>
        </div>


            </Link>

     ))}
           
            {/* <div  className="flex items-center gap-4 cursor-pointer">
                <span  className="bg-gray-100 rounded-full p-2"></span>
                <h3 className="text-2xl text-gray-500 ">Dining Out</h3>
            </div>
            <div  className="flex items-center gap-4 cursor-pointer">
                <span  className="bg-gray-100 rounded-full p-2"></span>
                <h3 className="text-2xl text-gray-500 ">Nightlife</h3>
            </div> */}
        </div>
     )
    }

    return (
      <>
      <div className="md:hidden">
          <MobileTab />
      </div>
       <div className="hidden md:flex">
            <LargeTab />

       </div>
      </>
    )
}

export default FoodTab
