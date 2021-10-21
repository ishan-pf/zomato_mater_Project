import React,{ useState } from 'react'
import { FaPizzaSlice } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoCaretDownSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

function Navbar() {

    const MobileNav = () =>{

        return(
            <>
                <div className="flex items-center justify-between w-full md:hidden">
                    <div className="w-28">

                        <img  src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className="w-full h-full" />
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="bg-zomato-400 text-white  py-2 px-3 rounded-full">
                            Use App
                            </button>
                            <span className="border p-2 border-blue text-blue-400 rounded-full">
                                <FaPizzaSlice />
                            </span>
                        </div>
                </div>
                

            </>
        )
    }

    const NavMD = () => {

        const [dropdown , setDropdown] = useState(false);

        const changedropdown = ()=>{
           
            
            setDropdown(!dropdown)
            
        }

        return (
            <>
                <div className="flex gap-4 lg:gap-6  w-full ml-0 lg:ml-24 items-center ">
                    <div className="w-36 md:w-32 h-7 lg:h-8">

                    <img  src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className="w-full h-full" />
                    </div>
                    <div className="shadow-md w-3/5 flex h-full p-4 items-center gap-3" >
                       
                         <HiLocationMarker className="text-2xl  text-zomato-400" />
                        
                        <input type="text" className="flex outline-none w-1/2 lg:w-1/3 text-xs lg:text-lg" placeholder="Kidwai Nagar, Kanpur"/>
                        <span  onClick={changedropdown} className="" >
                        <IoCaretDownSharp className={ dropdown ? "transition-transform duration-3000 transform rotate-180" : "transition-transform duration-3000 transform rotate-0"}  /> 
                        </span>
                        <div className="w-0.5 h-6 bg-gray-300" />
                        <FiSearch className="text-2xl ml-2 text-gray-400" />
                        <input type="text" className="flex outline-none w-3/5  text-xs lg:text-lg" placeholder="Search for restaurant, cuisine or a dish"/>
                    </div>
                    <div className="w-40 ml-16 md:ml-8">
                    <button className="text-gray-400 text-xl md:text-lg ">Log in</button>
                    <button className="text-gray-400 text-xl md:text-lg ml-8">Sign up</button>
                    </div>
                </div>
            </>

        )
    }

    return (
        <>

            <nav className="p-4 flex bg-white shadow-md items-center md:hidden">
                <MobileNav />
                
            </nav>

            <nav className="hidden md:flex p-4 md:p-2 bg-white w-full mx-auto  ">
                <NavMD />
            </nav>
        </>
    )
}

export default Navbar
