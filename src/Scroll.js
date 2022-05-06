import React from "react";
 
const Scroll = (props) => {
    return (
        <div className="flex justify-center pt-2 overflow-y-auto bg-white h-96 bg-opacity-20 scrollbar-thin scrollbar-thumb-white">
        {props.children}
        </div> 
        );
}
export default Scroll;