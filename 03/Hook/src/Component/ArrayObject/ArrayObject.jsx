




import React from "react";



function ArrayObject(){

    let object ={
        name: 'Md.Pranro',
        id: 23303101,
        age: 23,
        university: 'IUBAT'
    }



    return(
        <div className=" h-[100vh] bg-cyan-300  flex flex-col justify-center items-center">

            <div>
                <h1> This Is Array Object </h1>
            </div>


            <div className=" flex flex-col justify-center items-center h-80 w-80 gap-10">
                <div className=" flex flex-col justify-center items-center">
                    <h1>My Name Is: Pranto</h1>
                    <h1>My Student Id is: 23303101 </h1>
                    <p> I am a student at IUABT University Dahka</p>
                    <p> I am 23 Years Old </p>
                </div>
                <div>
                    <button className=" bg-cyan-400 px-10 py-2 rounded-2xl hover:bg-cyan-600 cursor-pointer border-2 border-cyan-600 "> Change Data </button>
                </div>
            </div>


        </div>
    )
}

export default ArrayObject;



