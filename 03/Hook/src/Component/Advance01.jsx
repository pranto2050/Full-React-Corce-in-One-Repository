


import React, { useState } from "react";


function Advance01(){
    
    const [count, setcount] = useState(0);
    const clicked = ()=> {
        setcount(count + 1);
        
        console.log('Hellow World');
    }


    return(
        <div>


        <div className=" bg-emerald-400 h-[100vh] w-full flex flex-col justify-center items-center gap-10">
            <h1> Advance {count} </h1>
            <button className=" shadow-2xl border-2 px-5 py-2 hover:bg-emerald-600 rounded-3xl" onClick={clicked}> Click </button>
        </div>



        </div>
    )
}

export default Advance01;



