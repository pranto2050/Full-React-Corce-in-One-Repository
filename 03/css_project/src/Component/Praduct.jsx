

import React from "react";
import Img1 from '../assets/Img/logo.png'


function Praduct(){
    return(
        <div className=" bg-blue-300 mt-5 p-20">

            <div className=" flex items-center gap-10 h-50 rounded-[10px] ">
                <div><img src={Img1} className="h-40 rounded-full"/></div>
                <div>
                    <h1 className=" text-4xl font-bold"> Md.Pranto Islam</h1>
                    <p> I am a Websevoloper </p>
                </div>
            </div>

            <div className=" bg-white h-150 p-5 rounded-[5px]">
                <div className="flex justify-between">
                    <h2 className=" bg-black text-white px-4 py-2 rounded-2xl"> Turget Audience </h2>
                    <p> Desigital Platfrom </p>
                </div>
                <div className="mt-20 flex justify-around">
                    <div>
                        <h1 className="text-4xl font-bold">Customar Review </h1>
                        <p> sadlkfj lsadfhakjsd fsd fkjsd fksajdflaskjdfhalsdkfjhsad </p>
                    </div>
                    <div className=" overflow-hidden bg-amber-200">
                        <img src={Img1} className="h-40"/>
                        <h1 className="">sfasd </h1>
                    </div>
                    <div className=" overflow-hidden">
                        <img src={Img1} className="h-40"/>
                    </div>
                    <div className=" overflow-hidden">
                        <img src={Img1} className="h-40"/>
                    </div>
                </div>
            </div>

            <div className="">
                
            </div>

        </div>
    )
}


export default Praduct;
