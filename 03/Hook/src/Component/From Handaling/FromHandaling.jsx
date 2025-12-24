

import React from "react";



function FromHandaling(){

    const submit = (e)=>{
        e.preventDefault();
        console.log("Submit Is Working")
    } 


    return(

        <div className=" h-[100vh] w-[100%] bg-fuchsia-400 flex flex-col items-center">
            
            <form onSubmit={submit} className="flex flex-col items-center w-90 mt-10">
                <input type="text" name="name" className=" border-2 w-60 p-5 rounded-2xl bg-fuchsia-300"/>
                <button type="submit" className=" bg-fuchsia-600 px-10 mt-2 rounded-2xl cursor-pointer"> Submit </button>
            </form>


            <div className=" mt-10 bg-blue-300 h-80 w-[80%] flex justify-center rounded-2xl">
                <h1 className="mt-5"> Output IS: </h1>
            </div>


        </div>
    )
}
export default FromHandaling;






