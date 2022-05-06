import React from "react";

function Card({name,id,username}) {
  return (
    <div className="col-span-1 m-2 transition-transform bg-teal-700 shadow-sm h-72 rounded-xl hover:scale-110 hover:cursor-pointer">

        <img src={`https://robohash.org/${id}?200x200`} alt="img" className="w-2/3 mx-auto rounded-t-xl" />

        <p className="pt-2 text-xl text-center md:text-3xl text-gray-50">{name} </p>

        <p className="py-2 text-xs font-light text-center md:text-lg text-gray-50"> {username} </p>

    </div>
  );
}

export default Card;
