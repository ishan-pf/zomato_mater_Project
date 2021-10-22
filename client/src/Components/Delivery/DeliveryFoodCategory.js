import React from 'react'

const DeliveryFoodCategory = (props) => {
    return (
        <>
        <div className="bg-white rounded-lg shadow-lg">
            <div className="w-30 h-28 ">
                <img 
                    src={props.image}
                    alt={props.name}
                    className="w-full h-full rounded-t-lg"
                />
            </div>
            <div>
                <h3 className="my-2 text-base font-medium text-center">{props.name}</h3>
            </div>
        </div>
        </>
    )
}

export default DeliveryFoodCategory
