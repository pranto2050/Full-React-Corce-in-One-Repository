


import React from "react";
import Img from '../assets/Img/logo.png';


function Header (){
    return(
        <div className="flex justify-between items-center sticky w-[100%]">
            <div>
                <img src={Img} className= "h-25"/>
            </div>

            <nav>
                <ul className=" flex text-[rgb(35,15,95)] gap-5">
                    <li><a href="#"> Home </a></li>
                    <li><a href="#"> About </a></li>
                    <li><a href="#"> Location </a></li>
                    <li><a href="#"> Contact Us </a></li>
                </ul>
            </nav>
            <div>
                <button className=" bg-[rgb(35,15,95)] text-white p-2 rounded-lg mt-4"> Login </button>
            </div>



        </div>
    )
}
export default Header;