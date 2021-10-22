import React from 'react'
import Navbar from '../Components/Navbar'
import FoodTab from '../Components/FoodTab'
function HomeLayout(props) {
    return (
        <div>
            <div className=" container mx-auto lg:px-20">
                <Navbar />
                <FoodTab />
              
               
            </div>
            <hr className="relative top-6 hidden md:block" />
            <div className="container-md mx-auto lg:px-40 md:pr-16 md:bg-gray-100 md:h-80 lg:h-96">
            {props.children}
            </div>
        </div>
    )
}

export default HomeLayout
