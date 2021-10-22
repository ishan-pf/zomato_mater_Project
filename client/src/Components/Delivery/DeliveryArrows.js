import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export const NextArrow = (props) => {

    return(

        <>

        <div 
        
        className="shadow-lg bg-white  hover:bg-opacity-80"
        style =  { {...props.style ,  width:"2.5rem" , height:"2.5rem",display:"flex",justifyContent:"center",alignItems:"center", borderRadius:"50%",position:"absolute",left:"95%",top:"41%",zIndex:"3" } }
        onClick = {props.onClick}
           >
        <span><IoIosArrowForward className="text-black text-xl cursor-pointer opacity-100" /></span>
        
        </div>
        </>
    )

};


export const PrevArrow = (props) => {

    return(

        <>

        <div 
        
        className="shadow-lg -left-6 bg-white hover:bg-opacity-80"
        style =  { {...props.style, width:"2.5rem" , height:"2.5rem",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%" ,position:"absolute",top:"42%",zIndex:"3"} }
        onClick = {props.onClick}
           >
        <span><IoIosArrowBack className="text-black text-xl cursor-pointer opacity-100" /></span>
        
        </div>
        </>
    )

};