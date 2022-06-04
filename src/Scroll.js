import React from "react";
 
const Scroll = (props) => {
    return (
        <div className="flex justify-center pt-2 overflow-y-auto bg-gray-100 shadow-inner scrollbar-thin scrollbar-thumb-white shadow-slate-400" style={{ "height":"30rem" }}>
        {props.children}
        </div> 
        );
}
export default Scroll;