import React from "react";

function Footer() {
    return (
        <div className="p-[50px] bg-[#004445]">
            <div className="bg-[#004445] flex justify-between max-w-[1240px]  mx-auto">
                <div>
                    <h1 className="text-3xl font-bold text-black pb-3">KlickToLearn</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div>
                    <h3 className="text-[#00df9a] pb-2">Solution</h3>
                    <ul className="text-white pb-2">
                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>E-Commerce</li>
                        <li>Insights</li>
                    </ul>
                </div>
                <div>
                <h3 className="text-[#00df9a] pb-2">Support</h3>
                    <ul className="text-white pb-2">
                        <li>Pricing</li>
                        <li>Documentation</li>
                        <li>Guides</li>
                        <li>API Status</li>
                    </ul>
                </div>
                <div>
                <h3 className="text-[#00df9a] pb-2">Company</h3>
                    <ul className="text-white pb-2">
                        <li>About</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                        <li>Placement</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;