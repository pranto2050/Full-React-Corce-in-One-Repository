import React from "react";

function SiderPart( {user} ) {
    return (
        <div id="right" className="relative w-[300px] m-3 rounded-3xl h-[70vh] overflow-hidden shrink-0">

            <img src={user.img} className="h-full w-full object-cover" />

            <div className="absolute inset-0 flex flex-col p-5 justify-between">

                <h1 className="flex justify-center items-center font-bold bg-white h-10 w-10 rounded-full">
                    {user.id}
                </h1>

                <div>
                    <p className="text-white leading-relaxed">
                        {user.description}
                    </p>

                    <div className="flex justify-between text-white mt-10">
                        <button className=" p-2 rounded-2xl px-5" style={{backgroundColor:user.color}}>
                            {user.click}
                        </button>
                        <i className="ri-arrow-right-line p-2 rounded-full px-3" style={{backgroundColor:user.color}}></i>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SiderPart;
