

import React from "react";




function CenterPage(){
    return(
        <div>


            <div className=" bg-white h-[100vh] p-5 rounded-[5px]">
                <div className="flex justify-between">
                    <h2 className=" bg-black text-white px-4 py-2 rounded-2xl uppercase"> Turget Audience </h2>
                    <p className=" uppercase tracking-wider"> Desigital Platfrom </p>
                </div>



                <div>

                <div className="mt-10 flex justify-between gap-5 h-[80vh]">
                    <div className=" flex justify-between flex-col w-2/4">
                        <div className="">
                            <h1 className="text-4xl font-bold uppercase">Customar Review </h1>
                            <p className=" mt-5"> sadlkfj lsadfhakjsd fsd fkjsd fksajdflaskjdfhalsdkfjhsad </p>
                        </div>
                        <div className="text-6xl">
                            <i class="ri-arrow-right-up-line"></i>
                        </div>
                        
                    </div>
                    <div className="  w-full h-full bg-amber-200">
                        <div className=" relative w-1/3 m-3 rounded-3xl h-[70vh] overflow-hidden flex flex-col justify-between">
                            <img src={Img1} className="h-full w-full object-cover"/>

                            <div className=" absolute flex w-full h-full flex-col p-5">
                                <div className=" h-full w-full">
                                    <h1 className="flex justify-center items-center font-bold bg-white h-10 w-10 rounded-full"> 1 </h1>
                                </div>
                                <div>
                                    <div className=" text-white leading-relaxed">
                                        <p> Bangladesh, or the People's Republic of Bangladesh, is a densely populated South Asian nation known for its fertile river deltas </p>
                                    </div>
                                    <div className=" flex justify-between text-white mt-10">
                                        <button className=" bg-blue-600 p-2 rounded-2xl px-5"> Click Click </button>
                                        <i class="ri-arrow-right-line bg-blue-600 p-2 rounded-full px-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                </div>
            </div>



                
        </div>
    );
};

export default CenterPage;

