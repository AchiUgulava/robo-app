
import React from "react";
import Card from "./Card"
const Cards = ({robots}) => { 
    
return(
    <div className="grid items-center justify-between w-5/6 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {
        robots.map(robot =>{
            return <Card
                key={robot.id} 
                name={robot.name} 
                username={robot.username} 
                id={robot.id}/>
                }
        )}
        
    </div>  
);
}

export default Cards;