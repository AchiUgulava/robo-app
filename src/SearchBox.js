import React from "react";
const SearchBox = ({searchfield,searchChange}) => {
  return (
    <div className="relative z-40 flex flex-col items-center justify-center w-full px-4 mb-4 md:px-12">
      <h1 className="mt-6 text-5xl leading-normal text-center text-white logo"> Your Robo Friends</h1>
        <input onChange={searchChange} className="w-full p-4 text-base font-medium leading-none text-white placeholder-white bg-transparent border-4 border-white rounded-full md:w-1/3 focus:outline-none" placeholder="Robots" />
    </div>
    
  );
}

export default SearchBox;