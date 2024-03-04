import React from "react";
import laptop from "../assets/laptop.jpg";
function Experts() {
    return (
        <div className="max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2">
            <div className=" col-span-1 w-[70%]">
                <img src={laptop} alt="Dummy_Image"/>
            </div> 
            <div className=" col-span-1 flex flex-col justify-center">
                <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
                <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <button className="w-[20%] bg-black text-white p-3 rounded">Get Started</button>
            </div>
        </div>
    );
}

export default Experts;