import React from "react";
import { ReactTyped } from "react-typed";

function Banner() {
    return (
        <div className="bg-[#004445] w-full py-[60px]">
            <div className="max-w-[1240px] my-[60px] mx-auto font-bold text-center">
                <h2 className="text-white text-xl md:text-4xl md:p-[15px]">Learn with ME</h2>
                <h1 className="text-5xl md:text-[80px] text-white md:p-[15px]">Grow with ME</h1>
                <h3 className="text-[20px] md:text-[50px] text-white md:p-[15px]">
                    Learn<ReactTyped className="pl-3"
                        strings={[
                            "Web Development",
                            "Data Structure and Algorithm",
                            "Machine Learning",
                        ]}
                        typeSpeed={100}
                        backSpeed={120} 
                        loop={true}
                    >
                    </ReactTyped>
                </h3>
                <button className="bg-black text-white p-3 rounded">Get Started</button>
            </div>
        </div>
    );
}

export default Banner;