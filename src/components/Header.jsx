import React, { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

function Header() {

    const [toggle, setToggle] = useState(false);

    function handleClick() {
        setToggle(prevToggle => !prevToggle)
    }

    //setToggle(toggle => !toggle) 
    return (
        <div className="bg-[#2C786C] p-4 shadow-lg -z-1">
            <div className="max-w-[1240px] mx-auto flex justify-between items-center py-[11px]">
                <div className="text-3xl font-bold text-black">
                    KlickToLearn
                </div>
                {
                    toggle ? 
                    <AiOutlineClose onClick={handleClick} className="text-white text-2xl md:hidden block"/>
                    :
                    <AiOutlineMenu onClick={handleClick} className="text-white text-2xl md:hidden block"/>
                }
                <nav className="hidden md:flex text-white gap-10">
                    <a href="/home" class="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
                    <a href="/company" class="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Company</a>
                    <a href="/resources" class="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Resources</a>
                    <a href="/about" class="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">About</a>
                    <a href="/contact" class="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</a>
                </nav>
                {/*Responsive Menu */}
                <ul className={` duration-300 md:hidden text-white w-full h-screen fixed bg-black top-[92px] 
                    ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                    <li className="p-5">Home</li>
                    <li className="p-5">Company</li>
                    <li className="p-5">Resources</li>
                    <li className="p-5">About</li>
                    <li className="p-5">Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;