import React from "react";
const SearchBox = ({searchChange}) => {
  return (
    <div className="z-40 flex flex-col items-center justify-between w-full px-4 mb-4 md:flex-row realtive md:px-12 max-h-36 md:max-h-16">
      <h1 className="text-3xl leading-normal text-center text-white"> Your Online Friends</h1>
        <input onChange={searchChange} className="w-full p-4 mt-4 text-base font-medium leading-none text-white placeholder-white bg-transparent border-4 border-white rounded-full md:w-1/3 focus:outline-none" placeholder="Search" />
    </div>
    
  );
}

export default SearchBox;