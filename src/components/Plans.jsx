import React from "react";
import {MdWeb} from "react-icons/md";

function Plans(props) {
    return (
        <div className="py-[50px]">
            <div className="bg-[#2C786C] p-4 shadow-md rounded-2xl text-center p-4 hover:scale-105 hover:bg-white duration-400 bg-grey-100">
                <MdWeb className="text-[120px] text-justify ml-[150px]"/>
                <h1 className="text-[15px] font-bold text-black py-2">{props.plan.name}</h1>
                <h1 className="text-[25px] font-bold text-black py-2">{props.plan.price}</h1>
                <p className="text-black py-2">{props.plan.desc1}</p>
                <p className="text-black py-2">{props.plan.desc2}</p>
                <button className="w-[30%] bg-black text-white p-3 rounded py-2">Start Trial</button>
            </div>
        </div>
    );
}

export default Plans;