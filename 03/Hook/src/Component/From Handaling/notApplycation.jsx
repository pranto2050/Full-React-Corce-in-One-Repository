
import React, { useState } from "react";


function notApplycation(){

    const[data,setData] =useState([])

    const [title,setTitle] = useState();
    const [about,aboutTitle] = useState();



    const submitMe = (e)=>{
        e.preventDefault();
        const copyArray =[...data];
        copyArray.push({title,about});
        setData(copyArray);
        setTitle('');
        aboutTitle('');
        // console.log(data);
    }

    const deleteNone =(index1)=>{
        console.log(index1);
        const again = [...data];
        again.splice(index1,1);
        setData(again);
    }

    return(

        <div className="pt-5 h-[100vh] w-[100%] bg-fuchsia-400 flex flex-col items-center">
            
            <form onSubmit={submitMe} className="flex flex-col w-100 gap-4">
                <input className="p-5 border-2 border-b-fuchsia-800 rounded-2xl outline-none" value = {title} onChange={(e)=>{setTitle (e.target.value)}} type="text" placeholder="Inter Note Title"/>
                <input className="p-5 border-2 border-b-fuchsia-800 rounded-2xl outline-none" value = {about} onChange={(e)=>{aboutTitle (e.target.value)}} type="text" placeholder="Inter About Your Text from Title"/>

                <button className=" w-100 text-center bg-blue-400 p-4 rounded-2xl active:bg-blue-700 active:scale-110 cursor-pointer">Add Note</button>
            </form>



            <div className="mt-10 bg-emerald-300 w-100 h-auto rounded-2xl p-4">
                <h1 className="text-center font-bold text-cyan-900"> Your All Note </h1>
                <div >
                    {data.map(function(e,index1){
                        return (
                            <div key={index1} className=" flex justify-between mb-5 border-l-3 border-red-500 px-2"> 
                                
                                <div> 
                                    <h1 > Title head is:  {e.title} </h1>
                                    <h1> Title head is:  {e.about} </h1>
                                </div>
                                <div>
                                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={()=>{deleteNone(index1)}} className="w-6 h-6 stroke-current fill-none stroke-2 stroke-linecap-round stroke-linejoin-round bg-red-500 rounded-full cursor-pointer active:scale-110 hover:bg-red-700"> <path d="M18 6 6 18" /> <path d="m6 6 12 12" /> </svg>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
export default notApplycation;






