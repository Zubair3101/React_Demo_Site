import React from "react";

function Newsletter() {
    return (
        <div className="bg-[#004445] p-4">
            <div className="max-w-[1240px] mx-auto md:flex justify-between py-[40px]">
                <div className="m-2">
                    <h1 className="text-[20px] md:text-[30px] text-white font-bold">Want to learn latest COMPUTER SCIENCE tools?</h1>
                    <span className="text-white">Sign up to the Newsletter for the latest update</span>
                </div>
                <div className="m-2">
                    <input type="text" placeholder="Enter your Gmail" className="mb-2 p-3 mr-2 text-black rounded"/>
                    <button className="bg-black text-white p-3 rounded">Notify Me</button>
                    <br />
                    <p className="text-white">We care about the protection of your data.<br /> Please read our <a href="www.google.com"><u>Privacy Policy</u></a>.</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;