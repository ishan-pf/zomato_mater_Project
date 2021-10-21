import React from 'react'
import { useParams } from 'react-router-dom'


const Master = () => {

    const { type }= useParams();
    return (
        <div>
            {type}
        </div>
    )
}

export default Master
