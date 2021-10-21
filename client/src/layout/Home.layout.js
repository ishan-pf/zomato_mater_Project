import React from 'react'
import Navbar from '../Components/Navbar'
import FoodTab from '../Components/FoodTab'
function HomeLayout(props) {
    return (
        <div>
            <div className=" container mx-auto lg:px-20">
                <Navbar />
                {/* {props.children} */}
                <FoodTab />
            </div>
            
        </div>
    )
}

export default HomeLayout
