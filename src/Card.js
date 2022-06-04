import React from "react";
import { FaDribbble,FaFacebookF,FaTwitter } from "react-icons/fa";
function Card({name,id,username}) {
  return (
    <div className="col-span-1 px-4 py-2 m-2 transition-transform bg-transparent h-max rounded-xl hover:scale-110 hover:cursor-pointer">
        <img src={`https://picsum.photos/seed/${username}/150`} alt="..." class="shadow-lg rounded-full mx-auto max-w-120-px"/>
        <div className="text-center">
          <h5 className="text-xl font-semibold text-gray-700">{name} </h5>
          <p className="mt-1 text-sm font-semibold text-gray-400 uppercase"> {username} </p>
          <div className="">
            <button class="bg-blue-300 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2 hover:scale-110 transition-transform" type="button">
            <FaTwitter/>
            </button>
            <button className="w-8 h-8 p-2 mb-1 mr-1 text-white transition-transform bg-blue-600 rounded-full outline-none focus:outline-none hover:scale-110" type="button">
              <FaFacebookF />
              </button>
              <button className="w-8 h-8 p-2 mb-1 mr-1 text-white transition-transform bg-pink-500 rounded-full outline-none focus:outline-none hover:scale-110" type="button">
              <FaDribbble/>
            </button>
          </div>
        </div>
      </div>
  );
}

export default Card;
